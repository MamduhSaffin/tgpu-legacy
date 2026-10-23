#!/usr/bin/env python3
"""Offline validation for the three TGPU Legacy homepages and sitemap."""
from pathlib import Path
from html.parser import HTMLParser
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[2]
BASE = "https://tgpu.my/"
PAGES = {"index.html": BASE, "en.html": BASE + "en.html", "ar.html": BASE + "ar.html"}
LANGS = {"ms-MY": BASE, "en": BASE + "en.html", "ar": BASE + "ar.html", "x-default": BASE}
NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9",
      "x": "http://www.w3.org/1999/xhtml"}

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonical = []
        self.alternates = {}
        self.lang = None
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html":
            self.lang = a.get("lang")
        if tag == "link" and a.get("rel") == "canonical":
            self.canonical.append(a.get("href"))
        if tag == "link" and a.get("rel") == "alternate" and "hreflang" in a:
            self.alternates[a["hreflang"]] = a.get("href")

def run():
    sitemap = ET.parse(ROOT / "sitemap.xml")
    community = ET.parse(ROOT / "sitemap-community.xml")
    for doc in (sitemap, community):
        locs = [e.text for e in doc.findall(".//sm:loc", NS)]
        assert len(locs) == len(set(locs)), "duplicate sitemap URLs"
        assert all(s.startswith(BASE) for s in locs), "unexpected sitemap host"
    entries = {}
    for entry in sitemap.findall(".//sm:url", NS):
        loc = entry.find("sm:loc", NS)
        if loc is not None:
            entries[loc.text] = {
                a.attrib["hreflang"]: a.attrib["href"]
                for a in entry.findall("x:link", NS)
                if a.attrib.get("rel") == "alternate"
            }
    for filename, canonical in PAGES.items():
        parser = PageParser()
        parser.feed((ROOT / filename).read_text(encoding="utf-8"))
        assert parser.canonical == [canonical], f"{filename}: canonical mismatch"
        assert parser.alternates == LANGS, f"{filename}: page hreflang mismatch"
        assert entries.get(canonical) == LANGS, f"{filename}: sitemap hreflang mismatch"
        assert parser.lang == ("ms" if filename == "index.html" else filename[:2]), f"{filename}: language mismatch"
    # Verify ecosystem footer links in every translated homepage.
    destinations = (
        "https://iqra.tgpu.my/",
        "https://teman.tgpu.my/",
        "https://tgpugulf.com/",
    )
    from html.parser import HTMLParser

    class FooterLinks(HTMLParser):
        def __init__(self):
            super().__init__()
            self.in_footer = False
            self.links = {}
        def handle_starttag(self, tag, attrs):
            a = dict(attrs)
            if tag == "footer":
                self.in_footer = True
            if tag == "a" and self.in_footer and a.get("href") in destinations:
                self.links.setdefault(a["href"], []).append(a)
        def handle_endtag(self, tag):
            if tag == "footer":
                self.in_footer = False

    for filename in PAGES:
        footer = FooterLinks()
        footer.feed((ROOT / filename).read_text(encoding="utf-8"))
        for url in destinations:
            matches = footer.links.get(url, [])
            assert len(matches) == 1, f"{filename}: expected one footer link to {url}"
            assert "noopener" in matches[0].get("rel", "").split(), f"{filename}: missing noopener for {url}"

    robots = (ROOT / "robots.txt").read_text(encoding="utf-8")
    for name in ("sitemap.xml", "sitemap-community.xml"):
        assert f"Sitemap: {BASE}{name}" in robots, f"robots missing {name}"
    print(f"PASS: {len(PAGES)} homepages and 2 sitemaps checked.")

if __name__ == "__main__":
    run()
