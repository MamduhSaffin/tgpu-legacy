import fs from 'node:fs/promises';

const locales = {
  en: {
    lang: 'en',
    dir: 'ltr',
    file: 'index.html',
    privacyFile: 'privacy.html',
    classesFile: 'classes-en.html',
    canonical: 'https://tgpu.my/',
    privacyCanonical: 'https://tgpu.my/privacy.html',
    ogLocale: 'en_MY',
    title: 'TGPU Legacy | Connecting Markets, Building Technology & Opportunities',
    description:
      'TGPU Legacy is the Malaysian corporate headquarters connecting Southeast Asia and the GCC through business advisory, digital products, and technology innovation.',
    privacyTitle: 'Privacy Policy & Legal Information | TGPU Legacy',
    privacyDescription:
      'Privacy notice, data handling standards, intellectual property, and corporate registration details for TGPU Legacy (Tok Guru Pulau Ubi Legacy).',
    skip: 'Skip to content',
    nav: {
      about: 'About',
      ecosystem: 'Ecosystem',
      portfolio: 'Portfolio',
      leadership: 'Leadership',
      contact: 'Contact',
      cta: 'Partner With Us',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close navigation menu',
      navLabel: 'Primary navigation',
      langLabel: 'Language selection',
    },
    hero: {
      meta: ['Kuala Lumpur, Malaysia', 'Southeast Asia & GCC', 'Corporate HQ'],
      h1a: 'Connecting Markets.',
      h1b: 'Building Technology.',
      h1c: 'Creating Opportunities.',
      lead:
        'TGPU Legacy is the Malaysian corporate headquarters of Tok Guru Pulau Ubi Legacy—bridging Southeast Asia and the GCC through cross-border business advisory, practical digital products, and disciplined technology innovation.',
      primaryCta: 'Explore Corporate Ecosystem',
      secondaryCta: 'View Product Portfolio',
      crestTitle: 'Tok Guru Pulau Ubi Legacy',
      crestSub: 'SSM Registered 202603149563 (003857959-A) · Malaysia',
      visualAlt:
        'Sunlit emerald marble and brushed brass corporate atrium bridging Kuala Lumpur and Riyadh architectural design',
    },
    marquee: [
      'TGPU Legacy · Malaysia HQ',
      'TGPU Gulf Advisory · Malaysia ↔ GCC',
      'TGPU Digital Ecosystem · Practical Software',
      'TGPU Innovator Labs · Product Engineering',
      'TGPU Business OS · Enterprise Workflows',
      'TGPU GulfOS · Regional Operations',
      'GCC Market Entry · Public Knowledge Hub',
    ],
    about: {
      kicker: 'About TGPU Legacy',
      title: 'A founder-led Malaysian corporate ecosystem built on lasting stewardship.',
      p1:
        'TGPU stands for Tok Guru Pulau Ubi, honouring the scholarly and community legacy of founder Muhammad Mamduh Saffin’s late grandfather in Tumpat, Kelantan. Today, Tok Guru Pulau Ubi Legacy operates from Malaysia as a registered sole proprietorship building responsible technology and cross-border commercial pathways.',
      p2:
        'Rather than acting as a personal consultancy or template showcase, TGPU Legacy serves as the corporate anchor uniting market-entry advisory, public educational infrastructure, and sector-specific software platforms under clear governance.',
      logoAlt: 'Official TGPU Legacy emblem and corporate lockup',
      facts: [
        { label: 'Corporate Registration', value: 'SSM 202603149563 (003857959-A)' },
        { label: 'Headquarters', value: 'Malaysia · Southeast Asia & GCC Focus' },
        { label: 'Operating Disciplines', value: 'Advisory · Software · Education' },
      ],
    },
    ecosystem: {
      kicker: 'Corporate Ecosystem',
      title: 'Seven connected entities with clear operational boundaries.',
      lead:
        'Each domain serves a defined audience—separating public educational resources, commercial advisory, internal workspaces, and software directories.',
      visit: 'Visit platform',
      gated: 'Access-protected workspace',
      cards: [
        {
          index: '01',
          name: 'TGPU Legacy',
          role: 'Corporate Headquarters',
          status: 'Live · tgpu.my',
          desc:
            'Malaysian corporate anchor for Tok Guru Pulau Ubi Legacy, overseeing brand governance, strategic partnerships, and ecosystem stewardship.',
          url: 'https://tgpu.my/',
          featured: true,
        },
        {
          index: '02',
          name: 'TGPU Gulf Advisory',
          role: 'Cross-Border Advisory',
          status: 'Live · tgpugulf.com',
          desc:
            'Independent Malaysia–GCC strategic advisory for Saudi and Gulf market entry, distributor qualification, and Malaysian OEM/ODM sourcing.',
          url: 'https://tgpugulf.com/',
        },
        {
          index: '03',
          name: 'TGPU Digital Ecosystem',
          role: 'Unified Operating Hub',
          status: 'Cloudflare Access · os.tgpu.my',
          desc:
            'Authenticated internal operating environment for TGPU Digital applications, paired with our public application directory.',
          url: 'https://os.tgpu.my/',
          gated: true,
        },
        {
          index: '04',
          name: 'TGPU Innovator Labs',
          role: 'Technology & Directory',
          status: 'Live · tgpu.tech',
          desc:
            'Engineering division and public application directory incubating practical software across commerce, education, travel, and community operations.',
          url: 'https://tgpu.tech/',
        },
        {
          index: '05',
          name: 'TGPU Business OS',
          role: 'Enterprise Suite Preview',
          status: 'Live Preview · tgpu.tech/business-os',
          desc:
            'Public foundation preview uniting GCC Connect, MatchOS, Healthcare, TEMAN Haramain, Optic, and Bakes. (os.tgpu.tech is reserved and not publicly routed.)',
          url: 'https://tgpu.tech/business-os/',
        },
        {
          index: '06',
          name: 'TGPU GulfOS',
          role: 'Regional Operations OS',
          status: 'Cloudflare Access · os.tgpugulf.com',
          desc:
            'Access-restricted commercial coordination workspace supporting Malaysia–GCC advisory workflows and partner intake.',
          url: 'https://os.tgpugulf.com/',
          gated: true,
        },
        {
          index: '07',
          name: 'GCC Market Entry',
          role: 'Public Knowledge Hub',
          status: 'Live · gccmarketentry.me',
          desc:
            'Free, official-source-first educational hub helping Malaysian businesses research Saudi Arabia and GCC market readiness before committing capital.',
          url: 'https://gccmarketentry.me/',
        },
      ],
    },
    corridor: {
      kicker: 'GCC Market Entry & Three Pillars',
      title: 'Three pillars. One shared vision.',
      lead:
        'Combining first-hand Arabic language fluency, Malaysian supply-chain familiarity, and structured execution across Southeast Asia and the Gulf.',
      imgAlt:
        'Modern timber and brushed brass archway framing a sunlit Gulf financial skyline at golden hour',
      cta: 'Open GCC Market Entry Guide',
      secondaryCta: 'Explore TGPU Gulf Advisory',
      pillars: [
        {
          title: '01. Gulf Market Entry & Advisory',
          text:
            'Structured market research, buyer and distributor qualification, and Malaysian OEM/ODM sourcing coordination between Kuala Lumpur, Riyadh, and the wider GCC.',
        },
        {
          title: '02. Digital Products & Business Software',
          text:
            'Purpose-built software platforms spanning retail operations, optical clinics, bakery storefronts, healthcare workflows, and community management.',
        },
        {
          title: '03. Public Education & Strategic Partnerships',
          text:
            'Accessible multilingual learning platforms and verified cross-border collaborations built on evidence, transparent scope, and zero inflated claims.',
        },
      ],
    },
    portfolio: {
      kicker: 'Digital Product Portfolio',
      title: 'Verified applications built for real operational needs.',
      lead:
        'Filter by domain and inspect any platform for verified deployment status, live URL, and current release stage—with zero fictional metrics or placeholder claims.',
      showing: 'Showing',
      appsWord: 'featured platforms',
      filters: [
        { id: 'all', label: 'All Platforms' },
        { id: 'gcc', label: 'GCC & Enterprise' },
        { id: 'commerce', label: 'Commerce & Ops' },
        { id: 'living', label: 'Pilgrimage & Community' },
      ],
      detailsBtn: 'Inspect platform',
      visitBtn: 'Open live site',
      moreTitle: 'Additional Live Ecosystem Platforms',
      items: [
        {
          id: 'gcc-connect',
          category: 'gcc',
          name: 'GCC Connect',
          meta: 'GCC Partnerships · Live',
          domain: 'connect.tgpugulf.com',
          url: 'https://connect.tgpugulf.com/',
          img: 'assets/corporate/products/gcc-connect.webp',
          short:
            'Managed business-intake and partner qualification corridor connecting Southeast Asian companies with vetted GCC counterparts.',
          details:
            'TGPU GCC Connect structures commercial introductions across Malaysia, Saudi Arabia, and the wider GCC—focusing on qualified exporters, distributors, and coordinated execution.',
        },
        {
          id: 'match-os',
          category: 'gcc',
          name: 'MatchOS / TGPU GCC Match',
          meta: 'Business Matching · Live',
          domain: 'match.tgpugulf.com',
          url: 'https://match.tgpugulf.com/',
          img: 'assets/corporate/products/match-os.webp',
          short:
            'Structured commercial opportunity matching for distributor, buyer, sourcing, and OEM/ODM requirements across Malaysia and the GCC.',
          details:
            'Complements GCC Connect by handling defined commercial-matching briefs, helping Malaysian manufacturers and Gulf buyers align on product readiness and distribution fit.',
        },
        {
          id: 'teman',
          category: 'living',
          name: 'TEMAN Haramain',
          meta: 'Pilgrimage Safety · Live',
          domain: 'teman.tgpu.my',
          url: 'https://teman.tgpu.my/',
          img: 'assets/corporate/products/teman-haramain.webp',
          short:
            'Offline-ready, senior-friendly Hajj and Umrah companion offering essential travel guidance and safety tools in Malay, Arabic, and English.',
          details:
            'Designed for clarity under travel stress, TEMAN Haramain supports pilgrims with offline-capable orientation, bilingual phrase cards, and practical safety checklists.',
        },
        {
          id: 'optic',
          category: 'commerce',
          name: 'TGPU Optic',
          meta: 'Optical Retail · Live Demo',
          domain: 'optic.tgpu.my',
          url: 'https://optic.tgpu.my/',
          img: 'assets/corporate/products/optic.webp',
          short:
            'Multilingual optical retail software demonstration covering product catalogues, lens specifications, and appointment scheduling.',
          details:
            'Built under TGPU Digital Ecosystem to demonstrate streamlined storefront and optometry appointment workflows for independent optical businesses.',
        },
        {
          id: 'niaga',
          category: 'commerce',
          name: 'NIAGA',
          meta: 'Smart Retail · Live',
          domain: 'niaga.tgpu.my',
          url: 'https://niaga.tgpu.my/',
          img: 'assets/corporate/products/niaga.webp',
          short:
            'Practical smart-retail workspace enabling independent grocery and retail shops to scan products, manage stock, and process daily sales.',
          details:
            'NIAGA replaces fragmented manual records with clean inventory lookup, counter sales processing, and clear daily reporting tailored for Malaysian retail operators.',
        },
        {
          id: 'bakes',
          category: 'commerce',
          name: 'TGPU BAKES',
          meta: 'Bakery Operations · Live Demo',
          domain: 'bakes.tgpu.my',
          url: 'https://bakes.tgpu.my/',
          img: 'assets/corporate/products/bakes.webp',
          short:
            'Interactive bakery storefront and order-intake demo featuring a live product catalogue, cart, and custom-cake enquiry workflow.',
          details:
            'Showcases modern direct-to-consumer digital ordering and custom specification capture for artisan bakeries and F&B operators.',
        },
        {
          id: 'community',
          category: 'living',
          name: 'TGPU Smart Community',
          meta: 'Neighbourhood Ops · Live Demo',
          domain: 'community.tgpu.my',
          url: 'https://community.tgpu.my/',
          img: 'assets/corporate/products/smart-community.webp',
          short:
            'Residential neighbourhood management demo built to coordinate community notices, resident engagement, and shared facility updates.',
          details:
            'Demonstrates calm, mobile-accessible neighbourhood coordination tools for Malaysian residential associations and community committees.',
        },
        {
          id: 'healthcare',
          category: 'commerce',
          name: 'TGPU Healthcare',
          meta: 'Clinical Operations · Preview',
          domain: 'healthcare.tgpu.tech',
          url: 'https://healthcare.tgpu.tech/',
          img: 'assets/corporate/products/healthcare.webp',
          short:
            'Compliance-conscious healthcare operations preview illustrating clinic reception, patient check-in, and caregiver handover workflows.',
          details:
            'Explores structured clinical reception and handover tooling using fictional demonstration data only, emphasizing clarity and caregiver coordination.',
        },
        {
          id: 'satu',
          category: 'commerce',
          name: 'SATU by TGPU',
          meta: 'Micro-Seller Suite · Beta',
          domain: 'satu.tgpu.my',
          url: 'https://satu.tgpu.my/',
          img: 'assets/corporate/products/satu.webp',
          short:
            'Local-first business utility suite combining notes, pricing calculations, invoices, and quick promotional design tools for micro-sellers.',
          details:
            'Built to help Malaysian solo founders and small traders manage daily costing, invoicing, and visual promotions without complex enterprise overhead.',
        },
      ],
      moreApps: [
        { name: 'TGPU Academy', tag: 'Education · Live', url: 'academy/en.html' },
        { name: 'TGPU ILMU', tag: 'Source Library · Live', url: 'https://ilmu.tgpu.my/' },
        { name: 'TGPU Iqra', tag: 'Arabic Literacy PWA · Live', url: 'https://iqra.tgpu.my/' },
        { name: 'Amal by TGPU', tag: 'Daily Worship · Live', url: 'https://amal.tgpu.my/' },
        { name: 'WATCH by TGPU', tag: 'Broadcast Hub · Live', url: 'https://watch.tgpu.my/' },
        { name: 'Khalifah Kecil', tag: 'Family Learning · Live', url: 'https://khalifah.tgpu.my/' },
        { name: 'TGPU Wellness', tag: 'Wellbeing Guide · Live', url: 'https://wellness.tgpu.my/' },
        { name: 'Muthabbit', tag: 'AI Verification · Pre-release', url: 'https://muthabbit.tgpu.my/' },
      ],
    },
    tech: {
      kicker: 'Technology & Innovation',
      title: 'Disciplined engineering built for accessibility, speed, and zero bloat.',
      lead:
        'Led by TGPU Innovator Labs, our technical architecture prioritizes fast edge delivery, offline-capable web applications, and trilingual LTR/RTL parity.',
      imgAlt:
        'Minimalist dark emerald and brushed brass workspace displaying structured architectural technology geometry',
      items: [
        {
          title: '01. Edge-First, Zero-Bloat Delivery',
          text:
            'Applications and corporate properties are engineered to run cleanly on lightweight static and serverless edge infrastructure within sustainable cost limits.',
        },
        {
          title: '02. Native Multilingual & True RTL Parity',
          text:
            'Every flagship platform is architected from the ground up for English, Bahasa Melayu, and Arabic—with full right-to-left directional layout and Noto Kufi Arabic typography.',
        },
        {
          title: '03. Local-First & Offline Resilience',
          text:
            'Field tools like TEMAN Haramain and SATU are built to remain responsive on mobile connections and intermittent travel networks.',
        },
        {
          title: '04. Evidence-Led AI Integration',
          text:
            'AI-assisted workflows such as Muthabbit and Healthcare reception previews are designed with explicit source verification, safety boundaries, and human oversight.',
        },
      ],
    },
    founder: {
      kicker: 'Founder & Leadership',
      title: 'Muhammad Mamduh Saffin',
      role: 'Founder · TGPU Legacy, TGPU Gulf Advisory & TGPU Digital Ecosystem',
      portraitAlt: 'Portrait of Muhammad Mamduh Saffin, Founder of TGPU Legacy',
      p1:
        'Muhammad Mamduh Saffin leads TGPU Legacy from Malaysia, uniting postgraduate training in Arabic Studies at the International Islamic University Malaysia (IIUM) with practical product engineering and Malaysia–GCC commercial coordination.',
      p2:
        'Drawing on first-hand familiarity with Saudi and Gulf communication norms alongside Malaysia’s SME and education landscape, he oversees both commercial market-entry initiatives under TGPU Gulf Advisory and public-benefit software under TGPU Digital Ecosystem.',
      linkedinBtn: 'Connect on LinkedIn',
      portfolioBtn: 'Founder Portfolio',
      classesBtn: 'TGPU Education & Classes',
    },
    collab: {
      kicker: 'Collaborations & Investor Relations',
      title: 'From opportunity to structured collaboration.',
      lead:
        'We partner selectively with exporters, regional distributors, educational institutions, and technology collaborators who value transparent governance.',
      steps: [
        {
          no: '01',
          title: 'Explore Opportunities',
          text:
            'Clarify your commercial objective, product readiness, or technology goal across Malaysia, Southeast Asia, and the GCC.',
        },
        {
          no: '02',
          title: 'Align on Strategy',
          text:
            'Assess regulatory, linguistic, and market-fit requirements using official sources before committing capital or inventory.',
        },
        {
          no: '03',
          title: 'Build Together',
          text:
            'Execute under clear scope, defined milestones, and honest operational ownership—whether in advisory or software delivery.',
        },
      ],
      panels: [
        {
          title: 'Strategic Collaborations',
          body:
            'TGPU Legacy maintains active educational and cross-border collaborations rooted in shared standards rather than vanity logos.',
          bullets: [
            'Islamic Education Class (IEC) — curriculum structure and interactive pedagogy for multicultural communities.',
            'Akademi Lancar — visibility and community routing for free online Quran literacy classes.',
            'Malaysia ↔ GCC Commercial Partners — structured exporter, buyer, and OEM/ODM qualification via TGPU Gulf Advisory.',
          ],
          linkLabel: 'Explore Academy Collaborations',
          linkHref: 'academy/collaboration.html',
        },
        {
          title: 'Investor Relations & Corporate Governance',
          body:
            'TGPU Legacy operates as a Malaysian sole proprietorship (SSM 202603149563 / 003857959-A) pursuing disciplined, zero-debt organic growth.',
          bullets: [
            'Clear entity separation between free educational initiatives, public-benefit tools, and fee-based Gulf commercial advisory.',
            'Conservative data handling aligned with Malaysian PDPA principles and zero third-party ad tracking.',
            'Direct executive access for institutional partners, joint-venture discussions, and project-scoped engagements.',
          ],
          linkLabel: 'Request Corporate Briefing',
          linkHref: '#contact',
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Build the next opportunity with us.',
      lead:
        'Connect with TGPU Legacy regarding Malaysia–GCC market entry, enterprise software collaboration, or corporate partnerships.',
      emailLabel: 'Corporate Email',
      whatsappLabel: 'WhatsApp Direct',
      locationLabel: 'Headquarters',
      locationValue: 'Kuala Lumpur, Malaysia',
      formTitle: 'Send a Corporate Enquiry',
      nameLabel: 'Full Name',
      namePh: 'Your full name',
      nameErr: 'Please enter your name.',
      orgLabel: 'Company / Organization',
      orgPh: 'Organization name (optional)',
      emailFieldLabel: 'Work Email',
      emailPh: 'you@company.com',
      emailErr: 'Please enter a valid email address.',
      topicLabel: 'Enquiry Area',
      topics: [
        'Malaysia ↔ GCC Market Entry & Advisory',
        'Digital Product & Technology Partnership',
        'Investor Relations & Corporate Briefing',
        'Education & Community Collaboration',
      ],
      msgLabel: 'Project or Partnership Context',
      msgPh: 'Briefly describe your objective, market, or timeline.',
      msgErr: 'Please include at least 10 characters describing your enquiry.',
      submitBtn: 'Prepare Enquiry',
      feedbackText:
        'Your enquiry details are validated and ready. Launch your email client below or message us directly on WhatsApp.',
      feedbackEmailBtn: 'Open in Email Client',
      feedbackWaBtn: 'Continue on WhatsApp',
    },
    footer: {
      desc:
        'Tok Guru Pulau Ubi Legacy — Malaysian corporate headquarters connecting Southeast Asia and the GCC through advisory, digital products, and technology.',
      col1Title: 'Corporate',
      col2Title: 'Ecosystem',
      col3Title: 'Governance & Resources',
      privacyLink: 'Privacy Policy & Legal',
      classesLink: 'Classes & Education',
      supportLink: 'Support TGPU',
      searchLink: 'Search TGPU',
      ssm: 'Malaysian Business Registration (SSM): 202603149563 (003857959-A)',
      copy: '© 2026 TGPU Legacy. All rights reserved.',
    },
    privacy: {
      backHome: 'Back to TGPU Legacy Home',
      eyebrow: 'Privacy & Legal Governance',
      h1: 'Privacy Policy & Applicable Legal Information',
      updated: 'Effective Date: 24 November 2026 · Kuala Lumpur, Malaysia',
      sections: [
        {
          h2: '1. Corporate Identity',
          p:
            'This website (https://tgpu.my) is operated by Tok Guru Pulau Ubi Legacy (TGPU Legacy), a registered sole proprietorship in Malaysia bearing Companies Commission of Malaysia (SSM) registration number 202603149563 (003857959-A).',
        },
        {
          h2: '2. Data Collection & Privacy Practices',
          p:
            'TGPU Legacy designs its corporate website with data minimisation and respect for the Malaysian Personal Data Protection Act 2010 (PDPA):',
          bullets: [
            'No invasive third-party advertising cookies, behavioural profiling trackers, or cross-site ad pixels are deployed on this site.',
            'Corporate enquiries submitted via our contact workflow are processed directly via user-initiated email (mamduh@tgpu.my) or WhatsApp (+60 12-641 3812) without hidden database harvesting.',
            'Standard infrastructure server logs (such as IP-level edge routing and DDoS protection via Cloudflare) are governed strictly by operational security needs.',
          ],
        },
        {
          h2: '3. Accuracy, Educational & Advisory Boundaries',
          p:
            'Information presented across TGPU Legacy, GCC Market Entry, and TGPU Academy is provided for corporate orientation and educational purposes. Regulated legal, tax, medical, or religious-jurisprudence matters require qualified local specialists or recognised authorities. Product demonstrations labelled Demo, Preview, or Beta indicate development stages rather than final commercial guarantees.',
        },
        {
          h2: '4. Intellectual Property',
          p:
            'The TGPU Legacy name, emblem, corporate copy, and bespoke visual assets remain the intellectual property of Tok Guru Pulau Ubi Legacy. Partner marks (such as Islamic Education Class and Akademi Lancar) remain the property of their respective organisations and are displayed strictly in reference to active educational collaborations.',
        },
        {
          h2: '5. Contact for Legal or Privacy Matters',
          p:
            'Questions regarding data protection, corporate verification, or intellectual property may be directed to mamduh@tgpu.my.',
        },
      ],
    },
  },

  ms: {
    lang: 'ms',
    dir: 'ltr',
    file: 'ms.html',
    privacyFile: 'privacy-ms.html',
    classesFile: 'classes.html',
    canonical: 'https://tgpu.my/ms.html',
    privacyCanonical: 'https://tgpu.my/privacy-ms.html',
    ogLocale: 'ms_MY',
    title: 'TGPU Legacy | Menghubungkan Pasaran, Membina Teknologi & Peluang',
    description:
      'TGPU Legacy ialah ibu pejabat korporat Malaysia yang menghubungkan Asia Tenggara dan GCC melalui khidmat nasihat perniagaan, produk digital, dan inovasi teknologi.',
    privacyTitle: 'Dasar Privasi & Maklumat Perundangan | TGPU Legacy',
    privacyDescription:
      'Notis privasi, piawaian pengendalian data, harta intelek, dan maklumat pendaftaran korporat bagi TGPU Legacy (Tok Guru Pulau Ubi Legacy).',
    skip: 'Langkau ke kandungan',
    nav: {
      about: 'Tentang',
      ecosystem: 'Ekosistem',
      portfolio: 'Portfolio',
      leadership: 'Kepimpinan',
      contact: 'Hubungi',
      cta: 'Bekerjasama',
      menuOpen: 'Buka menu navigasi',
      menuClose: 'Tutup menu navigasi',
      navLabel: 'Navigasi utama',
      langLabel: 'Pilihan bahasa',
    },
    hero: {
      meta: ['Kuala Lumpur, Malaysia', 'Asia Tenggara & GCC', 'Ibu Pejabat Korporat'],
      h1a: 'Menghubungkan Pasaran.',
      h1b: 'Membina Teknologi.',
      h1c: 'Mencipta Peluang.',
      lead:
        'TGPU Legacy ialah ibu pejabat korporat Malaysia bagi Tok Guru Pulau Ubi Legacy—menghubungkan Asia Tenggara dan negara GCC melalui khidmat nasihat perniagaan rentas sempadan, produk digital praktikal, dan inovasi teknologi yang berdisiplin.',
      primaryCta: 'Terokai Ekosistem Korporat',
      secondaryCta: 'Lihat Portfolio Produk',
      crestTitle: 'Tok Guru Pulau Ubi Legacy',
      crestSub: 'Pendaftaran SSM 202603149563 (003857959-A) · Malaysia',
      visualAlt:
        'Ruang atrium korporat marmar zamrud dan loyang keemasan yang menggabungkan seni bina Kuala Lumpur dan Riyadh',
    },
    marquee: [
      'TGPU Legacy · Ibu Pejabat Malaysia',
      'TGPU Gulf Advisory · Malaysia ↔ GCC',
      'TGPU Digital Ecosystem · Perisian Praktikal',
      'TGPU Innovator Labs · Kejuruteraan Produk',
      'TGPU Business OS · Aliran Kerja Perniagaan',
      'TGPU GulfOS · Operasi Serantau',
      'GCC Market Entry · Pusat Ilmu Awam',
    ],
    about: {
      kicker: 'Tentang TGPU Legacy',
      title: 'Ekosistem korporat Malaysia diterajui pengasas berasaskan amanah berpanjangan.',
      p1:
        'TGPU ialah singkatan bagi Tok Guru Pulau Ubi, menghargai legasi keilmuan dan khidmat masyarakat arwah datuk kepada pengasas kami, Muhammad Mamduh Saffin di Tumpat, Kelantan. Hari ini, Tok Guru Pulau Ubi Legacy beroperasi dari Malaysia sebagai perniagaan berdaftar yang membangunkan teknologi bertanggungjawab dan laluan komersial rentas sempadan.',
      p2:
        'Bukan sekadar portfolio peribadi, TGPU Legacy bertindak sebagai teras korporat yang menyatukan khidmat nasihat kemasukan pasaran, prasarana pendidikan awam, serta platform perisian khusus mengikut sektor di bawah tadbir urus yang jelas.',
      logoAlt: 'Logo dan lambang rasmi TGPU Legacy',
      facts: [
        { label: 'Pendaftaran Korporat', value: 'SSM 202603149563 (003857959-A)' },
        { label: 'Ibu Pejabat', value: 'Malaysia · Fokus Asia Tenggara & GCC' },
        { label: 'Disiplin Operasi', value: 'Nasihat · Perisian · Pendidikan' },
      ],
    },
    ecosystem: {
      kicker: 'Ekosistem Korporat',
      title: 'Tujuh entiti bersepadu dengan peranan operasi yang jelas.',
      lead:
        'Setiap domain berkhidmat untuk audiens tertentu—memisahkan sumber pendidikan awam, khidmat nasihat komersial, ruang kerja dalaman, dan direktori perisian.',
      visit: 'Lawati platform',
      gated: 'Ruang kerja dilindungi akses',
      cards: [
        {
          index: '01',
          name: 'TGPU Legacy',
          role: 'Ibu Pejabat Korporat',
          status: 'Aktif · tgpu.my',
          desc:
            'Teras korporat Malaysia bagi Tok Guru Pulau Ubi Legacy yang mengurus tadbir urus jenama, kerjasama strategik, dan kesinambungan ekosistem.',
          url: 'https://tgpu.my/',
          featured: true,
        },
        {
          index: '02',
          name: 'TGPU Gulf Advisory',
          role: 'Khidmat Nasihat Rentas Sempadan',
          status: 'Aktif · tgpugulf.com',
          desc:
            'Khidmat nasihat strategik Malaysia–GCC yang bebas bagi kemasukan pasaran Arab Saudi dan Teluk, pengesahan pengedar, serta penyumberan OEM/ODM Malaysia.',
          url: 'https://tgpugulf.com/',
        },
        {
          index: '03',
          name: 'TGPU Digital Ecosystem',
          role: 'Hab Operasi Bersepadu',
          status: 'Cloudflare Access · os.tgpu.my',
          desc:
            'Persekitaran operasi dalaman berautentikasi untuk aplikasi TGPU Digital, digandingkan dengan direktori aplikasi awam kami.',
          url: 'https://os.tgpu.my/',
          gated: true,
        },
        {
          index: '04',
          name: 'TGPU Innovator Labs',
          role: 'Teknologi & Direktori',
          status: 'Aktif · tgpu.tech',
          desc:
            'Bahagian kejuruteraan dan direktori aplikasi awam yang membangunkan perisian praktikal dalam perdagangan, pendidikan, perjalanan, dan operasi komuniti.',
          url: 'https://tgpu.tech/',
        },
        {
          index: '05',
          name: 'TGPU Business OS',
          role: 'Pratonton Rangkaian Perniagaan',
          status: 'Pratonton Aktif · tgpu.tech/business-os',
          desc:
            'Pratonton asas awam yang menghimpunkan GCC Connect, MatchOS, Healthcare, TEMAN Haramain, Optic, dan Bakes. (os.tgpu.tech belum dihalakan secara umum.)',
          url: 'https://tgpu.tech/business-os/',
        },
        {
          index: '06',
          name: 'TGPU GulfOS',
          role: 'OS Operasi Serantau',
          status: 'Cloudflare Access · os.tgpugulf.com',
          desc:
            'Ruang kerja penyelarasan komersial berhad akses bagi menyokong aliran kerja nasihat Malaysia–GCC dan saringan rakan niaga.',
          url: 'https://os.tgpugulf.com/',
          gated: true,
        },
        {
          index: '07',
          name: 'GCC Market Entry',
          role: 'Pusat Ilmu Awam',
          status: 'Aktif · gccmarketentry.me',
          desc:
            'Hab pendidikan percuma berasaskan sumber rasmi untuk membantu perniagaan Malaysia menilai kesediaan memasuki pasaran Arab Saudi dan GCC.',
          url: 'https://gccmarketentry.me/',
        },
      ],
    },
    corridor: {
      kicker: 'Pasaran GCC & Tiga Tonggak',
      title: 'Tiga tonggak. Satu wawasan bersama.',
      lead:
        'Menggabungkan penguasaan bahasa Arab, pemahaman rantaian bekalan Malaysia, dan pelaksanaan tersusun merentas Asia Tenggara dan Teluk.',
      imgAlt:
        'Gerbang kayu moden dan loyang keemasan menghadap latar langit kewangan Teluk pada waktu senja',
      cta: 'Buka Panduan GCC Market Entry',
      secondaryCta: 'Terokai TGPU Gulf Advisory',
      pillars: [
        {
          title: '01. Kemasukan Pasaran Teluk & Nasihat',
          text:
            'Penyelidikan pasaran berstruktur, penyaringan pembeli dan pengedar, serta penyelarasan penyumberan OEM/ODM Malaysia antara Kuala Lumpur, Riyadh, dan GCC.',
        },
        {
          title: '02. Produk Digital & Perisian Perniagaan',
          text:
            'Platform perisian khusus merangkumi operasi runcit, klinik optik, kedai bakeri, aliran kerja kesihatan, dan pengurusan komuniti.',
        },
        {
          title: '03. Pendidikan Awam & Kerjasama Strategik',
          text:
            'Platform pembelajaran berbilang bahasa dan kerjasama rentas sempadan yang dibina atas bukti, skop telus, dan tanpa dakwaan berlebihan.',
        },
      ],
    },
    portfolio: {
      kicker: 'Portfolio Produk Digital',
      title: 'Aplikasi terverifikasi untuk keperluan operasi sebenar.',
      lead:
        'Tapis mengikut bidang dan semak status pelaksanaan, pautan langsung, serta tahap keluaran semasa—tanpa statistik rekaan.',
      showing: 'Memaparkan',
      appsWord: 'platform utama',
      filters: [
        { id: 'all', label: 'Semua Platform' },
        { id: 'gcc', label: 'GCC & Perusahaan' },
        { id: 'commerce', label: 'Perdagangan & Operasi' },
        { id: 'living', label: 'Ibadah & Komuniti' },
      ],
      detailsBtn: 'Semak platform',
      visitBtn: 'Buka laman langsung',
      moreTitle: 'Platform Ekosistem Lain yang Aktif',
      items: [
        {
          id: 'gcc-connect',
          category: 'gcc',
          name: 'GCC Connect',
          meta: 'Kerjasama GCC · Aktif',
          domain: 'connect.tgpugulf.com',
          url: 'https://connect.tgpugulf.com/',
          img: 'assets/corporate/products/gcc-connect.webp',
          short:
            'Laluan terurus bagi penyaringan perniagaan dan pengesahan rakan niaga yang menghubungkan syarikat Asia Tenggara dengan rakan di GCC.',
          details:
            'TGPU GCC Connect menyusun pengenalan komersial antara Malaysia, Arab Saudi, dan negara GCC dengan menumpukan kepada pengeksport, pengedar, dan penyelarasan pelaksanaan.',
        },
        {
          id: 'match-os',
          category: 'gcc',
          name: 'MatchOS / TGPU GCC Match',
          meta: 'Padanan Perniagaan · Aktif',
          domain: 'match.tgpugulf.com',
          url: 'https://match.tgpugulf.com/',
          img: 'assets/corporate/products/match-os.webp',
          short:
            'Padanan peluang komersial terurus untuk keperluan pengedar, pembeli, penyumberan, dan OEM/ODM antara Malaysia dan GCC.',
          details:
            'Melengkapkan GCC Connect melalui pengurusan keperluan padanan komersial khusus bagi menyelaraskan kesiapsiagaan pengilang Malaysia dengan pembeli Teluk.',
        },
        {
          id: 'teman',
          category: 'living',
          name: 'TEMAN Haramain',
          meta: 'Keselamatan Haji & Umrah · Aktif',
          domain: 'teman.tgpu.my',
          url: 'https://teman.tgpu.my/',
          img: 'assets/corporate/products/teman-haramain.webp',
          short:
            'Pendamping Haji dan Umrah mesra warga emas yang sedia luar talian dengan panduan perjalanan dan keselamatan dalam BM, Arab, dan Inggeris.',
          details:
            'Direka untuk kejelasan ketika perjalanan ibadah, TEMAN Haramain membantu jemaah dengan orientasi luar talian, kad frasa dwibahasa, dan senarai semak keselamatan.',
        },
        {
          id: 'optic',
          category: 'commerce',
          name: 'TGPU Optic',
          meta: 'Runcit Optik · Demo Aktif',
          domain: 'optic.tgpu.my',
          url: 'https://optic.tgpu.my/',
          img: 'assets/corporate/products/optic.webp',
          short:
            'Demonstrasi perisian perniagaan optik berbilang bahasa merangkumi katalog produk, spesifikasi kanta, dan penjadualan janji temu.',
          details:
            'Dibangunkan di bawah TGPU Digital Ecosystem untuk mempamerkan aliran kerja kedai cermin mata dan janji temu optometri bagi pengendali optik bebas.',
        },
        {
          id: 'niaga',
          category: 'commerce',
          name: 'NIAGA',
          meta: 'Runcit Pintar · Aktif',
          domain: 'niaga.tgpu.my',
          url: 'https://niaga.tgpu.my/',
          img: 'assets/corporate/products/niaga.webp',
          short:
            'Ruang kerja runcit pintar untuk kedai runcit dan peniaga mengimbas produk, mengurus inventori, serta merekod jualan harian.',
          details:
            'NIAGA menggantikan rekod manual dengan semakan stok pantas, pemprosesan jualan kaunter, dan laporan harian yang jelas untuk peniaga Malaysia.',
        },
        {
          id: 'bakes',
          category: 'commerce',
          name: 'TGPU BAKES',
          meta: 'Operasi Bakeri · Demo Aktif',
          domain: 'bakes.tgpu.my',
          url: 'https://bakes.tgpu.my/',
          img: 'assets/corporate/products/bakes.webp',
          short:
            'Demonstrasi kedai bakeri interaktif dengan katalog produk, troli pesanan, dan aliran pertanyaan kek tempahan khas.',
          details:
            'Memaparkan tempahan digital terus kepada pengguna dan pengumpulan spesifikasi khas untuk bakeri dan perniagaan makanan.',
        },
        {
          id: 'community',
          category: 'living',
          name: 'TGPU Smart Community',
          meta: 'Operasi Kejiranan · Demo Aktif',
          domain: 'community.tgpu.my',
          url: 'https://community.tgpu.my/',
          img: 'assets/corporate/products/smart-community.webp',
          short:
            'Demonstrasi pengurusan kejiranan kediaman untuk menyelaraskan pengumuman komuniti, penglibatan penduduk, dan kemudahan bersama.',
          details:
            'Mempamerkan alat penyelarasan kejiranan yang mudah diakses melalui telefon pintar bagi persatuan penduduk dan jawatankuasa komuniti.',
        },
        {
          id: 'healthcare',
          category: 'commerce',
          name: 'TGPU Healthcare',
          meta: 'Operasi Kesihatan · Pratonton',
          domain: 'healthcare.tgpu.tech',
          url: 'https://healthcare.tgpu.tech/',
          img: 'assets/corporate/products/healthcare.webp',
          short:
            'Pratonton operasi kesihatan patuh tadbir urus yang memaparkan pendaftaran klinik, daftar masuk pesakit, dan serahan tugas penjaga.',
          details:
            'Meneroka aliran kerja pendaftaran klinik dan serahan penjaga menggunakan data simulasi sahaja dengan tumpuan kepada kejelasan dan keselamatan.',
        },
        {
          id: 'satu',
          category: 'commerce',
          name: 'SATU by TGPU',
          meta: 'Utiliti Peniaga Mikro · Beta',
          domain: 'satu.tgpu.my',
          url: 'https://satu.tgpu.my/',
          img: 'assets/corporate/products/satu.webp',
          short:
            'Suite utiliti perniagaan tempatan yang menggabungkan nota, kiraan harga, invois, dan rekaan promosi ringkas untuk peniaga mikro.',
          details:
            'Membantu pengasas solo dan peniaga kecil di Malaysia mengurus pengiraan kos, invois, dan promosi visual harian tanpa kerumitan perisian besar.',
        },
      ],
      moreApps: [
        { name: 'TGPU Academy', tag: 'Pendidikan · Aktif', url: 'academy/' },
        { name: 'TGPU ILMU', tag: 'Perpustakaan Sumber · Aktif', url: 'https://ilmu.tgpu.my/' },
        { name: 'TGPU Iqra', tag: 'PWA Literasi Arab · Aktif', url: 'https://iqra.tgpu.my/' },
        { name: 'Amal by TGPU', tag: 'Ibadah Harian · Aktif', url: 'https://amal.tgpu.my/' },
        { name: 'WATCH by TGPU', tag: 'Hab Siaran Ilmu · Aktif', url: 'https://watch.tgpu.my/' },
        { name: 'Khalifah Kecil', tag: 'Pembelajaran Keluarga · Aktif', url: 'https://khalifah.tgpu.my/' },
        { name: 'TGPU Wellness', tag: 'Panduan Kesejahteraan · Aktif', url: 'https://wellness.tgpu.my/' },
        { name: 'Muthabbit', tag: 'Semakan Sumber AI · Pra-keluaran', url: 'https://muthabbit.tgpu.my/' },
      ],
    },
    tech: {
      kicker: 'Teknologi & Inovasi',
      title: 'Kejuruteraan berdisiplin untuk kebolehcapaian, kelajuan, dan kecekapan kos.',
      lead:
        'Diterajui TGPU Innovator Labs, seni bina teknikal kami mengutamakan penghantaran edge yang pantas, aplikasi web luar talian, dan kesetaraan tiga bahasa LTR/RTL.',
      imgAlt:
        'Ruang kerja zamrud gelap dan loyang yang memaparkan geometri teknologi seni bina tersusun',
      items: [
        {
          title: '01. Penghantaran Edge Tanpa Lebihan',
          text:
            'Aplikasi dan laman korporat dibina di atas prasarana statik dan tanpa pelayan yang ringan dalam had kos yang mampan.',
        },
        {
          title: '02. Kesetaraan Berbilang Bahasa & RTL Tulen',
          text:
            'Setiap platform utama direka dari asas untuk Bahasa Inggeris, Bahasa Melayu, dan Bahasa Arab—lengkap dengan susun atur kanan-ke-kiri dan tipografi Noto Kufi Arabic.',
        },
        {
          title: '03. Ketahanan Luar Talian & Utamakan Peranti',
          text:
            'Alat lapangan seperti TEMAN Haramain dan SATU kekal responsif walaupun pada capaian mudah alih yang terhad ketika perjalanan.',
        },
        {
          title: '04. Integrasi AI Berasaskan Sumber',
          text:
            'Aliran kerja berbantu AI seperti Muthabbit dan pratonton klinik dibina dengan semakan sumber yang jelas, sempadan keselamatan, dan pengawasan manusia.',
        },
      ],
    },
    founder: {
      kicker: 'Pengasas & Kepimpinan',
      title: 'Muhammad Mamduh Saffin',
      role: 'Pengasas · TGPU Legacy, TGPU Gulf Advisory & TGPU Digital Ecosystem',
      portraitAlt: 'Potret Muhammad Mamduh Saffin, Pengasas TGPU Legacy',
      p1:
        'Muhammad Mamduh Saffin menerajui TGPU Legacy dari Malaysia, menggabungkan pengajian pascasiswazah dalam Pengajian Bahasa Arab di Universiti Islam Antarabangsa Malaysia (UIAM) dengan kejuruteraan produk dan penyelarasan komersial Malaysia–GCC.',
      p2:
        'Berbekalkan pemahaman langsung mengenai budaya komunikasi Arab Saudi dan Teluk serta landskap PKS dan pendidikan Malaysia, beliau menyelia kedua-dua khidmat nasihat pasaran di bawah TGPU Gulf Advisory dan perisian manfaat awam di bawah TGPU Digital Ecosystem.',
      linkedinBtn: 'Hubungi di LinkedIn',
      portfolioBtn: 'Portfolio Pengasas',
      classesBtn: 'Pendidikan & Kelas TGPU',
    },
    collab: {
      kicker: 'Kerjasama & Hubungan Pelabur',
      title: 'Daripada peluang kepada kerjasama berstruktur.',
      lead:
        'Kami bekerjasama secara selektif dengan pengeksport, pengedar serantau, institusi pendidikan, dan rakan teknologi yang mengutamakan tadbir urus telus.',
      steps: [
        {
          no: '01',
          title: 'Terokai Peluang',
          text:
            'Jelaskan matlamat komersial, kesediaan produk, atau objektif teknologi anda merentas Malaysia, Asia Tenggara, dan GCC.',
        },
        {
          no: '02',
          title: 'Selaraskan Strategi',
          text:
            'Nilai keperluan kawal selia, bahasa, dan kesesuaian pasaran menggunakan sumber rasmi sebelum melaburkan modal atau stok.',
        },
        {
          no: '03',
          title: 'Bina Bersama',
          text:
            'Laksanakan di bawah skop jelas, pencapaian terukur, dan tanggungjawab operasi yang telus—sama ada dalam khidmat nasihat atau perisian.',
        },
      ],
      panels: [
        {
          title: 'Kerjasama Strategik',
          body:
            'TGPU Legacy mengekalkan kerjasama pendidikan dan rentas sempadan yang aktif berasaskan piawaian bersama, bukan sekadar logo hiasan.',
          bullets: [
            'Islamic Education Class (IEC) — struktur kurikulum dan pedagogi interaktif untuk komuniti pelbagai budaya.',
            'Akademi Lancar — keterlihatan dan laluan komuniti bagi kelas literasi Al-Quran dalam talian secara percuma.',
            'Rakan Komersial Malaysia ↔ GCC — penyaringan pengeksport, pembeli, dan OEM/ODM melalui TGPU Gulf Advisory.',
          ],
          linkLabel: 'Terokai Kerjasama Akademi',
          linkHref: 'academy/collaboration.html',
        },
        {
          title: 'Hubungan Pelabur & Tadbir Urus Korporat',
          body:
            'TGPU Legacy beroperasi sebagai perniagaan berdaftar Malaysia (SSM 202603149563 / 003857959-A) dengan pertumbuhan organik berdisiplin tanpa hutang luaran.',
          bullets: [
            'Pemisahan entiti yang jelas antara inisiatif pendidikan percuma, alat manfaat awam, dan khidmat nasihat komersial Teluk.',
            'Pengendalian data konservatif selaras prinsip PDPA Malaysia tanpa penjejak iklan pihak ketiga.',
            'Akses terus kepada kepimpinan untuk rakan institusi, perbincangan usaha sama, dan projek berskop jelas.',
          ],
          linkLabel: 'Mohon Taklimat Korporat',
          linkHref: '#contact',
        },
      ],
    },
    contact: {
      kicker: 'Hubungi Kami',
      title: 'Bina peluang seterusnya bersama kami.',
      lead:
        'Hubungi TGPU Legacy berkenaan kemasukan pasaran Malaysia–GCC, kerjasama perisian perusahaan, atau perkongsian korporat.',
      emailLabel: 'E-mel Korporat',
      whatsappLabel: 'WhatsApp Terus',
      locationLabel: 'Ibu Pejabat',
      locationValue: 'Kuala Lumpur, Malaysia',
      formTitle: 'Hantar Pertanyaan Korporat',
      nameLabel: 'Nama Penuh',
      namePh: 'Nama penuh anda',
      nameErr: 'Sila masukkan nama anda.',
      orgLabel: 'Syarikat / Organisasi',
      orgPh: 'Nama organisasi (pilihan)',
      emailFieldLabel: 'E-mel Kerja',
      emailPh: 'anda@syarikat.com',
      emailErr: 'Sila masukkan alamat e-mel yang sah.',
      topicLabel: 'Bidang Pertanyaan',
      topics: [
        'Kemasukan Pasaran & Nasihat Malaysia ↔ GCC',
        'Kerjasama Produk Digital & Teknologi',
        'Hubungan Pelabur & Taklimat Korporat',
        'Kerjasama Pendidikan & Komuniti',
      ],
      msgLabel: 'Konteks Projek atau Kerjasama',
      msgPh: 'Terangkan secara ringkas objektif, pasaran, atau garis masa anda.',
      msgErr: 'Sila sertakan sekurang-kurangnya 10 aksara tentang pertanyaan anda.',
      submitBtn: 'Sediakan Pertanyaan',
      feedbackText:
        'Maklumat pertanyaan anda telah disemak. Buka aplikasi e-mel di bawah atau terus hubungi kami melalui WhatsApp.',
      feedbackEmailBtn: 'Buka Aplikasi E-mel',
      feedbackWaBtn: 'Teruskan ke WhatsApp',
    },
    footer: {
      desc:
        'Tok Guru Pulau Ubi Legacy — ibu pejabat korporat Malaysia yang menghubungkan Asia Tenggara dan GCC melalui nasihat, produk digital, dan teknologi.',
      col1Title: 'Korporat',
      col2Title: 'Ekosistem',
      col3Title: 'Tadbir Urus & Sumber',
      privacyLink: 'Dasar Privasi & Perundangan',
      classesLink: 'Kelas & Pendidikan',
      supportLink: 'Sokong TGPU',
      searchLink: 'Cari di TGPU',
      ssm: 'Pendaftaran Perniagaan Malaysia (SSM): 202603149563 (003857959-A)',
      copy: '© 2026 TGPU Legacy. Hak cipta terpelihara.',
    },
    privacy: {
      backHome: 'Kembali ke Laman Utama TGPU Legacy',
      eyebrow: 'Privasi & Tadbir Urus Perundangan',
      h1: 'Dasar Privasi & Maklumat Perundangan',
      updated: 'Tarikh Kuat Kuasa: 24 November 2026 · Kuala Lumpur, Malaysia',
      sections: [
        {
          h2: '1. Identiti Korporat',
          p:
            'Laman web ini (https://tgpu.my) dikendalikan oleh Tok Guru Pulau Ubi Legacy (TGPU Legacy), sebuah perniagaan pemilikan tunggal berdaftar di Malaysia dengan nombor pendaftaran Suruhanjaya Syarikat Malaysia (SSM) 202603149563 (003857959-A).',
        },
        {
          h2: '2. Pengumpulan Data & Amalan Privasi',
          p:
            'TGPU Legacy membangunkan laman korporatnya berasaskan prinsip pengurangan data selaras dengan Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia:',
          bullets: [
            'Tiada kuki pengiklanan pihak ketiga, penjejak profil tingkah laku, atau piksel iklan merentas laman digunakan di laman web ini.',
            'Pertanyaan korporat melalui borang hubungan diproses secara terus melalui e-mel yang dimulakan pengguna (mamduh@tgpu.my) atau WhatsApp (+60 12-641 3812) tanpa pengumpulan pangkalan data tersembunyi.',
            'Log infrastruktur standard (seperti penghalaan edge dan perlindungan DDoS melalui Cloudflare) tertakluk semata-mata kepada keperluan keselamatan operasi.',
          ],
        },
        {
          h2: '3. Ketepatan, Sempadan Pendidikan & Nasihat',
          p:
            'Maklumat yang dipaparkan merentas TGPU Legacy, GCC Market Entry, dan TGPU Academy disediakan untuk orientasi korporat dan tujuan pendidikan. Urusan perundangan, cukai, perubatan, atau hukum agama memerlukan pakar tempatan bertauliah atau pihak berautoriti yang diiktiraf. Demonstrasi produk berlabel Demo, Pratonton, atau Beta menunjukkan tahap pembangunan dan bukan jaminan komersial akhir.',
        },
        {
          h2: '4. Harta Intelek',
          p:
            'Nama, lambang, kandungan korporat, dan aset visual khusus TGPU Legacy kekal menjadi harta intelek Tok Guru Pulau Ubi Legacy. Logo rakan kerjasama (seperti Islamic Education Class dan Akademi Lancar) kekal milik organisasi masing-masing dan dipaparkan hanya sebagai rujukan kerjasama pendidikan aktif.',
        },
        {
          h2: '5. Pertanyaan Privasi atau Perundangan',
          p:
            'Sebarang pertanyaan berkaitan perlindungan data, pengesahan korporat, atau harta intelek boleh diajukan terus ke mamduh@tgpu.my.',
        },
      ],
    },
  },

  ar: {
    lang: 'ar',
    dir: 'rtl',
    file: 'ar.html',
    privacyFile: 'privacy-ar.html',
    classesFile: 'classes-ar.html',
    canonical: 'https://tgpu.my/ar.html',
    privacyCanonical: 'https://tgpu.my/privacy-ar.html',
    ogLocale: 'ar_AR',
    title: 'TGPU Legacy | ربط الأسواق وبناء التقنية وصناعة الفرص',
    description:
      'تمثّل TGPU Legacy المقر المؤسسي في ماليزيا لربط جنوب شرق آسيا بدول مجلس التعاون الخليجي عبر الاستشارات التجارية والمنتجات الرقمية والابتكار التقني.',
    privacyTitle: 'سياسة الخصوصية والمعلومات القانونية | TGPU Legacy',
    privacyDescription:
      'إشعار الخصوصية ومعايير حماية البيانات والملكية الفكرية وبيانات التسجيل التجاري لشركة TGPU Legacy في ماليزيا.',
    skip: 'انتقل إلى المحتوى الرئيسي',
    nav: {
      about: 'عن الشركة',
      ecosystem: 'المنظومة',
      portfolio: 'المنتجات',
      leadership: 'القيادة',
      contact: 'التواصل',
      cta: 'شراكة معنا',
      menuOpen: 'فتح قائمة التنقل',
      menuClose: 'إغلاق قائمة التنقل',
      navLabel: 'التنقل الرئيسي',
      langLabel: 'اختيار اللغة',
    },
    hero: {
      meta: ['كوالالمبور، ماليزيا', 'جنوب شرق آسيا والخليج', 'المقر المؤسسي'],
      h1a: 'ربط الأسواق.',
      h1b: 'بناء التقنية.',
      h1c: 'صناعة الفرص.',
      lead:
        'تُعدّ TGPU Legacy المقر المؤسسي الماليزي لإرث توك غورو بولاو أوبي، حيث تربط جنوب شرق آسيا بدول مجلس التعاون الخليجي عبر الاستشارات التجارية العابرة للحدود، والمنتجات الرقمية العملية، والابتكار التقني المنضبط.',
      primaryCta: 'استكشف المنظومة المؤسسية',
      secondaryCta: 'استعرض محفظة المنتجات',
      crestTitle: 'Tok Guru Pulau Ubi Legacy',
      crestSub: 'السجل التجاري الماليزي 202603149563 (003857959-A)',
      visualAlt:
        'بهو مؤسسي مشرق من الرخام الزمردي والنحاس الذهبي يجمع بين الطراز المعماري في كوالالمبور والرياض',
    },
    marquee: [
      'TGPU Legacy · المقر الرئيسي في ماليزيا',
      'TGPU Gulf Advisory · ماليزيا ↔ الخليج',
      'TGPU Digital Ecosystem · برمجيات عملية',
      'TGPU Innovator Labs · هندسة المنتجات',
      'TGPU Business OS · أنظمة الأعمال',
      'TGPU GulfOS · العمليات الإقليمية',
      'GCC Market Entry · بوابة المعرفة العامة',
    ],
    about: {
      kicker: 'عن TGPU Legacy',
      title: 'منظومة مؤسسية ماليزية بقيادة المؤسس تقوم على الأمانة والاستدامة.',
      p1:
        'يرمز اسم TGPU إلى توك غورو بولاو أوبي، تخليداً لإرث العلم وخدمة المجتمع لجد المؤسس محمد ممدوح صافين رحمه الله في تومبات بولاية كلنتن. واليوم تعمل TGPU Legacy من ماليزيا بصفتها مؤسسة مسجلة تطوّر حلولاً تقنية مسؤولة ومسارات تجارية بين المناطق.',
      p2:
        'وبدلاً من الاقتصار على واجهة استشارية فردية، تشكّل TGPU Legacy المظلة المؤسسية التي تجمع بين استشارات دخول الأسواق، والمبادرات التعليمية العامة، والمنصات البرمجية المتخصصة وفق حوكمة واضحة.',
      logoAlt: 'الشعار الرسمي المعتمد لمؤسسة TGPU Legacy',
      facts: [
        { label: 'التسجيل التجاري', value: 'SSM 202603149563 (003857959-A)' },
        { label: 'المقر الرئيسي', value: 'ماليزيا · محور جنوب شرق آسيا والخليج' },
        { label: 'مجالات العمل', value: 'الاستشارات · البرمجيات · التعليم' },
      ],
    },
    ecosystem: {
      kicker: 'المنظومة المؤسسية',
      title: 'سبع كيانات مترابطة بأدوار تشغيلية واضحة.',
      lead:
        'يخدم كل نطاق شريحة محددة بوضوح، مع الفصل التام بين الموارد التعليمية المجانية، والخدمات الاستشارية التجارية، وبيئات العمل الداخلية، وأدلة البرمجيات.',
      visit: 'زيارة المنصة',
      gated: 'بيئة عمل محمية بالصلاحيات',
      cards: [
        {
          index: '01',
          name: 'TGPU Legacy',
          role: 'المقر المؤسسي',
          status: 'متاح · tgpu.my',
          desc:
            'المقر الرئيسي لمؤسسة Tok Guru Pulau Ubi Legacy في ماليزيا، المشرف على حوكمة العلامة التجارية والشراكات الاستراتيجية.',
          url: 'https://tgpu.my/',
          featured: true,
        },
        {
          index: '02',
          name: 'TGPU Gulf Advisory',
          role: 'الاستشارات العابرة للحدود',
          status: 'متاح · tgpugulf.com',
          desc:
            'خدمات استشارية مستقلة بين ماليزيا ودول الخليج لدخول السوق السعودي والخليجي، وتأهيل الموزعين، والتوريد والتصنيع OEM/ODM من ماليزيا.',
          url: 'https://tgpugulf.com/',
        },
        {
          index: '03',
          name: 'TGPU Digital Ecosystem',
          role: 'مركز التشغيل الموحد',
          status: 'Cloudflare Access · os.tgpu.my',
          desc:
            'بيئة تشغيل داخلية محمية لتطبيقات المنظومة الرقمية، مقترنة بدليل التطبيقات العام.',
          url: 'https://os.tgpu.my/',
          gated: true,
        },
        {
          index: '04',
          name: 'TGPU Innovator Labs',
          role: 'التقنية ودليل التطبيقات',
          status: 'متاح · tgpu.tech',
          desc:
            'ذراع الهندسة التقنية ودليل التطبيقات العام الذي يطوّر حلولاً عملية في التجارة والتعليم والسفر وإدارة المجتمعات.',
          url: 'https://tgpu.tech/',
        },
        {
          index: '05',
          name: 'TGPU Business OS',
          role: 'معاينة منظومة الأعمال',
          status: 'معاينة متاحة · tgpu.tech/business-os',
          desc:
            'بوابة تعريفية تجمع GCC Connect وMatchOS وHealthcare وTEMAN Haramain وOptic وBakes. (النطاق os.tgpu.tech غير موجّه للعامة حالياً.)',
          url: 'https://tgpu.tech/business-os/',
        },
        {
          index: '06',
          name: 'TGPU GulfOS',
          role: 'نظام العمليات الإقليمية',
          status: 'Cloudflare Access · os.tgpugulf.com',
          desc:
            'مساحة عمل محمية لتنسيق المعاملات التجارية بين ماليزيا والخليج وإدارة طلبات الشركاء.',
          url: 'https://os.tgpugulf.com/',
          gated: true,
        },
        {
          index: '07',
          name: 'GCC Market Entry',
          role: 'بوابة المعرفة العامة',
          status: 'متاح · gccmarketentry.me',
          desc:
            'مورد معرفي مجاني يعتمد على المصادر الرسمية لمساعدة الشركات الماليزية على دراسة جاهزية دخول السوق السعودي والخليجي.',
          url: 'https://gccmarketentry.me/',
        },
      ],
    },
    corridor: {
      kicker: 'دخول أسواق الخليج والركائز الثلاث',
      title: 'ثلاث ركائز. رؤية واحدة متكاملة.',
      lead:
        'نجمع بين إتقان اللغة العربية والخبرة بسلاسل التوريد الماليزية والتنفيذ المنهجي عبر جنوب شرق آسيا ودول الخليج.',
      imgAlt:
        'أقواس خشبية ونحاسية حديثة تطل على أفق مالي خليجي مشرق عند الغروب',
      cta: 'افتح دليل دخول أسواق الخليج',
      secondaryCta: 'تعرّف على TGPU Gulf Advisory',
      pillars: [
        {
          title: '01. استشارات ودخول أسواق الخليج',
          text:
            'أبحاث أسواق منظمة، وتأهيل المشترين والموزعين، وتنسيق التوريد والتصنيع OEM/ODM من ماليزيا إلى الرياض ودول مجلس التعاون.',
        },
        {
          title: '02. المنتجات الرقمية وبرمجيات الأعمال',
          text:
            'منصات برمجية متخصصة تغطي عمليات التجزئة، وعيادات البصريات، والمخابز، وسير العمل الصحي، وإدارة الأحياء السكنية.',
        },
        {
          title: '03. التعليم العام والشراكات الاستراتيجية',
          text:
            'منصات تعليمية متعددة اللغات وشراكات مؤسسية مبنية على الدليل والوضوح دون أي ادعاءات مبالغ فيها.',
        },
      ],
    },
    portfolio: {
      kicker: 'محفظة المنتجات الرقمية',
      title: 'تطبيقات موثقة مصممة لتلبية احتياجات تشغيلية حقيقية.',
      lead:
        'صفّ المنصات حسب القطاع واطّلع على الحالة التشغيلية والرابط المباشر ومرحلة الإطلاق الفعلية دون أرقام مختلقة.',
      showing: 'عرض',
      appsWord: 'منصات رئيسية',
      filters: [
        { id: 'all', label: 'جميع المنصات' },
        { id: 'gcc', label: 'الخليج والأعمال' },
        { id: 'commerce', label: 'التجارة والعمليات' },
        { id: 'living', label: 'الحج والمجتمع' },
      ],
      detailsBtn: 'تفاصيل المنصة',
      visitBtn: 'فتح الموقع المباشر',
      moreTitle: 'منصات إضافية فعّالة ضمن المنظومة',
      items: [
        {
          id: 'gcc-connect',
          category: 'gcc',
          name: 'GCC Connect',
          meta: 'شراكات الخليج · متاح',
          domain: 'connect.tgpugulf.com',
          url: 'https://connect.tgpugulf.com/',
          img: 'assets/corporate/products/gcc-connect.webp',
          short:
            'مسار مُدار لتأهيل الشركاء واستقبال الفرص التجارية التي تربط الشركات في جنوب شرق آسيا بنظرائها في دول الخليج.',
          details:
            'تنظم منصة TGPU GCC Connect مسارات التعاون التجاري بين ماليزيا والمملكة العربية السعودية ودول الخليج مع التركيز على المصدرين والموزعين المؤهلين.',
        },
        {
          id: 'match-os',
          category: 'gcc',
          name: 'MatchOS / TGPU GCC Match',
          meta: 'مطابقة الأعمال · متاح',
          domain: 'match.tgpugulf.com',
          url: 'https://match.tgpugulf.com/',
          img: 'assets/corporate/products/match-os.webp',
          short:
            'منصة منظمة لمطابقة الفرص التجارية للموزعين والمشترين والتوريد والتصنيع OEM/ODM بين ماليزيا والخليج.',
          details:
            'تكمل منصة GCC Connect عبر معالجة طلبات المطابقة التجارية المحددة ومواءمة جاهزية المصنعين الماليزيين مع المشترين في الخليج.',
        },
        {
          id: 'teman',
          category: 'living',
          name: 'TEMAN Haramain',
          meta: 'مرافق الحج والعمرة · متاح',
          domain: 'teman.tgpu.my',
          url: 'https://teman.tgpu.my/',
          img: 'assets/corporate/products/teman-haramain.webp',
          short:
            'رفيق سفر للحج والعمرة يعمل دون اتصال بالإنترنت وملائم لكبار السن باللغات الملايوية والعربية والإنجليزية.',
          details:
            'صُمّم تطبيق TEMAN Haramain لوضوح الاستخدام أثناء السفر، ويوفر إرشادات السلامة وبطاقات العبارات وقوائم التحقق العملية.',
        },
        {
          id: 'optic',
          category: 'commerce',
          name: 'TGPU Optic',
          meta: 'تجارة البصريات · عرض تجريبي',
          domain: 'optic.tgpu.my',
          url: 'https://optic.tgpu.my/',
          img: 'assets/corporate/products/optic.webp',
          short:
            'عرض تجريبي لبرمجيات متاجر البصريات متعدد اللغات يشمل كتالوج المنتجات ومواصفات العدسات وحجز المواعيد.',
          details:
            'يستعرض تجربة متكاملة لإدارة متجر البصريات ومواعيد فحص النظر لمتاجر البصريات المستقلة ضمن منظومة TGPU الرقمية.',
        },
        {
          id: 'niaga',
          category: 'commerce',
          name: 'NIAGA',
          meta: 'التجزئة الذكية · متاح',
          domain: 'niaga.tgpu.my',
          url: 'https://niaga.tgpu.my/',
          img: 'assets/corporate/products/niaga.webp',
          short:
            'مساحة عمل عملية لإدارة المخزون والمبيعات اليومية والتقارير لمتاجر التجزئة والبقالة المستقلة.',
          details:
            'يستبدل نظام NIAGA السجلات الورقية المتفرقة بمسح المنتجات وإدارة المخزون ومعالجة المبيعات اليومية وتقارير الأداء.',
        },
        {
          id: 'bakes',
          category: 'commerce',
          name: 'TGPU BAKES',
          meta: 'عمليات المخابز · عرض تجريبي',
          domain: 'bakes.tgpu.my',
          url: 'https://bakes.tgpu.my/',
          img: 'assets/corporate/products/bakes.webp',
          short:
            'عرض تفاعلي لمتجر مخابز يضم كتالوج منتجات وسلة مشتريات ومسار استقبال طلبات الكيك المخصص.',
          details:
            'يعرض تجربة الطلب المباشر للعملاء وتوثيق المواصفات الخاصة بالمخابز ومشاريع الأغذية.',
        },
        {
          id: 'community',
          category: 'living',
          name: 'TGPU Smart Community',
          meta: 'إدارة الأحياء · عرض تجريبي',
          domain: 'community.tgpu.my',
          url: 'https://community.tgpu.my/',
          img: 'assets/corporate/products/smart-community.webp',
          short:
            'عرض تجريبي لإدارة الأحياء السكنية وتنسيق إعلانات السكان والتواصل المجتمعي والمرافق المشتركة.',
          details:
            'يقدم أدوات تنسيق هادئة وسهلة الوصول عبر الجوال لجمعيات السكان ولجان الأحياء السكنية.',
        },
        {
          id: 'healthcare',
          category: 'commerce',
          name: 'TGPU Healthcare',
          meta: 'العمليات الصحية · معاينة',
          domain: 'healthcare.tgpu.tech',
          url: 'https://healthcare.tgpu.tech/',
          img: 'assets/corporate/products/healthcare.webp',
          short:
            'معاينة تشغيلية للعيادات توضح استقبال المراجعين وتسجيل الوصول وتسليم مهام الرعاية ببيانات تجريبية.',
          details:
            'يستكشف تنظيم استقبال العيادات وتسليم الرعاية الصحية باستخدام بيانات افتراضية توضيحية مع التركيز على الامتثال والوضوح.',
        },
        {
          id: 'satu',
          category: 'commerce',
          name: 'SATU by TGPU',
          meta: 'أدوات المشاريع الصغيرة · تجريبي',
          domain: 'satu.tgpu.my',
          url: 'https://satu.tgpu.my/',
          img: 'assets/corporate/products/satu.webp',
          short:
            'حزمة أدوات محلية للأعمال الصغيرة تجمع الملاحظات وحساب الأسعار والفواتير والتصميم الترويجي السريع.',
          details:
            'تساعد منصة SATU رواد الأعمال الصغار في ماليزيا على حساب التكاليف وإصدار الفواتير وإعداد التصاميم اليومية دون تعقيد.',
        },
      ],
      moreApps: [
        { name: 'TGPU Academy', tag: 'التعليم · متاح', url: 'academy/ar.html' },
        { name: 'TGPU ILMU', tag: 'مكتبة المصادر · متاح', url: 'https://ilmu.tgpu.my/' },
        { name: 'TGPU Iqra', tag: 'تطبيق القراءة · متاح', url: 'https://iqra.tgpu.my/' },
        { name: 'Amal by TGPU', tag: 'العبادات اليومية · متاح', url: 'https://amal.tgpu.my/' },
        { name: 'WATCH by TGPU', tag: 'بوابة البث العلمي · متاح', url: 'https://watch.tgpu.my/' },
        { name: 'Khalifah Kecil', tag: 'تعلّم الأسرة · متاح', url: 'https://khalifah.tgpu.my/' },
        { name: 'TGPU Wellness', tag: 'دليل العافية · متاح', url: 'https://wellness.tgpu.my/' },
        { name: 'Muthabbit', tag: 'تحقق بالذكاء الاصطناعي · قريباً', url: 'https://muthabbit.tgpu.my/' },
      ],
    },
    tech: {
      kicker: 'التقنية والابتكار',
      title: 'هندسة منضبطة تركز على سهولة الوصول والسرعة وكفاءة التشغيل.',
      lead:
        'تعتمد مختبرات TGPU Innovator Labs بنية تقنية خفيفة عالية الأداء تدعم العمل دون اتصال والتكافؤ الكامل بين العربية والإنجليزية والملايوية.',
      imgAlt:
        'مكتب عمل عصري باللون الزمردي الداكن والنحاس يعرض هندسة بيانات تقنية منظمة',
      items: [
        {
          title: '01. أداء فائق على الحافة دون أعباء زائدة',
          text:
            'تُبنى المنصات والمواقع المؤسسية على بنية سحابية خفيفة ومستدامة تضمن سرعة الاستجابة دون تكاليف تشغيلية غير مبررة.',
        },
        {
          title: '02. تكافؤ أصيل للغات الثلاث واتجاه RTL',
          text:
            'صُممت المنصات الرئيسية لتدعم الإنجليزية والملايوية والعربية بتخطيط كامل من اليمين إلى اليسار وخط Noto Kufi Arabic.',
        },
        {
          title: '03. موثوقية العمل دون اتصال',
          text:
            'تطبيقات مثل TEMAN Haramain وSATU تبقى قابلة للاستخدام حتى عند ضعف الشبكة أو أثناء السفر.',
        },
        {
          title: '04. ذكاء اصطناعي منضبط بالتحقق من المصادر',
          text:
            'تُصمم الأدوات المعززة بالذكاء الاصطناعي مثل Muthabbit مع إبراز المصادر والضوابط التحريرية والإشراف البشري.',
        },
      ],
    },
    founder: {
      kicker: 'المؤسس والقيادة',
      title: 'محمد ممدوح صافين',
      role: 'المؤسس · TGPU Legacy وTGPU Gulf Advisory والمنظومة الرقمية',
      portraitAlt: 'صورة المؤسس محمد ممدوح صافين، مؤسس TGPU Legacy',
      p1:
        'يقود محمد ممدوح صافين مؤسسة TGPU Legacy من ماليزيا، جامعاً بين دراساته العليا في الدراسات العربية بالجامعة الإسلامية العالمية بماليزيا (IIUM) وهندسة المنتجات الرقمية والتنسيق التجاري بين ماليزيا والخليج.',
      p2:
        'وانطلاقاً من معرفة مباشرة بثقافة الأعمال في المملكة العربية السعودية ودول الخليج وبيئة الشركات الصغيرة والتعليم في ماليزيا، يشرف على استشارات دخول الأسواق في TGPU Gulf Advisory والمنصات الرقمية في TGPU Digital Ecosystem.',
      linkedinBtn: 'تواصل عبر LinkedIn',
      portfolioBtn: 'ملف المؤسس',
      classesBtn: 'البرامج التعليمية والصفوف',
    },
    collab: {
      kicker: 'الشراكات الاستراتيجية وعلاقات المستثمرين',
      title: 'من الفرصة إلى تعاون مؤسسي منظم.',
      lead:
        'نتعاون بانتقائية مع المصدرين والموزعين الإقليميين والمؤسسات التعليمية وشركاء التقنية الذين يقدّرون الحوكمة الشفافة.',
      steps: [
        {
          no: '01',
          title: 'استكشاف الفرص',
          text:
            'تحديد الهدف التجاري أو جاهزية المنتج أو المسار التقني عبر ماليزيا وجنوب شرق آسيا ودول الخليج.',
        },
        {
          no: '02',
          title: 'مواءمة الاستراتيجية',
          text:
            'مراجعة المتطلبات التنظيمية واللغوية وملاءمة السوق عبر المصادر الرسمية قبل الالتزام برأس المال.',
        },
        {
          no: '03',
          title: 'البناء المشترك',
          text:
            'التنفيذ وفق نطاق واضح ومراحل محددة ومسؤولية تشغيلية شفافة في الاستشارات أو تطوير البرمجيات.',
        },
      ],
      panels: [
        {
          title: 'الشراكات الاستراتيجية',
          body:
            'تحافظ TGPU Legacy على تعاون تعليمي وتجاري فعلي قائم على المعايير المشتركة لا على استعراض الشعارات.',
          bullets: [
            'Islamic Education Class (IEC) — تطوير هيكلة المناهج والتدريس التفاعلي للمجتمعات متعددة الثقافات.',
            'Akademi Lancar — دعم الوصول المجتمعي لحلقات تعليم القرآن الكريم المجانية عبر الإنترنت.',
            'شركاء التجارة بين ماليزيا والخليج — تأهيل المصدرين والمشترين والتصنيع عبر TGPU Gulf Advisory.',
          ],
          linkLabel: 'استكشف شراكات الأكاديمية',
          linkHref: 'academy/collaboration.html',
        },
        {
          title: 'علاقات المستثمرين والحوكمة المؤسسية',
          body:
            'تعمل TGPU Legacy كمؤسسة ماليزية مسجلة (SSM 202603149563 / 003857959-A) بنمو ذاتي منضبط دون التزامات ديون خارجية.',
          bullets: [
            'فصل واضح بين المبادرات التعليمية المجانية والأدوات الرقمية العامة والخدمات الاستشارية التجارية.',
            'معالجة محافظة للبيانات متوافقة مع قانون حماية البيانات الشخصية الماليزي (PDPA) دون تتبع إعلاني.',
            'تواصل تنفيذي مباشر للشركاء المؤسسيين ومناقشات المشاريع المشتركة وفق نطاق محدد.',
          ],
          linkLabel: 'اطلب إحاطة مؤسسية',
          linkHref: '#contact',
        },
      ],
    },
    contact: {
      kicker: 'التواصل',
      title: 'ابنِ الفرصة القادمة معنا.',
      lead:
        'تواصل مع TGPU Legacy بشأن دخول أسواق ماليزيا والخليج، أو الشراكات التقنية، أو الاستفسارات المؤسسية.',
      emailLabel: 'البريد المؤسسي',
      whatsappLabel: 'واتساب المباشر',
      locationLabel: 'المقر الرئيسي',
      locationValue: 'كوالالمبور، ماليزيا',
      formTitle: 'أرسل استفساراً مؤسسياً',
      nameLabel: 'الاسم الكامل',
      namePh: 'اكتب اسمك الكامل',
      nameErr: 'يرجى إدخال الاسم.',
      orgLabel: 'الشركة / المؤسسة',
      orgPh: 'اسم المؤسسة (اختياري)',
      emailFieldLabel: 'البريد الإلكتروني الرسمي',
      emailPh: 'you@company.com',
      emailErr: 'يرجى إدخال بريد إلكتروني صحيح.',
      topicLabel: 'مجال الاستفسار',
      topics: [
        'استشارات ودخول الأسواق بين ماليزيا والخليج',
        'الشراكات الرقمية والتقنية',
        'علاقات المستثمرين والإحاطة المؤسسية',
        'التعاون التعليمي والمجتمعي',
      ],
      msgLabel: 'تفاصيل المشروع أو الشراكة',
      msgPh: 'اذكر باختصار الهدف أو السوق المستهدف أو الجدول الزمني.',
      msgErr: 'يرجى كتابة 10 أحرف على الأقل لتوضيح طلبك.',
      submitBtn: 'تجهيز الاستفسار',
      feedbackText:
        'تم التحقق من بيانات استفسارك بنجاح. يمكنك إرساله عبر تطبيق البريد الإلكتروني أو المتابعة عبر واتساب.',
      feedbackEmailBtn: 'فتح تطبيق البريد',
      feedbackWaBtn: 'المتابعة عبر واتساب',
    },
    footer: {
      desc:
        'مؤسسة Tok Guru Pulau Ubi Legacy — المقر المؤسسي الماليزي الذي يربط جنوب شرق آسيا بدول الخليج عبر الاستشارات والمنتجات الرقمية والتقنية.',
      col1Title: 'المؤسسة',
      col2Title: 'المنظومة',
      col3Title: 'الحوكمة والموارد',
      privacyLink: 'سياسة الخصوصية والمعلومات القانونية',
      classesLink: 'الدروس والتعليم',
      supportLink: 'دعم TGPU',
      searchLink: 'البحث في TGPU',
      ssm: 'التسجيل التجاري الماليزي (SSM): 202603149563 (003857959-A)',
      copy: '© 2026 TGPU Legacy. جميع الحقوق محفوظة.',
    },
    privacy: {
      backHome: 'العودة إلى الصفحة الرئيسية لـ TGPU Legacy',
      eyebrow: 'الخصوصية والحوكمة القانونية',
      h1: 'سياسة الخصوصية والمعلومات القانونية',
      updated: 'تاريخ السريان: 24 نوفمبر 2026 · كوالالمبور، ماليزيا',
      sections: [
        {
          h2: '1. الهوية المؤسسية',
          p:
            'يُدار هذا الموقع (https://tgpu.my) من قِبل مؤسسة Tok Guru Pulau Ubi Legacy (TGPU Legacy)، وهي مؤسسة فردية مسجلة في ماليزيا لدى هيئة الشركات الماليزية (SSM) برقم تسجيل 202603149563 (003857959-A).',
        },
        {
          h2: '2. جمع البيانات وممارسات الخصوصية',
          p:
            'تلتزم TGPU Legacy بتقليل جمع البيانات واحترام قانون حماية البيانات الشخصية الماليزي لعام 2010 (PDPA):',
          bullets: [
            'لا يستخدم هذا الموقع ملفات تعريف الارتباط الإعلانية أو أدوات التتبع السلوكي التابعة لأطراف ثالثة.',
            'تُرسل الاستفسارات المؤسسية مباشرة عبر البريد الإلكتروني الذي يبدؤه المستخدم (mamduh@tgpu.my) أو عبر واتساب (+60 12-641 3812) دون تخزين مخفي.',
            'تخضع سجلات الخادم القياسية (مثل التوجيه عبر Cloudflare والحماية الأمنية) لضرورات التشغيل والأمان فقط.',
          ],
        },
        {
          h2: '3. حدود المعلومات التعليمية والاستشارية',
          p:
            'المحتوى المنشور عبر TGPU Legacy وGCC Market Entry وTGPU Academy مخصص للتعريف المؤسسي والتعليم العام. أما المسائل القانونية أو الضريبية أو الطبية أو الشرعية المتخصصة فتتطلب الرجوع إلى المختصين المرخصين والجهات الرسمية المختصة. وتشير صفات Demo أو Preview أو Beta إلى مراحل تطوير تقنية.',
        },
        {
          h2: '4. الملكية الفكرية',
          p:
            'يبقى اسم TGPU Legacy وشعارها ومحتواها وأصولها البصرية ملكاً لمؤسسة Tok Guru Pulau Ubi Legacy، كما تبقى شعارات الشركاء ملكاً لجهاتها المعنية وتُعرض للإشارة إلى التعاون التعليمي القائم فقط.',
        },
        {
          h2: '5. التواصل بشأن الخصوصية والمسائل القانونية',
          p:
            'لأي استفسار يتعلق بحماية البيانات أو التحقق المؤسسي أو الملكية الفكرية، يرجى مراسلتنا عبر mamduh@tgpu.my.',
        },
      ],
    },
  },
};

function esc(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function buildFontsLink(lang) {
  if (lang === 'ar') {
    return `<link href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">`;
  }
  return `<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">`;
}

function buildHead({ lang, title, description, canonical, ogLocale, urlFile }) {
  return `<!doctype html>
<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="theme-color" content="#064f33">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="en" href="https://tgpu.my/">
  <link rel="alternate" hreflang="ms-MY" href="https://tgpu.my/ms.html">
  <link rel="alternate" hreflang="ar" href="https://tgpu.my/ar.html">
  <link rel="alternate" hreflang="x-default" href="https://tgpu.my/">
  <link rel="icon" type="image/png" sizes="512x512" href="assets/tgpu-legacy-favicon.png">
  <link rel="apple-touch-icon" href="assets/corporate/apple-touch-icon.png">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="TGPU Legacy">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:locale" content="${ogLocale}">
  <meta property="og:image" content="https://tgpu.my/assets/corporate/tgpu-legacy-og.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="TGPU Legacy — Connecting Markets. Building Technology. Creating Opportunities.">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="https://tgpu.my/assets/corporate/tgpu-legacy-og.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  ${buildFontsLink(lang)}
  <link rel="stylesheet" href="assets/corporate/corporate.css">
  <script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'TGPU Legacy',
        legalName: 'Tok Guru Pulau Ubi Legacy',
        url: 'https://tgpu.my/',
        logo: 'https://tgpu.my/assets/corporate/tgpu-legacy-logo.png',
        email: 'mamduh@tgpu.my',
        telephone: '+60126413812',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kuala Lumpur',
          addressCountry: 'MY',
        },
        founder: {
          '@type': 'Person',
          name: 'Muhammad Mamduh Saffin',
          url: 'https://founder.tgpu.my/',
          sameAs: ['https://www.linkedin.com/in/muhammad-mamduh/'],
        },
        sameAs: [
          'https://tgpugulf.com/',
          'https://tgpu.tech/',
          'https://gccmarketentry.me/',
          'https://www.linkedin.com/in/muhammad-mamduh/',
        ],
      },
      {
        '@type': 'WebSite',
        name: 'TGPU Legacy',
        url: `https://tgpu.my/${urlFile === 'index.html' ? '' : urlFile}`,
        inLanguage: lang,
      },
    ],
  })}</script>
  <script src="assets/corporate/corporate.js" defer></script>
