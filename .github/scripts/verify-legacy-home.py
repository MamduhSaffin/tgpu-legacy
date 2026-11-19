from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
import struct


class Page(HTMLParser):
    def __init__(self, file):
        super().__init__()
        self.tags = []
        self.feed(file.read_text(encoding="utf-8"))

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))

    def attributes(self, tag):
        return [attrs for name, attrs in self.tags if name == tag]

    def ids(self):
        return Counter(attrs["id"] for _, attrs in self.tags if "id" in attrs)


logo = "assets/tgpu-logo.png"
favicon = "assets/tgpu-legacy-favicon.png"
site = "https://tgpu.my/"
required_ids = {
    "main", "home", "legacy", "about", "mission", "vision", "classes", "programs",
    "community", "explore-tgpu", "tgpu-ecosystem", "naturals", "digital-ecosystem",
    "gulf-advisory", "leadership", "tgpu-support-invite", "contact",
}
apps = {f"https://{app}.tgpu.my/" for app in ("iqra", "teman", "academy", "learning", "satu", "khalifah")}

for home, language, suffix in (("index.html", "ms", ""), ("en.html", "en", "-en"), ("ar.html", "ar", "-ar")):
    file = Path(home)
    page = Page(file)
    html, = page.attributes("html")
    assert html["lang"] == language, home
    assert html.get("dir", "ltr") == ("rtl" if language == "ar" else "ltr"), home
    assert len(page.attributes("h1")) == len(page.attributes("footer")) == 1, home
    ids = page.ids()
    assert all(count == 1 for count in ids.values()), (home, ids)
    assert required_ids <= ids.keys(), (home, required_ids - ids.keys())
    assert "<title>TGPU Legacy" in file.read_text(encoding="utf-8"), home

    metadata = {
        attrs.get("name", attrs.get("property")): attrs.get("content")
        for attrs in page.attributes("meta")
    }
    assert metadata["og:site_name"] == "TGPU Legacy", home
    assert metadata["og:image"] == site + logo, home
    links = page.attributes("link")
    canonical, = [attrs["href"] for attrs in links if attrs["rel"] == "canonical"]
    assert canonical == (site if language == "ms" else site + home), home
    assert {attrs["hreflang"] for attrs in links if attrs["rel"] == "alternate"} == {"ms-MY", "en", "ar", "x-default"}, home
    assert any(attrs["rel"] == "icon" and attrs["href"] == favicon for attrs in links), home
    assert any(attrs["src"] == logo for attrs in page.attributes("img")), home

    anchors = {attrs["href"] for attrs in page.attributes("a") if "href" in attrs}
    assert apps <= anchors, (home, apps - anchors)
    assert {"https://tgpu.tech/", "https://tgpugulf.com/", "https://founder.tgpu.my/", "search/", "support/"} <= anchors, home
    assert {f"classes{suffix}.html", f"learn{suffix}.html#legacy", "https://wellness.tgpu.my/"} <= anchors, home
    for href in anchors:
        url = urlsplit(href)
        if url.scheme:
            assert url.scheme in ("https", "mailto"), (home, href)
            continue
        target = Path(url.path) if url.path else file
        if target.is_dir():
            target /= "index.html"
        assert target.is_file(), (home, href)
        if url.fragment:
            assert url.fragment in Page(target).ids(), (home, href)
    for attrs in page.attributes("a"):
        if attrs.get("target") == "_blank":
            assert "noopener" in attrs.get("rel", "").split(), (home, attrs)
    print(f"PASS {home}: corporate identity, locale, page sections, branding and legacy routes")

for image in (logo, favicon):
    data = Path(image).read_bytes()
    assert data[:8] == b"\x89PNG\r\n\x1a\n" and data[-8:-4] == b"IEND", image
    width, height = struct.unpack(">II", data[16:24])
    assert width == height and width >= 512, image
