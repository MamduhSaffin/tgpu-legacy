# TGPU cross-site SEO and brand alignment audit — 24 October 2026

Status: **Assessment and recommendations only**. No production release is authorised by this document.

## Source observations
- The current `tgpu.my/index.html` title, heading, Organization schema and Open Graph identity refer to **TGPU Legacy / Tok Guru Pulau Ubi**.
- Its head already contains canonical, robots, Open Graph, Twitter and Malay/English/Arabic alternate-language tags. Preserve these; do not duplicate them.
- Repository already contains `robots.txt`, `sitemap.xml` and `sitemap-community.xml`. Validate coverage rather than generating duplicates.
- GCC Match uses its own dedicated canonical URL and social-preview metadata (checked separately).
- TGPU Gulf's indexed homepage contains substantial repeated information about market entry, matching and project processes. Simplification requires content approval and a live visual review.

## Key brand decision
Do **not** overwrite the TGPU Legacy identity with TGPU Digital without confirming the desired root-domain architecture. One safe option is retaining the Legacy identity within a clearly labelled TGPU Digital ecosystem gateway; another is moving Legacy to an explicit route/subdomain. Cross-site URLs should not be changed until redirects, canonical tags, search visibility, and existing links are mapped.

## Recommended design foundation
- TGPU Digital: clean, mobile-first ecosystem navigation; clear app directories and distinct education/community/business categories.
- TGPU Gulf: retain approved palm/arch identity, forest-green base and restrained gold accents; avoid invented partners, testimonials, metrics or government endorsement.
- All public properties: shared design tokens for typography, grid spacing, button treatment, footer hierarchy, focus states and minimum touch-target size.
- TEMAN: older-user readability and emergency-control accessibility are higher priority than decorative premium effects.
- IQRA: preserve existing sequential lessons, locks and owner-only access policies.

## Implementation gates
1. Map every public domain to its authoritative GitHub repo and deployment target.
2. Audit actual homepage, hero, footer, mobile navigation, heading hierarchy, title/description, social previews and canonical URLs on staging.
3. For each indexable route, validate HTTP status, `robots.txt`, XML sitemap, canonical/hreflang consistency, noindex policy and internal links.
4. Verify privacy/terms pages and entity-appropriate legal disclosure; no copied registration numbers or misleading footer ownership claims.
5. Run accessibility checks, Lighthouse/PageSpeed lab measurements and real-device smoke tests.
6. Stage focused changes in per-repository PRs; protect Match/Connect release branches.
7. Require verified deployment and smoke-test results before claiming changes are live.

## No-cost rollout order
1. Root domain identity and internal navigation
2. Duplicate/repetitive Gulf content and route clarity
3. Metadata, technical SEO and indexability
4. Design tokens, headers/footers and mobile UX
5. Per-platform regression checks and publication

## Known uncertainty
The current audit is based on repository source and search-indexed website content, not a successful end-to-end production browser test. Do not mark any changes as deployed, indexed or visually verified based on this report.
