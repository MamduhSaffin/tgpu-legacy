(() => {
  const isLegacyHome = ['/', '/index.html', '/en.html', '/ar.html'].includes(location.pathname) || /\/(index|en|ar)\.html$/.test(location.pathname);

  const currentLanguage = () => {
    if (/\/ar\.html$/.test(location.pathname)) return 'ar';
    if (/\/en\.html$/.test(location.pathname)) return 'en';
    return 'ms';
  };

  const applyOfficialBrand = () => {
    if (!isLegacyHome) return;

    document.title = 'TGPU Legacy | Tok Guru Pulau Ubi';

    if (!document.getElementById('tgpu-website-schema')) {
      const schema = document.createElement('script');
      schema.id = 'tgpu-website-schema';
      schema.type = 'application/ld+json';
      schema.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'TGPU Legacy',
        alternateName: 'Tok Guru Pulau Ubi Legacy',
        url: 'https://tgpu.my/',
        inLanguage: ['ms-MY','en','ar'],
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://tgpu.my/search/?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      });
      document.head.appendChild(schema);
    }
    document.querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"]').forEach(link => {
      link.href = 'assets/tgpu-official.svg?v=20260913-mainbrand';
    });

    if (!document.getElementById('tgpu-official-brand-style')) {
      const style = document.createElement('style');
      style.id = 'tgpu-official-brand-style';
      style.textContent = `
        .site-header .brand.tgpu-official-brand,
        footer .footer-brand.tgpu-official-brand {
          display:flex !important;
          align-items:center;
          gap:10px;
        }
        .tgpu-official-emblem {
          width:62px;
          height:62px;
          flex:0 0 62px;
          object-fit:contain;
          object-position:center;
          border-radius:0;
          background:transparent;
          box-shadow:none;
        }
        footer .tgpu-official-emblem {
          width:68px;
          height:68px;
          flex-basis:68px;
        }
        @media (max-width:700px) {
          .site-header .brand.tgpu-official-brand { gap:7px; }
          .site-header .tgpu-official-emblem {
            width:52px;
            height:52px;
            flex-basis:52px;
          }
          .site-header .brand-name { font-size:24px; }
          .site-header .brand-name small {
            font-size:11px;
            letter-spacing:1px;
            margin-top:4px;
          }
          footer .tgpu-official-emblem {
            width:58px;
            height:58px;
            flex-basis:58px;
          }
        }
      `;
      document.head.appendChild(style);
    }

    const attach = brand => {
      if (!brand) return;
      const existing = brand.querySelector('.tgpu-official-emblem');
      if (existing) existing.remove();

      const emblem = document.createElement('img');
      emblem.className = 'tgpu-official-emblem';
      emblem.src = 'assets/tgpu-official.svg?v=20260913-mainbrand';
      emblem.alt = 'TGPU Legacy — Tok Guru Pulau Ubi';
      emblem.width = 900;
      emblem.height = 900;
      brand.prepend(emblem);
      brand.classList.add('tgpu-official-brand');
    };

    attach(document.querySelector('.site-header .brand'));
    attach(document.querySelector('footer .footer-brand'));
  };

  const injectEcosystem = () => {
    if (!isLegacyHome || document.getElementById('tgpu-ecosystem')) return;
    const footer = document.querySelector('footer');
    if (!footer) return;

    const lang = currentLanguage();
    const copy = {
      ms: {
        eyebrow: 'EKOSISTEM TGPU',
        title: 'Satu perjalanan, beberapa inisiatif yang saling berkait.',
        intro: 'TGPU menghimpunkan warisan keluarga, pendidikan, kesejahteraan dan inisiatif perdagangan serta perniagaan rentas sempadan. Setiap platform mempunyai fungsi tersendiri, tetapi semuanya lahir daripada perjalanan TGPU yang sama.',
        visit: 'Terokai',
        cards: [
          ['TGPU Legacy', 'Warisan Tok Guru Pulau Ubi, keluarga dan khidmat masyarakat.', 'index.html', 'WARISAN'],
          ['TGPU Academy', 'Al-Quran, bahasa Arab, pendidikan Islam dan sumber pembelajaran.', 'academy/', 'PENDIDIKAN'],
          ['TGPU Naturals', 'Inisiatif produk kesejahteraan semula jadi keluarga TGPU.', 'wellness/?lang=ms', 'KESEJAHTERAAN'],
          ['TGPU Gulf Advisory & Trade', 'Malaysia ↔ Saudi/GCC untuk kemasukan pasaran, sourcing, pemadanan pembeli-pembekal, fasilitasi perdagangan dan pembangunan perniagaan.', 'gulf/ms.html', 'PERNIAGAAN'],
          ['GCC Market Entry', 'Panduan dan sumber praktikal untuk syarikat yang meneroka pasaran Saudi dan GCC.', 'https://gccmarketentry.me/', 'SUMBER']
        ]
      },
      en: {
        eyebrow: 'THE TGPU ECOSYSTEM',
        title: 'One journey, several connected initiatives.',
        intro: 'TGPU brings together family legacy, education, wellness and cross-border trade and business initiatives. Each platform has its own purpose while remaining connected through the wider TGPU journey.',
        visit: 'Explore',
        cards: [
          ['TGPU Legacy', 'The Tok Guru Pulau Ubi family legacy, community and wider TGPU story.', 'en.html', 'LEGACY'],
          ['TGPU Academy', 'Quran, Arabic, Islamic learning and educational resources.', 'academy/en.html', 'EDUCATION'],
          ['TGPU Naturals', 'The TGPU family’s natural-wellness product initiative.', 'wellness/?lang=en', 'WELLNESS'],
          ['TGPU Gulf Advisory & Trade', 'Malaysia ↔ Saudi/GCC market entry, buyer-supplier sourcing, trade facilitation and cross-border business development.', 'gulf/', 'BUSINESS'],
          ['GCC Market Entry', 'Practical guides and resources for companies exploring Saudi and GCC markets.', 'https://gccmarketentry.me/', 'RESOURCE']
        ]
      },
      ar: {
        eyebrow: 'منظومة TGPU',
        title: 'مسيرة واحدة، ومبادرات مترابطة.',
        intro: 'تجمع TGPU بين إرث العائلة والتعليم والعافية ومبادرات التجارة والأعمال العابرة للحدود. لكل منصة دورها الخاص، مع بقائها جزءاً من المسيرة الأوسع لـ TGPU.',
        visit: 'استكشف',
        cards: [
          ['TGPU Legacy', 'إرث Tok Guru Pulau Ubi والعائلة وخدمة المجتمع.', 'ar.html', 'الإرث'],
          ['TGPU Academy', 'القرآن واللغة العربية والتربية الإسلامية والموارد التعليمية.', 'academy/ar.html', 'التعليم'],
          ['TGPU Naturals', 'مبادرة عائلية لمنتجات العافية الطبيعية.', 'wellness/?lang=ar', 'العافية'],
          ['TGPU Gulf Advisory & Trade', 'استشارات وتسهيل التجارة بين ماليزيا والسعودية والخليج، بما يشمل دخول السوق وربط المشترين بالموردين وتطوير الأعمال.', 'gulf/ar.html', 'الأعمال'],
          ['GCC Market Entry', 'أدلة وموارد عملية للشركات التي تستكشف السوق السعودي وأسواق الخليج.', 'https://gccmarketentry.me/', 'المعرفة']
        ]
      }
    }[lang];

    if (!document.getElementById('tgpu-ecosystem-style')) {
      const style = document.createElement('style');
      style.id = 'tgpu-ecosystem-style';
      style.textContent = `
        .tgpu-ecosystem{padding:76px 0;background:#f7f3e9;border-top:1px solid rgba(18,59,44,.10);border-bottom:1px solid rgba(18,59,44,.10)}
        .tgpu-ecosystem .eco-head{max-width:760px;margin-bottom:32px}
        .tgpu-ecosystem .eco-kicker{margin:0 0 10px;color:#9b7639;font-size:.76rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase}
        .tgpu-ecosystem h2{margin:0;color:#123b2c;font-family:Georgia,'Times New Roman',serif;font-size:clamp(2rem,4vw,3.4rem);line-height:1.08}
        .tgpu-ecosystem .eco-intro{margin:16px 0 0;color:#5b675f;font-size:1.05rem;line-height:1.75}
        .tgpu-ecosystem .eco-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
        .tgpu-ecosystem .eco-card{display:flex;min-height:220px;flex-direction:column;padding:24px;border:1px solid rgba(18,59,44,.13);border-radius:20px;background:#fff;box-shadow:0 12px 34px rgba(18,59,44,.06);transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease}
        .tgpu-ecosystem .eco-card:hover{transform:translateY(-3px);border-color:rgba(155,118,57,.5);box-shadow:0 18px 42px rgba(18,59,44,.10)}
        .tgpu-ecosystem .eco-tag{color:#9b7639;font-size:.7rem;font-weight:800;letter-spacing:.13em;text-transform:uppercase}
        .tgpu-ecosystem .eco-card h3{margin:10px 0 8px;color:#123b2c;font-size:1.22rem}
        .tgpu-ecosystem .eco-card p{margin:0 0 20px;color:#637068;line-height:1.65}
        .tgpu-ecosystem .eco-link{margin-top:auto;color:#123b2c;font-weight:800}
        .tgpu-ecosystem[dir='rtl'] .eco-head,.tgpu-ecosystem[dir='rtl'] .eco-card{text-align:right}
        @media(max-width:900px){.tgpu-ecosystem .eco-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:620px){.tgpu-ecosystem{padding:58px 0}.tgpu-ecosystem .eco-grid{grid-template-columns:1fr}.tgpu-ecosystem .eco-card{min-height:0}}
      `;
      document.head.appendChild(style);
    }

    const section = document.createElement('section');
    section.id = 'tgpu-ecosystem';
    section.className = 'tgpu-ecosystem';
    if (lang === 'ar') section.setAttribute('dir', 'rtl');
    section.innerHTML = `
      <div class="wrap">
        <div class="eco-head">
          <p class="eco-kicker">${copy.eyebrow}</p>
          <h2>${copy.title}</h2>
          <p class="eco-intro">${copy.intro}</p>
        </div>
        <div class="eco-grid">
          ${copy.cards.map(([name, description, href, tag]) => {
            const external = /^https?:\/\//.test(href);
            return `<a class="eco-card" href="${href}"${external ? ' target="_blank" rel="noopener"' : ''}><span class="eco-tag">${tag}</span><h3>${name}</h3><p>${description}</p><span class="eco-link">${copy.visit} →</span></a>`;
          }).join('')}
        </div>
      </div>`;

    footer.parentNode.insertBefore(section, footer);
  };

  const injectSupportEntry = () => {
    if (!isLegacyHome) return;
    const lang = currentLanguage();
    const copy = {
      ms:{nav:'Sokong TGPU',eyebrow:'SOKONG • CADANG • BINA BERSAMA',title:'Bantu TGPU terus memberi manfaat.',text:'Sumbangan sukarela boleh dibuat terus kepada Surau Tok Guru Pulau Ubi melalui DuitNow QR Maybank/MAE. Anda juga boleh menghantar cadangan, pembetulan atau laporan pautan rosak supaya TGPU terus berkembang dengan baik.',support:'Sokong TGPU',suggest:'Beri cadangan'},
      en:{nav:'Support TGPU',eyebrow:'SUPPORT • SUGGEST • BUILD TOGETHER',title:'Help TGPU keep serving the community.',text:'Voluntary contributions can be made directly to Surau Tok Guru Pulau Ubi through its DuitNow QR. You can also send suggestions, corrections or broken-link reports to help us improve.',support:'Support TGPU',suggest:'Send a suggestion'},
      ar:{nav:'ادعم TGPU',eyebrow:'ادعم • اقترح • ابنِ معنا',title:'ساعد TGPU على مواصلة النفع.',text:'يمكن تقديم المساهمات التطوعية مباشرة إلى Surau Tok Guru Pulau Ubi عبر رمز DuitNow QR، كما نرحب بالمقترحات والتصحيحات والإبلاغ عن الروابط المعطلة.',support:'ادعم TGPU',suggest:'أرسل اقتراحاً'}
    }[lang];

    const nav = document.querySelector('#main-nav');
    if (nav && !nav.querySelector('a[href="support/"]')) {
      const a = document.createElement('a');
      a.href = 'support/';
      a.textContent = copy.nav;
      nav.appendChild(a);
    }

    const quick = document.querySelector('footer .footer-nav div');
    if (quick && !quick.querySelector('a[href="support/"]')) {
      const supportLink = document.createElement('a');
      supportLink.href = 'support/';
      supportLink.textContent = copy.support;
      quick.appendChild(supportLink);
    }

    if (!document.getElementById('tgpu-support-style')) {
      const style = document.createElement('style');
      style.id = 'tgpu-support-style';
      style.textContent = `
        .tgpu-support-invite{padding:70px 0;background:linear-gradient(135deg,#0b2819,#14532d);color:#fff}
        .tgpu-support-card{display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center;padding:clamp(1.4rem,4vw,2.4rem);border:1px solid rgba(255,255,255,.14);border-radius:28px;background:rgba(255,255,255,.07);box-shadow:0 18px 50px rgba(0,0,0,.12)}
        .tgpu-support-kicker{margin:0 0 8px;color:#ecd69c;font-size:.72rem;font-weight:800;letter-spacing:.13em}
        .tgpu-support-card h2{margin:0;font-family:Georgia,'Times New Roman',serif;font-size:clamp(2rem,4vw,3.2rem);line-height:1.08;color:#fff}
        .tgpu-support-card p{max-width:760px;margin:14px 0 0;color:rgba(255,255,255,.76);line-height:1.7}
        .tgpu-support-actions{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}
        .tgpu-support-actions a{display:inline-flex;align-items:center;justify-content:center;padding:12px 17px;border-radius:999px;font-weight:800;text-decoration:none}
        .tgpu-support-primary{background:#ecd69c;color:#173426}.tgpu-support-secondary{border:1px solid rgba(255,255,255,.34);color:#fff}
        .tgpu-support-invite[dir='rtl'] .tgpu-support-card{text-align:right}
        @media(max-width:780px){.tgpu-support-card{grid-template-columns:1fr}.tgpu-support-actions{justify-content:flex-start}}
      `;
      document.head.appendChild(style);
    }

    if (!document.getElementById('tgpu-support-invite')) {
      const footer = document.querySelector('footer');
      if (!footer) return;
      const section = document.createElement('section');
      section.id = 'tgpu-support-invite';
      section.className = 'tgpu-support-invite';
      if (lang === 'ar') section.setAttribute('dir','rtl');
      section.innerHTML = `<div class="wrap"><div class="tgpu-support-card"><div><p class="tgpu-support-kicker">${copy.eyebrow}</p><h2>${copy.title}</h2><p>${copy.text}</p></div><div class="tgpu-support-actions"><a class="tgpu-support-primary" href="support/">${copy.support} →</a><a class="tgpu-support-secondary" href="support/#suggestion">${copy.suggest} →</a></div></div></div>`;
      const ecosystem = document.getElementById('tgpu-ecosystem');
      if (ecosystem) ecosystem.parentNode.insertBefore(section, ecosystem);
      else footer.parentNode.insertBefore(section, footer);
    }
  };

  const injectSearchEntry = () => {
    if (!isLegacyHome) return;
    const lang = currentLanguage();
    const copy = {
      ms:{nav:'Cari',label:'Cari di seluruh TGPU'},
      en:{nav:'Search',label:'Search across TGPU'},
      ar:{nav:'بحث',label:'البحث في TGPU'}
    }[lang];

    if (!document.getElementById('tgpu-search-entry-style')) {
      const style = document.createElement('style');
      style.id = 'tgpu-search-entry-style';
      style.textContent = `
        .main-nav .tgpu-search-link{display:inline-flex;align-items:center;gap:6px;padding:7px 11px;border:1px solid rgba(236,214,156,.45);border-radius:999px;color:#ecd69c!important}
        .main-nav .tgpu-search-link:hover{background:#ecd69c;color:#173426!important}
      `;
      document.head.appendChild(style);
    }

    const nav = document.querySelector('#main-nav');
    if (nav && !nav.querySelector('a[href="search/"]')) {
      const a = document.createElement('a');
      a.href = 'search/';
      a.className = 'tgpu-search-link';
      a.setAttribute('aria-label', copy.label);
      a.textContent = `⌕ ${copy.nav}`;
      nav.insertBefore(a, nav.firstChild);
    }

    const quick = document.querySelector('footer .footer-nav div');
    if (quick && !quick.querySelector('a[href="search/"]')) {
      const a = document.createElement('a');
      a.href = 'search/';
      a.textContent = copy.nav;
      quick.appendChild(a);
    }
  };

  const runEnhancements = () => {
    applyOfficialBrand();
    injectSearchEntry();
    injectEcosystem();
    injectSupportEntry();
  };

  const core = document.createElement('script');
  core.src = 'assets/legacy/site-core.js?v=20260913-academy';
  core.defer = true;
  core.addEventListener('load', runEnhancements);
  document.head.appendChild(core);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runEnhancements, { once: true });
  } else {
    runEnhancements();
  }
})();