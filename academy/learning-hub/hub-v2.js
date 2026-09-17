(() => {
  const qs = (s, root = document) => root.querySelector(s);
  const qsa = (s, root = document) => [...root.querySelectorAll(s)];
  const AUDIT_DATE = '18 September 2026';

  function hardenExternalLinks() {
    qsa('a[href^="http"]').forEach(link => {
      try {
        const url = new URL(link.href);
        if (url.hostname !== location.hostname) {
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
        }
      } catch (_) {}
    });
  }

  function injectVerifiedHubStyles() {
    if (qs('#verified-hub-styles')) return;
    const style = document.createElement('style');
    style.id = 'verified-hub-styles';
    style.textContent = `
      .verified-standard{display:flex;flex-wrap:wrap;gap:.55rem;align-items:center;margin:1rem 0 1.4rem;padding:.85rem 1rem;border:1px solid rgba(19,62,51,.14);background:#fff;border-radius:14px;color:#40564e;font-size:.88rem}
      .verified-standard strong{color:#153d31}.verified-pill{display:inline-flex;align-items:center;gap:.35rem;padding:.28rem .58rem;border-radius:999px;background:#edf6f2;color:#174c39;font-weight:750}.verified-pill.secondary{background:#f7f1e4;color:#6d531c}.verified-pill.open{background:#eef2f5;color:#43525d}
      .directory-groups{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}.directory-group{background:#fff;border:1px solid rgba(19,62,51,.14);border-radius:20px;padding:1.2rem;box-shadow:0 6px 18px rgba(21,56,45,.05)}.directory-group-head{display:flex;gap:.75rem;align-items:flex-start;margin-bottom:.85rem}.directory-group-icon{font-size:1.45rem;line-height:1}.directory-group h3{margin:0 0 .25rem}.directory-group-head p{margin:0;color:#52645d;font-size:.9rem;line-height:1.5}.directory-links{display:grid;gap:.55rem}.directory-link{display:flex;justify-content:space-between;gap:.9rem;align-items:center;padding:.78rem .86rem;border-radius:12px;background:#f6f9f8;color:inherit;text-decoration:none;border:1px solid transparent}.directory-link:hover{border-color:rgba(19,62,51,.18);background:#f0f6f3}.directory-link b{display:block;font-size:.94rem}.directory-link small{display:block;color:#64746e;margin-top:.12rem;line-height:1.35}.directory-link span:last-child{color:#8b6a26;font-weight:800}.audit-note{margin:.9rem 0 0;color:#52645d;font-size:.88rem;line-height:1.55}.picks-audit{margin-top:1rem;padding:.85rem 1rem;border-radius:13px;background:#f7faf8;color:#52645d;font-size:.9rem;line-height:1.55;border:1px solid rgba(19,62,51,.1)}
      @media(max-width:760px){.directory-groups{grid-template-columns:1fr}.verified-standard{align-items:flex-start}.directory-link{align-items:flex-start}}
    `;
    document.head.appendChild(style);
  }

  function organizeMalaysiaHub() {
    const directory = qs('.malaysia-directory');
    const grid = qs('.directory-grid', directory || document);
    const intro = qs('.directory-intro', directory || document);
    if (!directory || !grid || !intro) return;

    const existingLegend = qs('.verified-standard', directory);
    if (!existingLegend) {
      const legend = document.createElement('div');
      legend.className = 'verified-standard';
      legend.setAttribute('aria-label', 'Standard semakan pautan TGPU');
      legend.innerHTML = `<strong>Standard pautan TGPU</strong><span class="verified-pill">✓ Rasmi / institusi</span><span class="verified-pill secondary">✓ Sumber pendidikan established</span><span class="verified-pill open">Rujukan terbuka dilabel jelas</span><span>Disemak ${AUDIT_DATE}</span>`;
      intro.insertAdjacentElement('afterend', legend);
    }

    grid.className = 'directory-groups';
    grid.innerHTML = `
      <section class="directory-group" aria-labelledby="group-study">
        <div class="directory-group-head"><span class="directory-group-icon">🎓</span><div><h3 id="group-study">Belajar, Bahasa & Penyelidikan</h3><p>Untuk pelajar, pembaca dan pembelajaran bahasa yang tersusun.</p></div></div>
        <div class="directory-links">
          <a class="directory-link" href="school-scholarship-planner.html"><span><b>Sekolah & Biasiswa</b><small>Portal penajaan dan perancangan pendidikan</small></span><span>→</span></a>
          <a class="directory-link" href="student-library-knowledge.html"><span><b>Perpustakaan Pelajar</b><small>u-Pustaka, OpenStax, OpenLearn & bacaan terbuka</small></span><span>→</span></a>
          <a class="directory-link" href="malaysia-language-exchange.html"><span><b>Bahasa Malaysia Bersama</b><small>Melayu, Mandarin, Tamil, kamus & alat bahasa</small></span><span>→</span></a>
        </div>
      </section>
      <section class="directory-group" aria-labelledby="group-life">
        <div class="directory-group-head"><span class="directory-group-icon">🧭</span><div><h3 id="group-life">Kehidupan & Kerjaya Malaysia</h3><p>Perkhidmatan penting dan laluan kerjaya dengan sumber rasmi.</p></div></div>
        <div class="directory-links">
          <a class="directory-link" href="malaysia-essentials.html"><span><b>Malaysia Essentials</b><small>Bantuan, kesihatan, PTPTN, KWSP & perkhidmatan awam</small></span><span>→</span></a>
          <a class="directory-link" href="malaysia-jobs-career.html"><span><b>Kerja & Kerjaya</b><small>MYFutureJobs, SPA9 & PERKESO</small></span><span>→</span></a>
        </div>
      </section>
      <section class="directory-group" aria-labelledby="group-culture">
        <div class="directory-group-head"><span class="directory-group-icon">🇲🇾</span><div><h3 id="group-culture">Budaya, Ilmu & Warisan</h3><p>Kenali Malaysia melalui negeri, tokoh, makanan, sumber alam dan karya.</p></div></div>
        <div class="directory-links">
          <a class="directory-link" href="malaysia-heritage-by-state.html"><span><b>Warisan Mengikut Negeri</b><small>Makanan, pakaian, sukan & identiti negeri</small></span><span>→</span></a>
          <a class="directory-link" href="malaysia-food-resources-herbs.html"><span><b>Makanan, Sumber & Herba</b><small>Sawit, hasil tempatan dan penggunaan herba secara berhati-hati</small></span><span>→</span></a>
          <a class="directory-link" href="ulama-sasterawan-malaysia.html"><span><b>Ulama & Sasterawan</b><small>Tokoh ilmu, bahasa dan sastera Malaysia</small></span><span>→</span></a>
          <a class="directory-link" href="malaysia-classic-stories.html"><span><b>Cerita Malaysia Zaman Dulu</b><small>P. Ramlee, arkib, filem dan memori keluarga</small></span><span>→</span></a>
          <a class="directory-link" href="interactive-nasyid.html"><span><b>Nasyid Interaktif</b><small>Sumber artis rasmi + aktiviti bahasa dan nilai</small></span><span>→</span></a>
        </div>
      </section>
      <section class="directory-group" aria-labelledby="group-reference">
        <div class="directory-group-head"><span class="directory-group-icon">☪️</span><div><h3 id="group-reference">Islam, Perjalanan & Teroka</h3><p>Rujukan agama rasmi dan panduan perjalanan yang mudah disemak.</p></div></div>
        <div class="directory-links">
          <a class="directory-link" href="fatwa-malaysia.html"><span><b>Rujukan Fatwa Malaysia</b><small>JAKIM dan jabatan mufti negeri</small></span><span>→</span></a>
          <a class="directory-link" href="live-haramain-gulf-info.html"><span><b>Live Haramain & Gulf</b><small>Saluran SBA, Nusuk, SPA, WAM & portal rasmi</small></span><span>→</span></a>
          <a class="directory-link" href="malaysia-holiday-by-state.html"><span><b>Cuti-Cuti Malaysia</b><small>Destinasi mengikut negeri & Tourism Malaysia</small></span><span>→</span></a>
          <a class="directory-link" href="malaysia-cafes-popular-places.html"><span><b>Kafe & Tempat Popular</b><small>Panduan kawasan—semak premis terkini sebelum pergi</small></span><span>→</span></a>
        </div>
      </section>`;

    const note = qs('.directory-note', directory);
    if (note) note.innerHTML = `<strong>Prinsip TGPU:</strong> pautan kerajaan, universiti dan organisasi asal diberi keutamaan. Rujukan terbuka atau alat pihak ketiga dilabel mengikut fungsi dan tidak dipersembahkan sebagai sumber rasmi.`;
  }

  function refineFreeLearningPicks() {
    const section = qs('#free-learning-picks');
    if (!section) return;
    const intro = qs('.section-intro', section);
    const grid = qs('.picks-grid', section);
    if (intro) {
      intro.innerHTML = `<span class="eyebrow dark">VERIFIED LEARNING PICKS • TGPU</span><h2 id="picks-title" lang="en">Free Learning Picks</h2><p>Hanya sumber yang dapat dikenal pasti pengendalinya dan disemak semula dimasukkan di sini. Keutamaan diberi kepada universiti, agensi kerajaan, badan profesional dan organisasi pendidikan established.</p>`;
    }
    if (grid) {
      grid.innerHTML = `
        <article class="pick-card"><span class="pick-category">Academic & Research</span><h3>MIT OpenCourseWare</h3><div class="pick-badges"><span class="pick-recommended">✓ Official University</span><span class="pick-free">Free</span></div><p>Bahan kursus terbuka daripada Massachusetts Institute of Technology.</p><a class="pick-link" href="https://ocw.mit.edu/">Teroka MIT OpenCourseWare <span aria-hidden="true">↗</span></a></article>
        <article class="pick-card"><span class="pick-category">Computer Science</span><h3>CS50x · Harvard</h3><div class="pick-badges"><span class="pick-recommended">✓ Official University</span><span class="pick-free">Free</span></div><p>Kursus pengenalan sains komputer Harvard dengan kuliah dan latihan penyelesaian masalah.</p><a class="pick-link" href="https://cs50.harvard.edu/x/">Teroka CS50x <span aria-hidden="true">↗</span></a></article>
        <article class="pick-card"><span class="pick-category">Open Learning</span><h3>OpenLearn · The Open University</h3><div class="pick-badges"><span class="pick-recommended">✓ Official University</span><span class="pick-free">Free</span></div><p>Kursus percuma merentas bahasa, sains, masyarakat, teknologi dan kemahiran belajar.</p><a class="pick-link" href="https://www.open.edu/openlearn/">Teroka OpenLearn <span aria-hidden="true">↗</span></a></article>
        <article class="pick-card"><span class="pick-category">Open Textbooks</span><h3>OpenStax · Rice University</h3><div class="pick-badges"><span class="pick-recommended">✓ Rice University</span><span class="pick-free">Free</span></div><p>Buku teks terbuka dan peer-reviewed untuk sekolah menengah dan universiti.</p><a class="pick-link" href="https://openstax.org/">Teroka OpenStax <span aria-hidden="true">↗</span></a></article>
        <article class="pick-card"><span class="pick-category">Bahasa Melayu</span><h3>PRPM · Dewan Bahasa dan Pustaka</h3><div class="pick-badges"><span class="pick-recommended">✓ Official Malaysia</span><span class="pick-free">Free</span></div><p>Rujukan rasmi DBP untuk kamus, istilah, ejaan dan penggunaan Bahasa Melayu.</p><a class="pick-link" href="https://prpm.dbp.gov.my/">Teroka PRPM <span aria-hidden="true">↗</span></a></article>
        <article class="pick-card"><span class="pick-category">Science & Space</span><h3>NASA’s Eyes</h3><div class="pick-badges"><span class="pick-recommended">✓ Official Government</span><span class="pick-free">Free</span></div><p>Visualisasi interaktif Bumi, planet dan misi angkasa berasaskan data NASA.</p><a class="pick-link" href="https://science.nasa.gov/eyes/">Teroka NASA’s Eyes <span aria-hidden="true">↗</span></a></article>
        <article class="pick-card"><span class="pick-category">Emergency Learning</span><h3>ACS Stop the Bleed</h3><div class="pick-badges"><span class="pick-recommended">✓ Professional Body</span><span class="pick-free">Free</span></div><p>Kursus interaktif American College of Surgeons tentang asas mengawal pendarahan teruk.</p><a class="pick-link" href="https://www.stopthebleed.org/get-trained/online-course/">Teroka kursus ACS <span aria-hidden="true">↗</span></a></article>
        <article class="pick-card"><span class="pick-category">Books & Literature</span><h3>Project Gutenberg</h3><div class="pick-badges"><span class="pick-recommended">✓ Established Library</span><span class="pick-free">Free</span></div><p>Koleksi besar karya domain awam untuk bacaan dan pembelajaran.</p><a class="pick-link" href="https://www.gutenberg.org/">Teroka Project Gutenberg <span aria-hidden="true">↗</span></a></article>`;
    }
    const attribution = qs('.picks-attribution', section);
    if (attribution) attribution.remove();
    if (!qs('.picks-audit', section)) {
      const audit = document.createElement('p');
      audit.className = 'picks-audit';
      audit.innerHTML = `<strong>Link audit:</strong> ${AUDIT_DATE}. “Verified” di TGPU bermaksud identiti dan fungsi laman dapat disahkan; ia tidak bermaksud setiap kandungan pihak luar disokong atau dijamin oleh TGPU.`;
      (grid || section).insertAdjacentElement('afterend', audit);
    }
  }

  function refineIslamicPicks() {
    const section = qs('#islamic-arabic-learning');
    if (!section) return;
    const cards = qsa('.pick-card', section);
    cards.forEach(card => {
      const title = qs('h3', card)?.textContent.trim();
      const badges = qs('.pick-badges', card);
      if (!badges) return;
      if (title === 'Quran.com') badges.innerHTML = '<span class="pick-recommended">✓ Established Nonprofit</span><span class="pick-free">Free</span>';
      if (title === 'Quranic Arabic Corpus') badges.innerHTML = '<span class="pick-recommended">✓ University Research Origin</span><span class="pick-free">Open Source</span>';
    });
    const intro = qs('.section-intro p', section);
    if (intro) intro.innerHTML = `Pilihan khusus untuk bacaan Al-Quran dan analisis bahasa Arab. Quran.com dikendalikan oleh Quran.Foundation; Quranic Arabic Corpus bermula sebagai projek penyelidikan University of Leeds. Untuk hukum atau fatwa, gunakan <a href="fatwa-malaysia.html">rujukan rasmi Malaysia</a>.`;
  }

  injectVerifiedHubStyles();
  organizeMalaysiaHub();
  refineFreeLearningPicks();
  refineIslamicPicks();
  hardenExternalLinks();

  const menu = qs('.hub-menu');
  const links = qs('#hub-links');
  if (menu && links) {
    menu.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
  }

  qsa('[data-reveal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = document.getElementById(btn.dataset.reveal);
      if (!panel) return;
      const willOpen = panel.hidden;
      panel.hidden = !willOpen;
      btn.setAttribute('aria-expanded', String(willOpen));
      btn.textContent = willOpen ? 'Tutup' : (btn.classList.contains('dark-btn') ? 'Lihat idea' : 'Teroka makna');
    });
  });

  const filterButtons = qsa('.track-chip');
  const trackCards = qsa('.track-card');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      trackCards.forEach(card => {
        card.hidden = filter !== 'all' && card.dataset.track !== filter;
      });
    });
  });

  const STORAGE_KEY = 'tgpu-learning-missions-v2';
  let completed = new Set();
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    completed = new Set(Array.isArray(saved) ? saved : []);
  } catch (_) {}

  const count = qs('#mission-count');
  const bar = qs('#mission-progress');
  const badge = qs('#badge-box');

  function updateProgress() {
    const n = completed.size;
    if (count) count.textContent = `${n} / 3`;
    if (bar) bar.style.width = `${(n / 3) * 100}%`;
    if (badge) badge.hidden = n < 3;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed])); } catch (_) {}
    qsa('.mission-card').forEach(card => {
      if (completed.has(card.dataset.mission)) card.dataset.completed = 'true';
      else delete card.dataset.completed;
    });
  }

  qsa('.mission-card').forEach(card => {
    const feedback = qs('.feedback', card);
    qsa('[data-answer]', card).forEach(button => {
      button.addEventListener('click', () => {
        qsa('[data-answer]', card).forEach(b => b.classList.remove('is-correct', 'is-wrong'));
        const correct = button.dataset.answer === 'correct';
        button.classList.add(correct ? 'is-correct' : 'is-wrong');
        if (correct) {
          completed.add(card.dataset.mission);
          if (feedback) feedback.textContent = 'Betul ✓ Bagus — teruskan misi seterusnya.';
          qsa('[data-answer="correct"]', card).forEach(b => b.classList.add('is-correct'));
          updateProgress();
        } else if (feedback) feedback.textContent = 'Belum lagi. Cuba fikir sekali lagi.';
      });
    });
  });

  const reset = qs('#reset-progress');
  if (reset) {
    reset.addEventListener('click', () => {
      completed.clear();
      qsa('.mission-card [data-answer]').forEach(b => b.classList.remove('is-correct', 'is-wrong'));
      qsa('.mission-card .feedback').forEach(f => f.textContent = '');
      updateProgress();
    });
  }
  updateProgress();

  const tabs = qsa('[data-tab]');
  const panes = qsa('[data-pane]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      tabs.forEach(t => t.setAttribute('aria-selected', String(t === tab)));
      panes.forEach(p => {
        const active = p.dataset.pane === name;
        p.hidden = !active;
        p.classList.toggle('active', active);
      });
    });
  });

  const gloss = qs('#gloss-output');
  qsa('.word-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      qsa('.word-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (gloss) gloss.textContent = chip.dataset.gloss || '';
    });
  });

  const search = qs('#topic-search');
  const resources = qsa('.resource-card');
  const noResults = qs('#no-results');
  if (search) {
    search.addEventListener('input', () => {
      const term = search.value.trim().toLowerCase();
      let visible = 0;
      resources.forEach(card => {
        const haystack = `${card.dataset.keywords || ''} ${card.textContent}`.toLowerCase();
        const show = !term || haystack.includes(term);
        card.hidden = !show;
        if (show) visible++;
      });
      if (noResults) noResults.hidden = visible !== 0;
    });
  }
})();