</head>`;
}

function buildHeader(t, activeLang, isPrivacy = false) {
  const prefix = isPrivacy ? t.file : '';
  return `  <header class="site-header">
    <div class="container header-inner">
      <a class="brand-link" href="${t.file}">
        <img src="assets/corporate/tgpu-legacy-emblem.webp" width="38" height="27" alt="TGPU Legacy">
        <span class="brand-wordmark"><bdi>TGPU Legacy</bdi></span>
      </a>
      <nav class="primary-nav" aria-label="${esc(t.nav.navLabel)}">
        <a href="${prefix}#about">${esc(t.nav.about)}</a>
        <a href="${prefix}#ecosystem">${esc(t.nav.ecosystem)}</a>
        <a href="${prefix}#portfolio">${esc(t.nav.portfolio)}</a>
        <a href="${prefix}#leadership">${esc(t.nav.leadership)}</a>
        <a href="${prefix}#contact">${esc(t.nav.contact)}</a>
      </nav>
      <div class="header-actions">
        <nav class="lang-switcher" aria-label="${esc(t.nav.langLabel)}">
          <a href="${isPrivacy ? 'privacy.html' : 'index.html'}" lang="en" hreflang="en"${activeLang === 'en' ? ' aria-current="page"' : ''}>EN</a>
          <a href="${isPrivacy ? 'privacy-ms.html' : 'ms.html'}" lang="ms" hreflang="ms"${activeLang === 'ms' ? ' aria-current="page"' : ''}>BM</a>
          <a href="${isPrivacy ? 'privacy-ar.html' : 'ar.html'}" lang="ar" hreflang="ar"${activeLang === 'ar' ? ' aria-current="page"' : ''}>ع</a>
        </nav>
        <a class="btn btn-primary header-cta" href="${prefix}#contact">${esc(t.nav.cta)}</a>
        <button type="button" id="mobile-menu-btn" class="mobile-menu-btn" aria-controls="mobile-drawer" aria-expanded="false" aria-label="${esc(t.nav.menuOpen)}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </div>
    </div>
  </header>
  <div id="mobile-drawer" class="mobile-drawer" data-open="false" aria-hidden="true">
    <div class="mobile-drawer-panel" role="dialog" aria-modal="true" aria-label="${esc(t.nav.navLabel)}">
      <div class="drawer-top">
        <span class="brand-wordmark"><bdi>TGPU Legacy</bdi></span>
        <button type="button" id="drawer-close" class="drawer-close" aria-label="${esc(t.nav.menuClose)}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>
      <nav class="drawer-nav" aria-label="${esc(t.nav.navLabel)}">
        <a href="${prefix}#about">${esc(t.nav.about)}</a>
        <a href="${prefix}#ecosystem">${esc(t.nav.ecosystem)}</a>
        <a href="${prefix}#portfolio">${esc(t.nav.portfolio)}</a>
        <a href="${prefix}#leadership">${esc(t.nav.leadership)}</a>
        <a href="${prefix}#contact">${esc(t.nav.contact)}</a>
        <a href="${t.privacyFile}">${esc(t.footer.privacyLink)}</a>
      </nav>
      <a class="btn btn-primary" href="${prefix}#contact">${esc(t.nav.cta)}</a>
    </div>
  </div>`;
}

function buildFooter(t, isPrivacy = false) {
  const prefix = isPrivacy ? t.file : '';
  return `  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <img src="assets/corporate/tgpu-legacy-emblem-light.webp" width="44" height="31" alt="TGPU Legacy">
            <strong><bdi>TGPU Legacy</bdi></strong>
          </div>
          <p class="footer-desc">${esc(t.footer.desc)}</p>
        </div>
        <div class="footer-col">
          <h3>${esc(t.footer.col1Title)}</h3>
          <ul>
            <li><a href="${prefix}#about">${esc(t.nav.about)}</a></li>
            <li><a href="${prefix}#corridor">${esc(t.corridor.kicker)}</a></li>
            <li><a href="${prefix}#leadership">${esc(t.nav.leadership)}</a></li>
            <li><a href="${prefix}#collaborations">${esc(t.collab.kicker)}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>${esc(t.footer.col2Title)}</h3>
          <ul>
            <li><a href="https://tgpugulf.com/" target="_blank" rel="noopener noreferrer"><bdi>TGPU Gulf Advisory</bdi></a></li>
            <li><a href="https://tgpu.tech/" target="_blank" rel="noopener noreferrer"><bdi>TGPU Innovator Labs</bdi></a></li>
            <li><a href="https://tgpu.tech/business-os/" target="_blank" rel="noopener noreferrer"><bdi>TGPU Business OS</bdi></a></li>
            <li><a href="https://gccmarketentry.me/" target="_blank" rel="noopener noreferrer"><bdi>GCC Market Entry</bdi></a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>${esc(t.footer.col3Title)}</h3>
          <ul>
            <li><a href="${t.privacyFile}">${esc(t.footer.privacyLink)}</a></li>
            <li><a href="${t.classesFile}">${esc(t.footer.classesLink)}</a></li>
            <li><a href="support/">${esc(t.footer.supportLink)}</a></li>
            <li><a href="search/">${esc(t.footer.searchLink)}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>${esc(t.footer.copy)}</span>
        <span><a href="${t.classesFile}#ssm">${esc(t.footer.ssm)}</a></span>
      </div>
    </div>
  </footer>`;
}

function buildMainPage(t) {
  const head = buildHead({
    lang: t.lang,
    title: t.title,
    description: t.description,
    canonical: t.canonical,
    ogLocale: t.ogLocale,
    urlFile: t.file,
  });

  const marqueeItems = t.marquee
    .map((m) => `<span class="marquee-item">${esc(m)} <span class="marquee-sep" aria-hidden="true">✦</span></span>`)
    .join('');

  const factsHtml = t.about.facts
    .map(
      (f) => `<div class="fact-block">
        <strong>${esc(f.label)}</strong>
        <span class="tabular">${esc(f.value)}</span>
      </div>`
    )
    .join('');

  const ecoCardsHtml = t.ecosystem.cards
    .map((c) => {
      const cls = c.featured ? 'eco-card eco-card-featured reveal' : 'eco-card reveal';
      return `<article class="${cls}" id="eco-${c.index}">
        <div class="eco-meta">
          <span class="eco-index tabular">${c.index}. ${esc(c.role)}</span>
          <span>${esc(c.status)}</span>
        </div>
        <h3><bdi>${esc(c.name)}</bdi></h3>
        <p>${esc(c.desc)}</p>
        <div class="eco-footer">
          <a class="eco-link" href="${c.url}" target="_blank" rel="noopener noreferrer">${esc(
        c.gated ? t.ecosystem.gated : t.ecosystem.visit
      )} ↗</a>
        </div>
      </article>`;
    })
    .join('');

  const pillarsHtml = t.corridor.pillars
    .map(
      (p) => `<article class="pillar-row reveal">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.text)}</p>
      </article>`
    )
    .join('');

  const filtersHtml = t.portfolio.filters
    .map(
      (f, idx) =>
        `<button type="button" class="filter-btn" data-filter="${f.id}" aria-pressed="${
          idx === 0 ? 'true' : 'false'
        }">${esc(f.label)}</button>`
    )
    .join('');

  const portfolioCardsHtml = t.portfolio.items
    .map(
      (item) => `<article class="product-card reveal" data-category="${item.category}" data-title="${esc(
        item.name
      )}" data-meta="${esc(item.meta)}" data-domain="${esc(item.domain)}" data-url="${esc(
        item.url
      )}" data-details="${esc(item.details)}">
        <div class="product-thumb">
          <img src="${item.img}" width="960" height="600" alt="${esc(item.name)}" loading="lazy" decoding="async">
        </div>
        <div class="product-body">
          <div class="product-meta">
            <span>${esc(item.meta)}</span>
            <span aria-hidden="true">·</span>
            <span><bdi>${esc(item.domain)}</bdi></span>
          </div>
          <h3><bdi>${esc(item.name)}</bdi></h3>
          <p>${esc(item.short)}</p>
          <div class="product-actions">
            <button type="button" class="product-detail-btn">${esc(t.portfolio.detailsBtn)} →</button>
            <a class="product-visit-link" href="${item.url}" target="_blank" rel="noopener noreferrer">${esc(
        t.portfolio.visitBtn
      )} ↗</a>
          </div>
        </div>
      </article>`
    )
    .join('');

  const moreAppsHtml = t.portfolio.moreApps
    .map((app) => {
      const ext = app.url.startsWith('http');
      return `<a class="more-app-link" href="${app.url}"${
        ext ? ' target="_blank" rel="noopener noreferrer"' : ''
      }>
        <strong><bdi>${esc(app.name)}</bdi></strong>
        <span>${esc(app.tag)} ↗</span>
      </a>`;
    })
    .join('');

  const techItemsHtml = t.tech.items
    .map(
      (item) => `<div class="tech-item reveal">
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.text)}</p>
      </div>`
    )
    .join('');

  const stepsHtml = t.collab.steps
    .map(
      (s) => `<article class="step-card reveal">
        <span class="step-no tabular">${s.no}</span>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.text)}</p>
      </article>`
    )
    .join('');

  const panelsHtml = t.collab.panels
    .map((p) => {
      const bullets = p.bullets.map((b) => `<li>${esc(b)}</li>`).join('');
      return `<article class="gov-panel reveal">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.body)}</p>
        <ul class="gov-list">${bullets}</ul>
        <div style="margin-top:auto;padding-top:8px">
          <a class="btn btn-outline" href="${p.linkHref}">${esc(p.linkLabel)}</a>
        </div>
      </article>`;
    })
    .join('');

  const topicsHtml = t.contact.topics
    .map((topic) => `<option value="${esc(topic)}">${esc(topic)}</option>`)
    .join('');

  return `${head}
<body data-classes="${t.classesFile}">
  <a class="skip-link" href="#main">${esc(t.skip)}</a>
  <div id="scroll-progress" class="scroll-progress" aria-hidden="true"></div>
${buildHeader(t, t.lang, false)}
  <main id="main">
    <section class="hero" id="home" aria-labelledby="hero-title">
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="hero-meta-line hero-stagger-1">
            <span>${esc(t.hero.meta[0])}</span>
            <span aria-hidden="true">·</span>
            <span>${esc(t.hero.meta[1])}</span>
            <span aria-hidden="true">·</span>
            <span>${esc(t.hero.meta[2])}</span>
          </div>
          <h1 id="hero-title" class="hero-title hero-stagger-2">
            ${esc(t.hero.h1a)}<br>
            <span>${esc(t.hero.h1b)}</span><br>
            ${esc(t.hero.h1c)}
          </h1>
          <p class="hero-lead hero-stagger-3">${esc(t.hero.lead)}</p>
          <div class="hero-actions hero-stagger-3">
            <a class="btn btn-primary" href="#ecosystem">${esc(t.hero.primaryCta)}</a>
            <a class="btn btn-outline" href="#portfolio">${esc(t.hero.secondaryCta)}</a>
          </div>
        </div>
        <div class="hero-visual hero-stagger-2">
          <img class="hero-visual-img" src="assets/corporate/hero-atrium.webp" width="1600" height="900" alt="${esc(
            t.hero.visualAlt
          )}" fetchpriority="high" decoding="async">
          <div class="hero-visual-scrim">
            <div class="hero-crest-card">
              <img src="assets/corporate/tgpu-legacy-emblem.webp" width="72" height="51" alt="TGPU Legacy Emblem" decoding="async">
              <div class="hero-crest-text">
                <strong><bdi>${esc(t.hero.crestTitle)}</bdi></strong>
                <span class="tabular">${esc(t.hero.crestSub)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="marquee-band" aria-label="TGPU Corporate Ecosystem">
      <div class="marquee-track">
        <div class="marquee-group">${marqueeItems}</div>
        <div class="marquee-group" aria-hidden="true">${marqueeItems}</div>
      </div>
    </section>

    <section class="section" id="about" aria-labelledby="about-title">
      <div class="container about-grid">
        <div class="about-logo-stage reveal">
          <img src="assets/corporate/tgpu-legacy-logo.webp" width="300" height="300" alt="${esc(
            t.about.logoAlt
          )}" loading="lazy" decoding="async">
        </div>
        <div class="reveal">
          <p class="section-kicker">${esc(t.about.kicker)}</p>
          <h2 id="about-title" class="section-title" style="margin-top:8px">${esc(t.about.title)}</h2>
          <p class="section-lead" style="margin-top:16px">${esc(t.about.p1)}</p>
          <p class="section-lead" style="margin-top:14px">${esc(t.about.p2)}</p>
          <div class="about-facts">${factsHtml}</div>
        </div>
      </div>
    </section>

    <section class="section section-stone" id="ecosystem" aria-labelledby="ecosystem-title">
      <div class="container">
        <div class="section-header section-header-split reveal">
          <div>
            <p class="section-kicker">${esc(t.ecosystem.kicker)}</p>
            <h2 id="ecosystem-title" class="section-title" style="margin-top:8px">${esc(t.ecosystem.title)}</h2>
          </div>
          <p class="section-lead">${esc(t.ecosystem.lead)}</p>
        </div>
        <div class="ecosystem-grid">${ecoCardsHtml}</div>
      </div>
    </section>

    <section class="section section-dark" id="corridor" aria-labelledby="corridor-title">
      <div class="container">
        <div class="section-header section-header-split reveal">
          <div>
            <p class="section-kicker">${esc(t.corridor.kicker)}</p>
            <h2 id="corridor-title" class="section-title" style="margin-top:8px">${esc(t.corridor.title)}</h2>
          </div>
          <p class="section-lead">${esc(t.corridor.lead)}</p>
        </div>
        <div class="corridor-grid">
          <div class="corridor-media reveal">
            <img src="assets/corporate/gcc-corridor.webp" width="1200" height="900" alt="${esc(
              t.corridor.imgAlt
            )}" loading="lazy" decoding="async">
          </div>
          <div class="pillars-stack">
            ${pillarsHtml}
            <div class="hero-actions" style="padding-top:8px">
              <a class="btn btn-gold" href="https://gccmarketentry.me/" target="_blank" rel="noopener noreferrer">${esc(
                t.corridor.cta
              )} ↗</a>
              <a class="btn btn-outline-light" href="https://tgpugulf.com/" target="_blank" rel="noopener noreferrer">${esc(
                t.corridor.secondaryCta
              )} ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="portfolio" aria-labelledby="portfolio-title">
      <div class="container">
        <div class="section-header section-header-split reveal">
          <div>
            <p class="section-kicker">${esc(t.portfolio.kicker)}</p>
            <h2 id="portfolio-title" class="section-title" style="margin-top:8px">${esc(t.portfolio.title)}</h2>
          </div>
          <p class="section-lead">${esc(t.portfolio.lead)}</p>
        </div>
        <div class="portfolio-toolbar">
          <div class="filter-tabs" role="group" aria-label="${esc(t.portfolio.kicker)}">
            ${filtersHtml}
          </div>
          <p class="tabular" style="font-size:0.88rem;color:var(--ink-muted);font-weight:600">
            ${esc(t.portfolio.showing)} <span id="portfolio-count">${t.portfolio.items.length}</span> ${esc(
    t.portfolio.appsWord
  )}
          </p>
        </div>
        <div class="portfolio-grid">${portfolioCardsHtml}</div>
        <div class="more-apps-panel reveal">
          <h3>${esc(t.portfolio.moreTitle)}</h3>
          <div class="more-apps-list">${moreAppsHtml}</div>
        </div>
      </div>
    </section>

    <section class="section section-stone" id="technology" aria-labelledby="tech-title">
      <div class="container">
        <div class="section-header section-header-split reveal">
          <div>
            <p class="section-kicker">${esc(t.tech.kicker)}</p>
            <h2 id="tech-title" class="section-title" style="margin-top:8px">${esc(t.tech.title)}</h2>
          </div>
          <p class="section-lead">${esc(t.tech.lead)}</p>
        </div>
        <div class="tech-grid">
          <div class="tech-list">${techItemsHtml}</div>
          <div class="tech-visual reveal">
            <img src="assets/corporate/tech-innovation.webp" width="1200" height="900" alt="${esc(
              t.tech.imgAlt
            )}" loading="lazy" decoding="async">
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="leadership" aria-labelledby="founder-title">
      <div class="container founder-grid">
        <div class="founder-frame reveal">
          <img src="assets/corporate/founder-portrait.webp" width="900" height="1200" alt="${esc(
            t.founder.portraitAlt
          )}" loading="lazy" decoding="async">
        </div>
        <div class="founder-copy reveal">
          <p class="section-kicker">${esc(t.founder.kicker)}</p>
          <h2 id="founder-title" class="section-title">${esc(t.founder.title)}</h2>
          <p class="founder-role">${esc(t.founder.role)}</p>
          <p>${esc(t.founder.p1)}</p>
          <p>${esc(t.founder.p2)}</p>
          <div class="founder-links">
            <a class="btn btn-primary" href="https://www.linkedin.com/in/muhammad-mamduh/" target="_blank" rel="noopener noreferrer">${esc(
              t.founder.linkedinBtn
            )} ↗</a>
            <a class="btn btn-outline" href="https://founder.tgpu.my/" target="_blank" rel="noopener noreferrer">${esc(
              t.founder.portfolioBtn
            )} ↗</a>
            <a class="btn btn-outline" href="${t.classesFile}">${esc(t.founder.classesBtn)}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-stone" id="collaborations" aria-labelledby="collab-title">
      <div class="container">
        <div class="section-header section-header-split reveal">
          <div>
            <p class="section-kicker">${esc(t.collab.kicker)}</p>
            <h2 id="collab-title" class="section-title" style="margin-top:8px">${esc(t.collab.title)}</h2>
          </div>
          <p class="section-lead">${esc(t.collab.lead)}</p>
        </div>
        <div class="collab-steps">${stepsHtml}</div>
        <div class="governance-split" id="investor-relations">${panelsHtml}</div>
      </div>
    </section>

    <section class="section section-dark" id="contact" aria-labelledby="contact-title">
      <div class="container contact-grid">
        <div class="reveal">
          <p class="section-kicker">${esc(t.contact.kicker)}</p>
          <h2 id="contact-title" class="section-title" style="margin-top:8px">${esc(t.contact.title)}</h2>
          <p class="section-lead" style="margin-top:14px">${esc(t.contact.lead)}</p>
          <div class="contact-channels">
            <div class="channel-row">
              <span>${esc(t.contact.emailLabel)}</span>
              <a href="mailto:mamduh@tgpu.my?subject=TGPU%20Legacy%20Corporate%20Enquiry"><bdi>mamduh@tgpu.my</bdi></a>
            </div>
            <div class="channel-row">
              <span>${esc(t.contact.whatsappLabel)}</span>
              <a href="https://wa.me/60126413812" target="_blank" rel="noopener noreferrer"><bdi>+60 12-641 3812</bdi></a>
            </div>
            <div class="channel-row">
              <span>${esc(t.contact.locationLabel)}</span>
              <strong>${esc(t.contact.locationValue)}</strong>
            </div>
          </div>
        </div>

        <form id="corporate-enquiry-form" class="enquiry-form reveal" novalidate>
          <h3 style="font-size:1.35rem">${esc(t.contact.formTitle)}</h3>
          <div class="form-row form-row-2">
            <div class="field">
              <label for="enquiry-name">${esc(t.contact.nameLabel)}</label>
              <input id="enquiry-name" type="text" required placeholder="${esc(t.contact.namePh)}" data-err-msg="${esc(
    t.contact.nameErr
  )}">
              <span class="field-error" data-error-for="enquiry-name" aria-live="polite"></span>
            </div>
            <div class="field">
              <label for="enquiry-org">${esc(t.contact.orgLabel)}</label>
              <input id="enquiry-org" type="text" placeholder="${esc(t.contact.orgPh)}">
            </div>
          </div>
          <div class="form-row form-row-2">
            <div class="field">
              <label for="enquiry-email">${esc(t.contact.emailFieldLabel)}</label>
              <input id="enquiry-email" type="email" required placeholder="${esc(t.contact.emailPh)}" data-err-msg="${esc(
    t.contact.emailErr
  )}">
              <span class="field-error" data-error-for="enquiry-email" aria-live="polite"></span>
            </div>
            <div class="field">
              <label for="enquiry-topic">${esc(t.contact.topicLabel)}</label>
              <select id="enquiry-topic">${topicsHtml}</select>
            </div>
          </div>
          <div class="field">
            <label for="enquiry-message">${esc(t.contact.msgLabel)}</label>
            <textarea id="enquiry-message" required placeholder="${esc(t.contact.msgPh)}" data-err-msg="${esc(
    t.contact.msgErr
  )}"></textarea>
            <span class="field-error" data-error-for="enquiry-message" aria-live="polite"></span>
          </div>
          <div>
            <button type="submit" class="btn btn-primary">${esc(t.contact.submitBtn)}</button>
          </div>
          <div id="form-feedback" class="form-feedback" hidden tabindex="-1">
            <p>${esc(t.contact.feedbackText)}</p>
            <div class="hero-actions" style="margin-top:12px">
              <a id="feedback-mailto" class="btn btn-primary" href="mailto:mamduh@tgpu.my">${esc(
                t.contact.feedbackEmailBtn
              )}</a>
              <a class="btn btn-outline" href="https://wa.me/60126413812" target="_blank" rel="noopener noreferrer">${esc(
                t.contact.feedbackWaBtn
              )} ↗</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  </main>

  <div id="product-modal" class="modal-backdrop" hidden>
    <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal-media">
        <img id="modal-img" src="assets/corporate/products/gcc-connect.webp" alt="">
      </div>
      <div class="modal-content">
        <div class="modal-head">
          <div>
            <p id="modal-meta" class="section-kicker" style="margin-bottom:6px"></p>
            <h3 id="modal-title" style="font-size:1.55rem"></h3>
          </div>
          <button type="button" id="modal-close" class="modal-close" aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>
        <p id="modal-desc" style="color:var(--ink-secondary);line-height:1.65"></p>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;padding-top:8px">
          <span id="modal-domain" style="font-size:0.86rem;font-weight:600;color:var(--ink-muted)"></span>
          <a id="modal-visit" class="btn btn-primary" href="#" target="_blank" rel="noopener noreferrer">${esc(
            t.portfolio.visitBtn
          )} ↗</a>
        </div>
      </div>
    </div>
  </div>
${buildFooter(t, false)}
</body>
</html>`;
}

