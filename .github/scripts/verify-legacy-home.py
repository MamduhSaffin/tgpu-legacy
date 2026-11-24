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


logo = "assets/corporate/tgpu-legacy-logo.png"
og_image = "assets/corporate/tgpu-legacy-og.png"
favicon = "assets/tgpu-legacy-favicon.png"
portrait = "assets/corporate/founder-portrait.webp"
site = "https://tgpu.my/"
required_ids = {
    "main", "home", "about", "ecosystem", "corridor",
    "portfolio", "technology", "leadership", "collaborations",
    "investor-relations", "contact",
}
destinations = {
    "https://tgpu.my/",
    "https://tgpugulf.com/",
    "https://os.tgpu.my/",
    "https://tgpu.tech/",
    "https://tgpu.tech/business-os/",
    "https://os.tgpugulf.com/",
    "https://gccmarketentry.me/",
    "https://www.linkedin.com/in/muhammad-mamduh/",
    "https://founder.tgpu.my/",
}

for home, language, suffix, privacy in (
    ("index.html", "en", "-en", "privacy.html"),
    ("ms.html", "ms", "", "privacy-ms.html"),
    ("ar.html", "ar", "-ar", "privacy-ar.html"),
):
    file = Path(home)
    page = Page(file)
    html, = page.attributes("html")
    assert html["lang"] == language, home
    assert html.get("dir", "ltr") == ("rtl" if language == "ar" else "ltr"), home
    assert len(page.attributes("h1")) == 1 and len(page.attributes("footer")) == 1, home
    ids = page.ids()
    assert all(count == 1 for count in ids.values()), (home, ids)
    assert required_ids <= ids.keys(), (home, required_ids - ids.keys())
    content = file.read_text(encoding="utf-8")
    assert "<title>TGPU Legacy" in content and "Tok Guru Pulau Ubi Legacy" in content, home
    assert "TGPU Innovator Labs" in content, home
    assert "menoa" not in content.casefold(), home
    if language == "ar":
        assert "Noto+Kufi+Arabic" in content, home

    metadata = {
        attrs.get("name", attrs.get("property")): attrs.get("content")
        for attrs in page.attributes("meta")
    }
    assert metadata["og:site_name"] == "TGPU Legacy", home
    assert metadata["og:image"] == site + og_image, home
    links = page.attributes("link")
    canonical, = [attrs["href"] for attrs in links if attrs.get("rel") == "canonical"]
    assert canonical == (site if language == "en" else site + home), home
    assert {attrs["hreflang"] for attrs in links if attrs.get("rel") == "alternate"} == {"ms-MY", "en", "ar", "x-default"}, home
    assert any("icon" in attrs.get("rel", "").split() and attrs["href"] == favicon for attrs in links), home

    imgs = [attrs["src"] for attrs in page.attributes("img") if "src" in attrs]
    assert portrait in imgs, (home, portrait)
    for src in imgs:
        assert Path(src).is_file(), (home, src)

    anchors = {attrs["href"] for attrs in page.attributes("a") if "href" in attrs}
    assert destinations <= anchors, (home, destinations - anchors)
    assert {f"classes{suffix}.html", f"classes{suffix}.html#ssm", privacy} <= anchors, home
    assert any(href.startswith("mailto:mamduh@tgpu.my?") for href in anchors), home
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
    print(f"PASS {home}: corporate identity, locale, ecosystem, portfolio, assets, and links")

for privacy_page in ("privacy.html", "privacy-ms.html", "privacy-ar.html"):
    assert Path(privacy_page).is_file(), privacy_page
    p = Page(Path(privacy_page))
    assert len(p.attributes("h1")) == 1 and len(p.attributes("footer")) == 1, privacy_page
    print(f"PASS {privacy_page}: legal & privacy page validated")

for image in (logo, favicon):
    data = Path(image).read_bytes()
    assert data[:8] == b"\x89PNG\r\n\x1a\n" and data[-8:-4] == b"IEND", image
    width, height = struct.unpack(">II", data[16:24])
    assert width == height and width >= 512, (image, width, height)
