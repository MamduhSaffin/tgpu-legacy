(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  const close = () => {
    if (!nav || !toggle) return;
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        close();
        toggle.focus();
      }
    });
    document.addEventListener('click', e => {
      if (!e.target.closest('.nav-shell')) close();
    });
    window.matchMedia('(min-width:701px)').addEventListener('change', close);
  }

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const isLegacyHome = ['index.html', 'en.html', 'ar.html'].includes(page);
  const hero = isLegacyHome ? document.querySelector('.hero') : null;
  const about = isLegacyHome ? document.querySelector('.about') : null;
  const assetVersion = '20260913-academy';

  const getAcademyCopy = () => {
    const lang = (document.documentElement.lang || 'ms').toLowerCase();
    if (lang.startsWith('ar')) {
      return {
        academy: 'الأكاديمية',
        academyHref: 'academy/ar.html',
        learningHub: 'مركز التعلّم',
        quranCta: 'TGPU Quran',
        quranTitle: 'TGPU Quran',
        learningHubTitle: 'TGPU Learning Hub'
      };
    }
    if (lang.startsWith('en')) {
      return {
        academy: 'Academy',
        academyHref: 'academy/en.html',
        learningHub: 'Learning Hub',
        quranCta: 'Explore TGPU Quran',
        quranTitle: 'TGPU Quran',
        learningHubTitle: 'TGPU Learning Hub'
      };
    }
    return {
      academy: 'Academy',
      academyHref: 'academy/',
      learningHub: 'Learning Hub',
      quranCta: 'Terokai TGPU Quran',
      quranTitle: 'TGPU Quran',
      learningHubTitle: 'TGPU Learning Hub'
    };
  };

  const enhanceAcademyHome = () => {
    if (!isLegacyHome) return;
    const copy = getAcademyCopy();

    if (nav) {
      const links = [...nav.querySelectorAll('a')];
      const classesLink = links.find(a => /classes(?:-en|-ar)?\.html/.test(a.getAttribute('href') || ''));
      const learnLink = links.find(a => /learn(?:-en|-ar)?\.html/.test(a.getAttribute('href') || ''));
      if (classesLink) {
        classesLink.href = copy.academyHref;
        classesLink.textContent = copy.academy;
      }
      if (learnLink) {
        learnLink.href = 'academy/learning-hub/';
        learnLink.textContent = copy.learningHub;
      }
    }

    const heroAcademyCta = document.querySelector('.hero-actions a.button-outline');
    if (heroAcademyCta) {
      heroAcademyCta.href = 'academy/quran/';
      heroAcademyCta.textContent = copy.quranCta;
    }

    const pillars = [...document.querySelectorAll('.pillar-card')];
    if (pillars[0]) pillars[0].href = 'academy/quran/';
    if (pillars[1]) pillars[1].href = 'academy/arabic/';
    if (pillars[2]) pillars[2].href = 'academy/islamic-learning/';

    const programCards = [...document.querySelectorAll('.program-card')];
    const retargetCard = (card, href, title) => {
      if (!card) return;
      const imageLink = card.querySelector('a.program-image');
      const textLink = card.querySelector('.program-copy > a');
      const heading = card.querySelector('h3');
      if (imageLink) imageLink.href = href;
      if (textLink) textLink.href = href;
      if (heading) heading.textContent = title;
    };
    retargetCard(programCards[0], 'academy/quran/', copy.quranTitle);
    retargetCard(programCards[1], 'academy/learning-hub/', copy.learningHubTitle);
  };

  enhanceAcademyHome();

  const loadDataImage = async prefix => {
    const parts = await Promise.all(
      [1, 2, 3, 4].map(async part => {
        const response = await fetch(
          `assets/legacy/image-data/${prefix}-${part}.txt?v=${assetVersion}`,
          { cache: 'force-cache' }
        );
        if (!response.ok) throw new Error(`Unable to load ${prefix}-${part}`);
        return (await response.text()).trim();
      })
    );
    return `data:image/webp;base64,${parts.join('')}`;
  };

  const getCopy = () => {
    const lang = (document.documentElement.lang || 'ms').toLowerCase();

    if (lang.startsWith('ar')) {
      return {
        surauEyebrow: 'جذور TGPU',
        surauTitle: 'هنا تحيا هذه الرسالة',
        surauText: 'يمثّل سوراو توك غورو بولاو أوبي جذور الأسرة والمجتمع، ومكاناً يجتمع فيه الإيمان والعلم وخدمة الناس. وهو شاهد على أن رسالةً ذات معنى يمكن أن تبدأ من مجتمع صغير ثم يمتد أثرها إلى الأجيال القادمة.',
        surauName: 'سوراو توك غورو بولاو أوبي',
        surauPlace: 'كامبونغ تلاڬا لاناس · ڤڠكلن كوبور · تومڤت، كلنتن',
        surauLink: 'عرض أنشطة المصلى',
        surauAlt: 'سوراو توك غورو بولاو أوبي في كامبونغ تلاڬا لاناس، ڤڠكلن كوبور، تومڤت، كلنتن.',
        founderEyebrow: 'الإرث العائلي',
        founderTitle: 'توك غورو بولاو أوبي',
        founderText: 'ترتبط قصة TGPU ارتباطاً وثيقاً بجدّنا الراحل توك غورو بولاو أوبي، وبما مثّلته حياته من علم وتربية إسلامية وتواضع وخدمة للمجتمع. لا نريد أن يبقى هذا الإرث مجرد ذكرى، بل نسعى إلى مواصلة قيمه بما يخدم الجيل الجديد.',
        founderQuote: 'لا نريد أن نحفظ ذكراه فحسب، بل نريد أن نواصل الرسالة والقيم التي تركها لنا.',
        founderCaption: 'الراحل توك غورو بولاو أوبي',
        founderAlt: 'الصورة العائلية الأصلية للراحل توك غورو بولاو أوبي.'
      };
    }

    if (lang.startsWith('en')) {
      return {
        surauEyebrow: 'THE ROOTS OF TGPU',
        surauTitle: 'Where the legacy continues',
        surauText: 'Surau Tok Guru Pulau Ubi represents our family roots, our community and a place where faith, learning and service come together. It is a reminder that a meaningful mission can begin in a small community and continue through the generations that follow.',
        surauName: 'Surau Tok Guru Pulau Ubi',
        surauPlace: 'Kg Telaga Lanas · Pengkalan Kubor · Tumpat, Kelantan',
        surauLink: 'View surau activities',
        surauAlt: 'Surau Tok Guru Pulau Ubi in Kampung Telaga Lanas, Pengkalan Kubor, Tumpat, Kelantan.',
        founderEyebrow: 'A FAMILY LEGACY',
        founderTitle: 'Tok Guru Pulau Ubi',
        founderText: 'The story of TGPU is closely connected to our late grandfather, Tok Guru Pulau Ubi, and the values represented by his life: knowledge, Islamic education, humility and service to the community. We do not want this legacy to remain only as a memory; we hope to carry its values forward for a new generation.',
        founderQuote: 'We do not seek merely to preserve his memory. We hope to continue the spirit and values he left to us.',
        founderCaption: 'The late Tok Guru Pulau Ubi',
        founderAlt: 'Original family portrait of the late Tok Guru Pulau Ubi.'
      };
    }

    return {
      surauEyebrow: 'AKAR TGPU',
      surauTitle: 'Di sinilah legasi terus hidup',
      surauText: 'Surau Tok Guru Pulau Ubi melambangkan akar keluarga, masyarakat dan sebuah ruang yang menghimpunkan iman, ilmu serta khidmat. Ia mengingatkan kami bahawa sebuah misi yang bermakna boleh bermula daripada komuniti kecil, kemudian diteruskan kepada generasi yang seterusnya.',
      surauName: 'Surau Tok Guru Pulau Ubi',
      surauPlace: 'Kg Telaga Lanas · Pengkalan Kubor · Tumpat, Kelantan',
      surauLink: 'Lihat aktiviti surau',
      surauAlt: 'Surau Tok Guru Pulau Ubi di Kampung Telaga Lanas, Pengkalan Kubor, Tumpat, Kelantan.',
      founderEyebrow: 'SEBUAH LEGASI KELUARGA',
      founderTitle: 'Tok Guru Pulau Ubi',
      founderText: 'Kisah TGPU berkait rapat dengan arwah datuk kami, Tok Guru Pulau Ubi, serta nilai yang dibawa melalui kehidupan beliau: ilmu, pendidikan Islam, kerendahan hati dan khidmat kepada masyarakat. Kami tidak mahu legasi ini tinggal sebagai kenangan semata-mata; kami mahu meneruskan nilainya untuk generasi baharu.',
      founderQuote: 'Kami bukan sekadar mahu mengenang beliau. Kami mahu meneruskan semangat dan nilai yang ditinggalkan.',
      founderCaption: 'Allahyarham Tok Guru Pulau Ubi',
      founderAlt: 'Potret keluarga asal Allahyarham Tok Guru Pulau Ubi.'
    };
  };

  const buildLegacy = ([surauImage, grandfatherImage]) => {
    if (!hero || !about || document.querySelector('.legacy-showcase')) return;

    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = `assets/legacy/surau-feature.css?v=${assetVersion}`;
    document.head.appendChild(style);

    const copy = getCopy();

    const showcase = document.createElement('section');
    showcase.className = 'legacy-showcase';
    showcase.setAttribute('aria-label', copy.surauName);
    showcase.innerHTML = `
      <div class="wrap legacy-showcase-grid">
        <figure class="surau-portrait">
          <div class="surau-photo-frame">
            <img src="${surauImage}" width="620" height="630" alt="${copy.surauAlt}" loading="eager" decoding="async">
          </div>
          <figcaption>
            <strong>${copy.surauName}</strong>
            <span>${copy.surauPlace}</span>
          </figcaption>
        </figure>
        <div class="surau-story">
          <p class="eyebrow">${copy.surauEyebrow}</p>
          <h2>${copy.surauTitle}</h2>
          <span class="legacy-gold-rule" aria-hidden="true"></span>
          <p>${copy.surauText}</p>
          <a class="legacy-text-link" href="https://omiw.com.my/Web/senarai-aktiviti/" target="_blank" rel="noopener">
            ${copy.surauLink}<span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>`;
    hero.insertAdjacentElement('afterend', showcase);

    const founder = document.createElement('section');
    founder.className = 'legacy-founder';
    founder.innerHTML = `
      <div class="wrap legacy-founder-grid">
        <figure class="founder-photo">
          <div class="founder-photo-frame">
            <img src="${grandfatherImage}" width="600" height="600" alt="${copy.founderAlt}" loading="lazy" decoding="async">
          </div>
          <figcaption>${copy.founderCaption}</figcaption>
        </figure>
        <div class="founder-copy">
          <p class="eyebrow">${copy.founderEyebrow}</p>
          <h2>${copy.founderTitle}</h2>
          <span class="legacy-gold-rule" aria-hidden="true"></span>
          <p>${copy.founderText}</p>
          <blockquote>${copy.founderQuote}</blockquote>
        </div>
      </div>`;
    showcase.insertAdjacentElement('afterend', founder);
  };

  if (isLegacyHome) {
    Promise.all([
      loadDataImage('surau'),
      loadDataImage('grandfather')
    ]).then(buildLegacy).catch(error => {
      console.error('TGPU Legacy image loading failed:', error);
    });
  }

  const routeHash = () => {
    if (
      document.body.dataset.classes &&
      ['#register', '#pricing', '#faq', '#international', '#ssm'].includes(location.hash)
    ) {
      location.replace(document.body.dataset.classes + location.hash);
    }
  };
  routeHash();
  window.addEventListener('hashchange', routeHash);
})();
