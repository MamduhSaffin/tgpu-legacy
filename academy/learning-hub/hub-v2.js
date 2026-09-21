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
      .site-header{background:#0b2819;border-bottom:1px solid rgba(255,255,255,.1)}
      .site-header .hub-nav{min-height:74px;display:flex;align-items:center;gap:18px}.site-header .brand{display:flex;align-items:center;gap:10px;color:#fff;text-decoration:none;font-weight:800}.site-header .brand img{width:38px;height:38px;object-fit:contain}.site-header .brand-text{display:flex;flex-direction:column;line-height:1.05}.site-header .brand-text small{font-size:.58rem;letter-spacing:.04em;color:rgba(255,255,255,.62);font-weight:600;margin-top:4px}.site-header .nav-links{margin-left:auto;display:flex;align-items:center;gap:15px}.site-header .nav-links a{color:rgba(255,255,255,.82);text-decoration:none;font-size:.78rem;font-weight:700}.site-header .nav-links a:hover,.site-header .nav-links a[aria-current="page"]{color:#ecd69c}
      main.page,main.planner-page{background:#f8faf7;padding-top:1px}.page>.hero,.planner-page>.planner-hero{margin-top:2rem;margin-bottom:2rem;border-radius:30px;padding:clamp(2.2rem,5vw,4rem);background:radial-gradient(circle at 88% 12%,rgba(236,214,156,.18),transparent 28%),linear-gradient(135deg,#0b2819,#14532d);color:#fff;box-shadow:0 20px 60px rgba(18,61,38,.14)}
      .page>.hero .kicker,.planner-kicker{color:#ecd69c!important}.page>.hero h1,.planner-hero h1{font-family:Amiri,Georgia,serif;font-size:clamp(2.7rem,5vw,4.5rem);line-height:1.02;color:#fff;margin:.45rem 0 .8rem}.page>.hero p,.planner-hero p{color:rgba(255,255,255,.82);max-width:850px}.page>.hero .button-ghost,.planner-hero .button-ghost{border-color:rgba(255,255,255,.34);color:#fff}
      .page h2,.planner-page h2{font-family:Amiri,Georgia,serif;color:#123d26;font-size:clamp(2rem,4vw,3rem);line-height:1.08;margin-bottom:1rem}.page h3,.planner-page h3{color:#123d26}.page .grid,.planner-grid{gap:1rem}.page .card,.planner-card{border:1px solid #dfe7df!important;border-radius:22px!important;padding:1.35rem!important;box-shadow:0 8px 24px rgba(18,61,38,.055)!important;display:flex;flex-direction:column;background:#fff}.page .card:hover,.planner-card:hover{box-shadow:0 15px 32px rgba(18,61,38,.1)!important}.page .card p,.planner-card p{color:#59685f}.page .card a,.planner-card a{margin-top:auto;color:#14532d;text-decoration:none;font-weight:800}.page .tag,.planner-page .tag{background:#eaf4ed!important;color:#14532d!important;border:1px solid #d6e7dc}.page .notice,.planner-page .notice{border-left:4px solid #c6a15b!important;background:#fff8e9!important;border-radius:0 16px 16px 0!important}.page .section-space,.planner-page .section-space{margin-top:3.25rem}.page .small,.planner-page .source-note{color:#667067}.site-footer{background:#0b2819;color:rgba(255,255,255,.72);margin-top:0}.site-footer a{color:#ecd69c;text-decoration:none}.site-footer .footer-grid{display:flex;justify-content:space-between;gap:24px;align-items:center;padding-top:28px;padding-bottom:28px}.site-footer strong{color:#fff}
      .hub-share-section{padding:72px 0;background:linear-gradient(135deg,#f6f1e4,#eef5f0);border-top:1px solid #e1e8df;border-bottom:1px solid #e1e8df}.hub-share-card{display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center;background:#fff;border:1px solid #dfe7df;border-radius:28px;padding:clamp(1.5rem,4vw,2.5rem);box-shadow:0 16px 42px rgba(18,61,38,.08)}.hub-share-card h2{font-family:Amiri,Georgia,serif;color:#123d26;font-size:clamp(2.2rem,4vw,3.3rem);line-height:1.04;margin:.3rem 0 .7rem}.hub-share-card p{max-width:700px;color:#5d6b63;margin:0}.hub-share-actions{display:flex;gap:10px;flex-wrap:wrap;justify-content:flex-end}.hub-share-button{border:0;border-radius:999px;padding:12px 17px;background:#123d26;color:#fff;font:inherit;font-weight:800;cursor:pointer}.hub-share-copy{border:1px solid #c9d7ce;border-radius:999px;padding:11px 16px;background:#fff;color:#123d26;font:inherit;font-weight:800;cursor:pointer}.hub-share-feedback{display:block;margin-top:8px;color:#667067;font-size:.78rem;min-height:1.2em}
      @media(max-width:900px){.site-header .nav-links{display:none;position:absolute;left:16px;right:16px;top:70px;z-index:50;background:#123d26;border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:14px;box-shadow:0 18px 40px rgba(0,0,0,.2)}.site-header .nav-links.open{display:grid}.hub-menu{display:block}.hub-share-card{grid-template-columns:1fr}.hub-share-actions{justify-content:flex-start}}
      @media(max-width:760px){.directory-groups{grid-template-columns:1fr}.verified-standard{align-items:flex-start}.directory-link{align-items:flex-start}.page>.hero,.planner-page>.planner-hero{margin-top:1rem;border-radius:22px;padding:1.55rem}.site-footer .footer-grid{display:grid}.hub-share-section{padding:52px 0}}
    `;
    document.head.appendChild(style);
  }

  function standardizeHubSubpages() {
    const content = qs('main.page, main.planner-page');
    if (!content) return;
    const header = qs('.site-header');
    const navWrap = qs('.hub-nav', header || document);
    const brand = qs('.brand', header || document);
    const nav = qs('nav', header || document);
    if (brand) {
      brand.href = './';
      brand.innerHTML = '<img src="../../assets/tgpu-learning-hub-approved.png" alt="TGPU Learning Hub logo"><span class="brand-text">TGPU Learning<small>Learn • Understand • Create • Verify</small></span>';
    }
    if (navWrap && nav) {
      nav.classList.add('nav-links');
      nav.id = 'hub-links';
      nav.setAttribute('aria-label', 'Navigasi TGPU Learning');
      nav.innerHTML = '<a href="../../">TGPU Legacy</a><a href="../">Academy</a><a href="../quran/">Quran</a><a href="../arabic/">Arabic</a><a href="../islamic-learning/">Islamic Learning</a><a href="./">Learning Hub</a>';
      if (!qs('.hub-menu', navWrap)) {
        const button = document.createElement('button');
        button.className = 'hub-menu';
        button.type = 'button';
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-controls', 'hub-links');
        button.textContent = 'Menu';
        navWrap.insertBefore(button, nav);
      }
    }
    const footer = qs('.site-footer');
    const footerWrap = qs('.wrap', footer || document);
    if (footerWrap) {
      footerWrap.classList.add('footer-grid');
      footerWrap.innerHTML = '<div><strong>TGPU Learning Hub</strong><br><small>Resources by TGPU Academy • tgpu.my</small></div><div><a href="./">Learning Hub</a> · <a href="../">TGPU Academy</a></div>';
    }
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
      <section class="directory-group" aria-labelledby="group-study"><div class="directory-group-head"><span class="directory-group-icon">🎓</span><div><h3 id="group-study">Belajar, Bahasa & Penyelidikan</h3><p>Untuk pelajar, pembaca dan pembelajaran bahasa yang tersusun.</p></div></div><div class="directory-links"><a class="directory-link" href="school-scholarship-planner.html"><span><b>Sekolah & Biasiswa</b><small>Portal penajaan dan perancangan pendidikan</small></span><span>→</span></a><a class="directory-link" href="student-library-knowledge.html"><span><b>Perpustakaan Pelajar</b><small>u-Pustaka, OpenStax, OpenLearn & bacaan terbuka</small></span><span>→</span></a><a class="directory-link" href="malaysia-language-exchange.html"><span><b>Bahasa Malaysia Bersama</b><small>Melayu, Mandarin, Tamil, kamus & alat bahasa</small></span><span>→</span></a></div></section>
      <section class="directory-group" aria-labelledby="group-life"><div class="directory-group-head"><span class="directory-group-icon">🧭</span><div><h3 id="group-life">Kehidupan, Kerjaya & Bisnes Malaysia</h3><p>Perkhidmatan penting, laluan kerjaya dan permulaan bisnes dengan sumber yang jelas.</p></div></div><div class="directory-links"><a class="directory-link" href="malaysia-essentials.html"><span><b>Malaysia Essentials</b><small>Bantuan, kesihatan, PTPTN, KWSP & perkhidmatan awam</small></span><span>→</span></a><a class="directory-link" href="malaysia-jobs-career.html"><span><b>Kerja & Kerjaya</b><small>MYFutureJobs, SPA9 & PERKESO</small></span><span>→</span></a><a class="directory-link" href="malaysia-business-sme-digital.html"><span><b>Bisnes, SME & Jual Online</b><small>SSM, SME Corp, MDEC, TEKUN, TikTok Shop, Shopee & eksport</small></span><span>→</span></a></div></section>
      <section class="directory-group" aria-labelledby="group-culture"><div class="directory-group-head"><span class="directory-group-icon">🇲🇾</span><div><h3 id="group-culture">Budaya, Ilmu & Warisan</h3><p>Kenali Malaysia melalui negeri, tokoh, makanan, sumber alam dan karya.</p></div></div><div class="directory-links"><a class="directory-link" href="malaysia-heritage-by-state.html"><span><b>Warisan Mengikut Negeri</b><small>Makanan, pakaian, sukan & identiti negeri</small></span><span>→</span></a><a class="directory-link" href="malaysia-food-resources-herbs.html"><span><b>Makanan, Sumber & Herba</b><small>Sawit, hasil tempatan dan penggunaan herba secara berhati-hati</small></span><span>→</span></a><a class="directory-link" href="ulama-sasterawan-malaysia.html"><span><b>Ulama & Sasterawan</b><small>Tokoh ilmu, bahasa dan sastera Malaysia</small></span><span>→</span></a><a class="directory-link" href="malaysia-classic-stories.html"><span><b>Cerita Malaysia Zaman Dulu</b><small>P. Ramlee, arkib, filem dan memori keluarga</small></span><span>→</span></a><a class="directory-link" href="interactive-nasyid.html"><span><b>Nasyid Interaktif</b><small>Sumber artis rasmi + aktiviti bahasa dan nilai</small></span><span>→</span></a></div></section>
      <section class="directory-group" aria-labelledby="group-reference"><div class="directory-group-head"><span class="directory-group-icon">☪️</span><div><h3 id="group-reference">Islam, Perjalanan & Teroka</h3><p>Rujukan agama rasmi dan panduan perjalanan yang mudah disemak.</p></div></div><div class="directory-links"><a class="directory-link" href="fatwa-malaysia.html"><span><b>Rujukan Fatwa Malaysia</b><small>JAKIM dan jabatan mufti negeri</small></span><span>→</span></a><a class="directory-link" href="explore-masjid-malaysia.html"><span><b>Explore Masjid Malaysia</b><small>SISMIM, e-Solat, masjid rasmi & adab lawatan</small></span><span>→</span></a><a class="directory-link" href="live-haramain-gulf-info.html"><span><b>Live Haramain & Gulf</b><small>Saluran SBA, Nusuk, SPA, WAM & portal rasmi</small></span><span>→</span></a><a class="directory-link" href="malaysia-holiday-by-state.html"><span><b>Cuti-Cuti Malaysia</b><small>Destinasi mengikut negeri & Tourism Malaysia</small></span><span>→</span></a><a class="directory-link" href="malaysia-cafes-popular-places.html"><span><b>Kafe & Tempat Popular</b><small>Panduan kawasan—semak premis terkini sebelum pergi</small></span><span>→</span></a></div></section>`;
    const note = qs('.directory-note', directory);
    if (note) note.innerHTML = `<strong>Prinsip TGPU:</strong> pautan kerajaan, universiti dan organisasi asal diberi keutamaan. Rujukan terbuka atau alat pihak ketiga dilabel mengikut fungsi dan tidak dipersembahkan sebagai sumber rasmi.`;
  }

  function refineFreeLearningPicks() {
    const section = qs('#free-learning-picks');
    if (!section) return;
    const intro = qs('.section-intro', section);
    const grid = qs('.picks-grid', section);
    if (intro) intro.innerHTML = `<span class="eyebrow dark">VERIFIED LEARNING PICKS • TGPU</span><h2 id="picks-title" lang="en">Free Learning Picks</h2><p>Hanya sumber yang dapat dikenal pasti pengendalinya dan disemak semula dimasukkan di sini. Keutamaan diberi kepada universiti, agensi kerajaan, badan profesional dan organisasi pendidikan established.</p>`;
    if (grid) grid.innerHTML = `<article class="pick-card"><span class="pick-category">Academic & Research</span><h3>MIT OpenCourseWare</h3><div class="pick-badges"><span class="pick-recommended">✓ Official University</span><span class="pick-free">Free</span></div><p>Bahan kursus terbuka daripada Massachusetts Institute of Technology.</p><a class="pick-link" href="https://ocw.mit.edu/">Teroka MIT OpenCourseWare <span aria-hidden="true">↗</span></a></article><article class="pick-card"><span class="pick-category">Computer Science</span><h3>CS50x · Harvard</h3><div class="pick-badges"><span class="pick-recommended">✓ Official University</span><span class="pick-free">Free</span></div><p>Kursus pengenalan sains komputer Harvard dengan kuliah dan latihan penyelesaian masalah.</p><a class="pick-link" href="https://cs50.harvard.edu/x/">Teroka CS50x <span aria-hidden="true">↗</span></a></article><article class="pick-card"><span class="pick-category">Open Learning</span><h3>OpenLearn · The Open University</h3><div class="pick-badges"><span class="pick-recommended">✓ Official University</span><span class="pick-free">Free</span></div><p>Kursus percuma merentas bahasa, sains, masyarakat, teknologi dan kemahiran belajar.</p><a class="pick-link" href="https://www.open.edu/openlearn/">Teroka OpenLearn <span aria-hidden="true">↗</span></a></article><article class="pick-card"><span class="pick-category">Open Textbooks</span><h3>OpenStax · Rice University</h3><div class="pick-badges"><span class="pick-recommended">✓ Rice University</span><span class="pick-free">Free</span></div><p>Buku teks terbuka dan peer-reviewed untuk sekolah menengah dan universiti.</p><a class="pick-link" href="https://openstax.org/">Teroka OpenStax <span aria-hidden="true">↗</span></a></article><article class="pick-card"><span class="pick-category">Bahasa Melayu</span><h3>PRPM · Dewan Bahasa dan Pustaka</h3><div class="pick-badges"><span class="pick-recommended">✓ Official Malaysia</span><span class="pick-free">Free</span></div><p>Rujukan rasmi DBP untuk kamus, istilah, ejaan dan penggunaan Bahasa Melayu.</p><a class="pick-link" href="https://prpm.dbp.gov.my/">Teroka PRPM <span aria-hidden="true">↗</span></a></article><article class="pick-card"><span class="pick-category">Science & Space</span><h3>NASA’s Eyes</h3><div class="pick-badges"><span class="pick-recommended">✓ Official Government</span><span class="pick-free">Free</span></div><p>Visualisasi interaktif Bumi, planet dan misi angkasa berasaskan data NASA.</p><a class="pick-link" href="https://science.nasa.gov/eyes/">Teroka NASA’s Eyes <span aria-hidden="true">↗</span></a></article><article class="pick-card"><span class="pick-category">Emergency Learning</span><h3>ACS Stop the Bleed</h3><div class="pick-badges"><span class="pick-recommended">✓ Professional Body</span><span class="pick-free">Free</span></div><p>Kursus interaktif American College of Surgeons tentang asas mengawal pendarahan teruk.</p><a class="pick-link" href="https://www.stopthebleed.org/get-trained/online-course/">Teroka kursus ACS <span aria-hidden="true">↗</span></a></article><article class="pick-card"><span class="pick-category">Books & Literature</span><h3>Project Gutenberg</h3><div class="pick-badges"><span class="pick-recommended">✓ Established Library</span><span class="pick-free">Free</span></div><p>Koleksi besar karya domain awam untuk bacaan dan pembelajaran.</p><a class="pick-link" href="https://www.gutenberg.org/">Teroka Project Gutenberg <span aria-hidden="true">↗</span></a></article>`;
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
    qsa('.pick-card', section).forEach(card => {
      const title = qs('h3', card)?.textContent.trim();
      const badges = qs('.pick-badges', card);
      if (!badges) return;
      if (title === 'Quran.com') badges.innerHTML = '<span class="pick-recommended">✓ Established Nonprofit</span><span class="pick-free">Free</span>';
      if (title === 'Quranic Arabic Corpus') badges.innerHTML = '<span class="pick-recommended">✓ University Research Origin</span><span class="pick-free">Open Source</span>';
    });
    const intro = qs('.section-intro p', section);
    if (intro) intro.innerHTML = `Pilihan khusus untuk bacaan Al-Quran dan analisis bahasa Arab. Quran.com dikendalikan oleh Quran.Foundation; Quranic Arabic Corpus bermula sebagai projek penyelidikan University of Leeds. Untuk hukum atau fatwa, gunakan <a href="fatwa-malaysia.html">rujukan rasmi Malaysia</a>.`;
  }

  function addMalaysiaSearchCards() {
    const grid = qs('#resource-grid');
    if (!grid) return;
    if (!qs('[data-keywords*="bisnes"]', grid)) {
      const card = document.createElement('a'); card.className = 'resource-card'; card.href = 'malaysia-business-sme-digital.html'; card.dataset.keywords = 'bisnes business sme pks pmks usahawan ssm tiktok shop shopee lazada mdec tekun matrade jual online'; card.innerHTML = '<span>Malaysia Business</span><h3>Bisnes, SME & Jual Online</h3><p>SSM, SME Corp, pembiayaan, digitalisasi, marketplace dan langkah untuk berkembang.</p>'; grid.appendChild(card);
    }
    if (!qs('[data-keywords*="masjid"]', grid)) {
      const card = document.createElement('a'); card.className = 'resource-card'; card.href = 'explore-masjid-malaysia.html'; card.dataset.keywords = 'masjid mosque malaysia surau jakim sismim e-solat solat travel explore'; card.innerHTML = '<span>Islam & Malaysia</span><h3>Explore Masjid Malaysia</h3><p>Cari masjid melalui SISMIM, e-Solat dan sumber rasmi, kemudian teroka dengan adab.</p>'; grid.appendChild(card);
    }
  }

  function injectShareSection() {
    const closing = qs('.closing-section');
    if (!closing || qs('.hub-share-section')) return;
    const section = document.createElement('section');
    section.className = 'hub-share-section';
    section.innerHTML = `<div class="wrap"><div class="hub-share-card"><div><span class="eyebrow dark">KONGSI ILMU</span><h2>Jumpa sesuatu yang berguna?<br>Kongsi dengan orang yang anda sayang.</h2><p>Mungkin satu pautan, satu idea atau satu sumber di Learning Hub ini boleh membantu ahli keluarga, kawan, pelajar atau seseorang yang sedang mencari arah.</p><span class="hub-share-feedback" id="hub-share-feedback" aria-live="polite"></span></div><div class="hub-share-actions"><button class="hub-share-button" id="hub-share-button" type="button">Kongsi Learning Hub</button><button class="hub-share-copy" id="hub-share-copy" type="button">Salin pautan</button></div></div></div>`;
    closing.parentNode.insertBefore(section, closing);
    const shareButton = qs('#hub-share-button'); const copyButton = qs('#hub-share-copy'); const feedback = qs('#hub-share-feedback'); const canonical = qs('link[rel="canonical"]')?.href || location.href.split('#')[0]; const shareData = { title: 'TGPU Learning Hub', text: 'Jumpa sumber pembelajaran yang berguna di TGPU Learning Hub.', url: canonical };
    shareButton?.addEventListener('click', async () => { if (navigator.share) { try { await navigator.share(shareData); if (feedback) feedback.textContent = 'Terima kasih kerana berkongsi ilmu.'; return; } catch (error) { if (error?.name === 'AbortError') return; } } try { await navigator.clipboard.writeText(canonical); if (feedback) feedback.textContent = 'Pautan disalin. Anda boleh kongsikan melalui WhatsApp, Telegram atau mana-mana aplikasi.'; } catch (_) { if (feedback) feedback.textContent = canonical; } });
    copyButton?.addEventListener('click', async () => { try { await navigator.clipboard.writeText(canonical); if (feedback) feedback.textContent = 'Pautan Learning Hub telah disalin.'; } catch (_) { if (feedback) feedback.textContent = canonical; } });
  }

  injectVerifiedHubStyles(); standardizeHubSubpages(); organizeMalaysiaHub(); refineFreeLearningPicks(); refineIslamicPicks(); addMalaysiaSearchCards(); injectShareSection(); hardenExternalLinks();

  const menu = qs('.hub-menu'); const links = qs('#hub-links'); if (menu && links) menu.addEventListener('click', () => { const open = links.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  qsa('[data-reveal]').forEach(btn => btn.addEventListener('click', () => { const panel = document.getElementById(btn.dataset.reveal); if (!panel) return; const willOpen = panel.hidden; panel.hidden = !willOpen; btn.setAttribute('aria-expanded', String(willOpen)); btn.textContent = willOpen ? 'Tutup' : (btn.classList.contains('dark-btn') ? 'Lihat idea' : 'Teroka makna'); }));
  const filterButtons = qsa('.track-chip'); const trackCards = qsa('.track-card'); filterButtons.forEach(btn => btn.addEventListener('click', () => { filterButtons.forEach(b => b.classList.remove('active')); btn.classList.add('active'); const filter = btn.dataset.filter; trackCards.forEach(card => { card.hidden = filter !== 'all' && card.dataset.track !== filter; }); }));

  const STORAGE_KEY = 'tgpu-learning-missions-v2'; let completed = new Set(); try { const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); completed = new Set(Array.isArray(saved) ? saved : []); } catch (_) {}
  const count = qs('#mission-count'); const bar = qs('#mission-progress'); const badge = qs('#badge-box');
  function updateProgress() { const n = completed.size; if (count) count.textContent = `${n} / 3`; if (bar) bar.style.width = `${(n / 3) * 100}%`; if (badge) badge.hidden = n < 3; try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed])); } catch (_) {} qsa('.mission-card').forEach(card => { if (completed.has(card.dataset.mission)) card.dataset.completed = 'true'; else delete card.dataset.completed; }); }
  qsa('.mission-card').forEach(card => { const feedback = qs('.feedback', card); qsa('[data-answer]', card).forEach(button => button.addEventListener('click', () => { qsa('[data-answer]', card).forEach(b => b.classList.remove('is-correct', 'is-wrong')); const correct = button.dataset.answer === 'correct'; button.classList.add(correct ? 'is-correct' : 'is-wrong'); if (correct) { completed.add(card.dataset.mission); if (feedback) feedback.textContent = 'Betul ✓ Bagus — teruskan misi seterusnya.'; qsa('[data-answer="correct"]', card).forEach(b => b.classList.add('is-correct')); updateProgress(); } else if (feedback) feedback.textContent = 'Belum lagi. Cuba fikir sekali lagi.'; })); });
  const reset = qs('#reset-progress'); if (reset) reset.addEventListener('click', () => { completed.clear(); qsa('.mission-card [data-answer]').forEach(b => b.classList.remove('is-correct', 'is-wrong')); qsa('.mission-card .feedback').forEach(f => f.textContent = ''); updateProgress(); }); updateProgress();

  const tabs = qsa('[data-tab]'); const panes = qsa('[data-pane]'); tabs.forEach(tab => tab.addEventListener('click', () => { const name = tab.dataset.tab; tabs.forEach(t => t.setAttribute('aria-selected', String(t === tab))); panes.forEach(p => { const active = p.dataset.pane === name; p.hidden = !active; p.classList.toggle('active', active); }); }));
  const gloss = qs('#gloss-output'); qsa('.word-chip').forEach(chip => chip.addEventListener('click', () => { qsa('.word-chip').forEach(c => c.classList.remove('active')); chip.classList.add('active'); if (gloss) gloss.textContent = chip.dataset.gloss || ''; }));
  const search = qs('#topic-search'); const resources = qsa('.resource-card'); const noResults = qs('#no-results'); if (search) search.addEventListener('input', () => { const term = search.value.trim().toLowerCase(); let visible = 0; resources.forEach(card => { const haystack = `${card.dataset.keywords || ''} ${card.textContent}`.toLowerCase(); const show = !term || haystack.includes(term); card.hidden = !show; if (show) visible++; }); if (noResults) noResults.hidden = visible !== 0; });
})();