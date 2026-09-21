from pathlib import Path
import base64

ROOT = Path('.')
SRC = ROOT / '.banner-src' / 'learning.b64'
IMG = ROOT / 'assets' / 'tgpu-learning-hub-hero-approved.jpg'

IMG.write_bytes(base64.b64decode(SRC.read_text(encoding='utf-8').strip()))

new_url = 'https://tgpu.my/assets/tgpu-learning-hub-hero-approved.jpg?v=20260922'
hero_img = '<img class="approved-hero-art" src="../../assets/tgpu-learning-hub-hero-approved.jpg" alt="TGPU Learning Hub — a trusted learning hub for a brighter tomorrow" width="1200" height="675" fetchpriority="high" decoding="async">'

for name in ['index.html', 'index-en.html', 'index-ar.html']:
    p = ROOT / 'academy' / 'learning-hub' / name
    s = p.read_text(encoding='utf-8')
    s = s.replace('https://tgpu.my/assets/tgpu-learning-hub-share-v2.jpg?v=20260918-hd', new_url)
    s = s.replace('<meta property="og:image:height" content="630">', '<meta property="og:image:height" content="675">')
    if 'class="approved-hero-art"' not in s:
        s = s.replace('<section class="hub-hero">', '<section class="hub-hero">\n    ' + hero_img, 1)
    p.write_text(s, encoding='utf-8')

css = ROOT / 'academy' / 'learning-hub' / 'hub-v2.css'
css_text = css.read_text(encoding='utf-8')
marker = '/* approved hero banner 2026-09-22 */'
if marker not in css_text:
    css_text += '''\n\n/* approved hero banner 2026-09-22 */\n.approved-hero-art{display:block;width:min(1400px,calc(100% - 32px));height:auto;aspect-ratio:16/9;object-fit:cover;margin:24px auto 0;border-radius:24px;box-shadow:0 22px 60px rgba(5,35,27,.22);position:relative;z-index:2}\n@media(max-width:760px){.approved-hero-art{width:calc(100% - 20px);margin-top:14px;border-radius:16px}}\n'''
    css.write_text(css_text, encoding='utf-8')

# Remove temporary transfer/test files after decoding.
for p in [SRC, ROOT/'.chatgpt-banner'/'part00.b64', ROOT/'.chatgpt-banner-q15'/'part00.b64']:
    try:
        p.unlink()
    except FileNotFoundError:
        pass
for d in [ROOT/'.banner-src', ROOT/'.chatgpt-banner', ROOT/'.chatgpt-banner-q15']:
    try:
        d.rmdir()
    except OSError:
        pass

# Self-clean so the production branch stays tidy.
for p in [ROOT/'.github/scripts/install-approved-hero.py', ROOT/'.github/workflows/install-approved-hero.yml']:
    try:
        p.unlink()
    except FileNotFoundError:
        pass
