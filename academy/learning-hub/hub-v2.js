(() => {
  const qs = (s, root = document) => root.querySelector(s);
  const qsa = (s, root = document) => [...root.querySelectorAll(s)];

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
      if (completed.has(card.dataset.mission)) {
        card.dataset.completed = 'true';
      } else {
        delete card.dataset.completed;
      }
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
        } else {
          if (feedback) feedback.textContent = 'Belum lagi. Cuba fikir sekali lagi.';
        }
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