function buildPrivacyPage(t) {
  const head = buildHead({
    lang: t.lang,
    title: t.privacyTitle,
    description: t.privacyDescription,
    canonical: t.privacyCanonical,
    ogLocale: t.ogLocale,
    urlFile: t.privacyFile,
  });

  const sectionsHtml = t.privacy.sections
    .map((sec) => {
      const bullets = sec.bullets
        ? `<ul>${sec.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>`
        : '';
      return `<section class="legal-section">
        <h2>${esc(sec.h2)}</h2>
        <p>${esc(sec.p)}</p>
        ${bullets}
      </section>`;
    })
    .join('');

  return `${head}
<body>
  <a class="skip-link" href="#main">${esc(t.skip)}</a>
  <div id="scroll-progress" class="scroll-progress" aria-hidden="true"></div>
${buildHeader(t, t.lang, true)}
  <main id="main">
    <section class="legal-hero">
      <div class="container">
        <p class="section-kicker">${esc(t.privacy.eyebrow)}</p>
        <h1 style="margin-top:8px">${esc(t.privacy.h1)}</h1>
        <p>${esc(t.privacy.updated)}</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <article class="legal-article">
          ${sectionsHtml}
          <div>
            <a class="btn btn-outline" href="${t.file}">${esc(t.privacy.backHome)}</a>
          </div>
        </article>
      </div>
    </section>
  </main>
${buildFooter(t, true)}
</body>
</html>`;
}

for (const key of ['en', 'ms', 'ar']) {
  const t = locales[key];
  await fs.writeFile(t.file, buildMainPage(t), 'utf8');
  await fs.writeFile(t.privacyFile, buildPrivacyPage(t), 'utf8');
  console.log('Generated', t.file, 'and', t.privacyFile);
}

// Legacy en.html redirect alias to default English root (/)
const enAlias = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>TGPU Legacy | Redirecting to English Homepage</title>
  <link rel="canonical" href="https://tgpu.my/">
  <meta http-equiv="refresh" content="0; url=./">
  <script>location.replace('./');</script>
</head>
<body>
  <p>TGPU Legacy (English) is now served as the default homepage at <a href="./">https://tgpu.my/</a>.</p>
</body>
</html>
`;
await fs.writeFile('en.html', enAlias, 'utf8');
console.log('Updated en.html canonical redirect to /');
