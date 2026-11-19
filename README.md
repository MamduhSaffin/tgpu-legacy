# TGPU Legacy

**TGPU Legacy** stands for **Tok Guru Pulau Ubi Legacy**.

TGPU Legacy is a family legacy platform inspired by the values associated with Tok Guru Pulau Ubi. The project is being developed through two complementary branches:

1. **TGPU Legacy Education** — Quran, Tajwid, Arabic and Islamic education.
2. **TGPU Naturals** — a developing family wellness initiative focused first on responsible education about traditional and natural ingredients.

## Websites

- TGPU Legacy corporate and family-heritage homepage: **https://tgpu.my/**
- TGPU Digital Ecosystem application directory: **https://tgpu.tech/**
- TGPU Gulf Advisory: **https://tgpugulf.com/**
- TGPU Wellness companion: **https://wellness.tgpu.my/**
- The historic TGPU Naturals pages remain in `wellness/` in this repository. The corporate homepage describes the developing Naturals initiative.

The Legacy homepage supports Bahasa Melayu, English and Arabic.

## TGPU Legacy Education

Current learning focus includes:

- Asas Iqra' & Bacaan Al-Quran
- Al-Quran Reading & Tajwid
- Quran Memorisation / Hafazan
- Arabic Language
- Fardu Ain & Islamic Education
- Kids Programme
- 1-to-1 and small-group online classes
- Bahasa Melayu as the main teaching language
- Direct WhatsApp registration with Ustaz Mamduh

## TGPU Naturals

TGPU Naturals is currently in an early development and educational stage.

The initial family product concepts are:

- Kunyit Hitam
- Tongkat Ali
- Sacha Inchi

The wellness website currently focuses on:

- family and brand story
- general ingredient education
- concept product presentation
- regulatory and business-development roadmap
- BM / English / Arabic content
- WhatsApp enquiries and project updates

**Important:** concept visuals are not final product packaging. The website does not make medical treatment claims and does not currently present the developing products as registered products or enable direct online checkout. Actual formulation, labels, manufacturer/supplier information, classification and regulatory details will be updated after verification.

## Legacy

TGPU is an abbreviation of **Tok Guru Pulau Ubi**, the title associated with Ustaz Mamduh's late grandfather. The project continues a family legacy of knowledge, education, service and responsible enterprise.

The family also carries the name through **Surau Tok Guru Pulau Ubi** in their hometown.

## Contact

WhatsApp: **+60 12-641 3812**

## Repository Structure

- `index.html`, `en.html`, `ar.html` — Malay, English and Arabic corporate homepages
- `classes.html`, `classes-en.html`, `classes-ar.html` — classes, teacher information and registration
- `learn*.html` — education learning hub
- `wellness/index.html` — TGPU Naturals website
- `wellness/styles.css` — responsive TGPU Naturals styling
- `wellness/app.js` — trilingual TGPU Naturals interactions
- `sitemap.xml` — search-engine sitemap

## Corporate homepage and deployment

The founder’s November 2026 domain structure places TGPU Legacy at `tgpu.my` and the Digital Ecosystem at `tgpu.tech`. Before this change, the Cloudflare Worker `tgpu-ecosystem-web` served the digital master portal at `tgpu.my`. The GitHub Pages project is configured to publish this repository’s `main` branch root with `tgpu.my` as its custom domain. Verify the Worker version and the public apex before attributing production to this repository.

The three homepage files are static and share `assets/legacy-corporate.css`. The crest and matching favicon are the original Legacy assets in commit `52aaa1c`. The photographs are the same WebP data previously served from the repository’s `assets/legacy/image-data/` chunks. The current classes, Academy, learning and support content retain their routes. Old homepage class links such as `/#register` and `/ar.html#pricing` forward to the same-language class page.

No build step is needed. Run `python3 .github/scripts/verify-legacy-home.py` and `node --check assets/legacy-corporate.js` from the repository root. For a local preview, start `python3 -m http.server 8080` and open `http://localhost:8080/`.


## Naturals reference redesign — September 2026

The `/wellness/` page follows the supplied family-wellness visual reference: a panoramic family hero, cream product cards, a watercolor heritage section, maroon WhatsApp banner and compact footer. The education pages retain their content and layout; a Naturals navigation link connects each language to the matching wellness language.

- Language entry points: `wellness/?lang=ms`, `wellness/?lang=en`, `wellness/?lang=ar`. Arabic uses RTL. The selection updates the address, education links, enquiry text, image descriptions and page metadata, with a fallback when browser storage is unavailable.
- Product arrows and the Learn navigation reveal the ingredient guide. The existing development roadmap, status information and FAQs remain in that expandable area.
- Artwork is illustrative. All three product images and their visible captions identify concept packaging. Sacha Inchi is spelled correctly. No checkout, prices, dosage, certifications or product efficacy claims are presented.
- Optimized artwork and locally served Caveat / Noto Naskh Arabic fonts are in `wellness/assets/`; the accompanying OFL files contain their licences. Botanical references link to Kew Science.
- No build step or dependency installation is required. Publish the repository root as before.

Before replacing the concepts with real products, verify the actual species, formulation, labels, supplier details and applicable product status. Replace the images, alt text and concept notices together in all three languages.

## Legacy landing-page redesign — September 2026

The Malay, English and Arabic homepages follow the approved cream, green and gold landing-page design, with a teaching hero, arched heritage artwork, three learning pillars, four programs, impact band, community cards and footer.

- Community cards use geometric avatars and existing teaching values. Unverified mockup student counts, years and named testimonials are not published.
- `classes.html`, `classes-en.html` and `classes-ar.html` preserve the full existing class offering, teacher information, fees, FAQs and WhatsApp registration. Previous homepage bookmarks for registration, fees, FAQ, international and SSM content route to the matching class page.
- Artwork in `assets/legacy/` is illustrative, inspired by the approved design; it is not a photograph of the actual teacher, students or Surau Tok Guru Pulau Ubi. Community avatars are SVG geometry and contain no portraits.
- The learning hub and TGPU Naturals keep their existing routes. Publishing remains GitHub Pages from the repository root; no build step is needed.
