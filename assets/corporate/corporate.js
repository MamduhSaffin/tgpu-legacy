document.documentElement.classList.add('js-ready');

(() => {
  // 1. Legacy bookmark redirect compatibility
  const classSectionBookmarks = new Set(['#register', '#pricing', '#faq', '#international', '#ssm']);
  function openClassSection() {
    const classesTarget = document.body.dataset.classes;
    if (classesTarget && classSectionBookmarks.has(location.hash)) {
      location.replace(classesTarget + location.hash);
    }
  }
  openClassSection();
  window.addEventListener('hashchange', openClassSection);

  // 2. Scroll progress bar
  const progressBar = document.getElementById('scroll-progress');
  let ticking = false;
  function updateProgress() {
    ticking = false;
    if (!progressBar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, scrollTop / maxScroll)) : 0;
    progressBar.style.transform = `scaleX(${ratio})`;
  }
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateProgress);
      }
    },
    { passive: true }
  );
  updateProgress();

  // 3. Scroll-triggered reveals
  const revealItems = document.querySelectorAll('.reveal');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealItems.forEach((el) => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealItems.forEach((el) => observer.observe(el));
  }

  // 4. Active navigation scroll spy
  const navLinks = Array.from(document.querySelectorAll('.primary-nav a[href^="#"]'));
  const observedSections = navLinks
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (observedSections.length && 'IntersectionObserver' in window) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            navLinks.forEach((link) => {
              link.setAttribute('aria-current', link.getAttribute('href') === id ? 'true' : 'false');
            });
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    observedSections.forEach((sec) => spyObserver.observe(sec));
  }

  // 5. Accessible Mobile Drawer
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');

  function setDrawer(open) {
    if (!drawer || !menuBtn) return;
    drawer.setAttribute('data-open', open ? 'true' : 'false');
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
    if (open && drawerClose) {
      drawerClose.focus();
    } else if (!open) {
      menuBtn.focus();
    }
  }

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => setDrawer(true));
    if (drawerClose) drawerClose.addEventListener('click', () => setDrawer(false));
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) setDrawer(false);
    });
    drawer.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', () => setDrawer(false));
    });
  }

  // 6. Portfolio Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  const countEl = document.getElementById('portfolio-count');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;
      filterBtns.forEach((b) => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
      let visible = 0;
      productCards.forEach((card) => {
        const match = cat === 'all' || card.dataset.category === cat;
        card.hidden = !match;
        if (match) visible += 1;
      });
      if (countEl) {
        countEl.textContent = String(visible);
      }
    });
  });

  // 7. Interactive Product Detail Modal
  const modal = document.getElementById('product-modal');
  const modalImg = document.getElementById('modal-img');
  const modalMeta = document.getElementById('modal-meta');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalDomain = document.getElementById('modal-domain');
  const modalLink = document.getElementById('modal-visit');
  const modalClose = document.getElementById('modal-close');
  let lastTrigger = null;

  function openProductModal(trigger) {
    if (!modal) return;
    lastTrigger = trigger;
    const card = trigger.closest('.product-card');
    if (!card) return;
    const img = card.querySelector('.product-thumb img');
    if (modalImg && img) {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    }
    if (modalMeta) modalMeta.textContent = card.dataset.meta || '';
    if (modalTitle) modalTitle.textContent = card.dataset.title || '';
    if (modalDesc) modalDesc.textContent = card.dataset.details || '';
    if (modalDomain) modalDomain.textContent = card.dataset.domain || '';
    if (modalLink) modalLink.href = card.dataset.url || '#';
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    if (modalClose) modalClose.focus();
  }

  function closeProductModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll('.product-detail-btn').forEach((btn) => {
    btn.addEventListener('click', () => openProductModal(btn));
  });

  if (modalClose) modalClose.addEventListener('click', closeProductModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProductModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      if (drawer && drawer.getAttribute('data-open') === 'true') {
        setDrawer(false);
      }
    }
  });

  // 8. Corporate Enquiry Form Validation & Submission
  const form = document.getElementById('corporate-enquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = form.querySelector('#enquiry-name');
      const emailInput = form.querySelector('#enquiry-email');
      const topicInput = form.querySelector('#enquiry-topic');
      const msgInput = form.querySelector('#enquiry-message');
      const feedback = document.getElementById('form-feedback');

      let valid = true;
      form.querySelectorAll('.field-error').forEach((el) => (el.textContent = ''));

      if (!nameInput.value.trim()) {
        valid = false;
        form.querySelector('[data-error-for="enquiry-name"]').textContent = nameInput.dataset.errMsg || 'Required';
      }
      const emailVal = emailInput.value.trim();
      if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        valid = false;
        form.querySelector('[data-error-for="enquiry-email"]').textContent = emailInput.dataset.errMsg || 'Invalid email';
      }
      if (!msgInput.value.trim() || msgInput.value.trim().length < 10) {
        valid = false;
        form.querySelector('[data-error-for="enquiry-message"]').textContent = msgInput.dataset.errMsg || 'Please share brief context';
      }

      if (!valid) return;

      const subject = encodeURIComponent(`[TGPU Legacy] ${topicInput.value} — ${nameInput.value.trim()}`);
      const body = encodeURIComponent(
        `Name: ${nameInput.value.trim()}\nOrganization: ${form.querySelector('#enquiry-org').value.trim() || '-'}\nEmail: ${emailVal}\nTopic: ${topicInput.value}\n\n${msgInput.value.trim()}`
      );
      const mailtoHref = `mailto:mamduh@tgpu.my?subject=${subject}&body=${body}`;
      const emailLaunch = document.getElementById('feedback-mailto');
      if (emailLaunch) emailLaunch.href = mailtoHref;
      if (feedback) {
        feedback.hidden = false;
        feedback.focus();
      }
    });
  }
})();
