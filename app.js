// app.js
// Rēctor Interfacieī et Logica Interactīva (ES Module)
// Lingua Latina per sē Illustrata: Capitula I & II

import { capitulumPrimum } from './data_capitulum1.js';
import { capitulumSecundum } from './data_capitulum2.js';

// Dāta capitulōrum
const capitula = {
  1: capitulumPrimum,
  2: capitulumSecundum
};

// Statūs globālēs
let currentChapterNum = 1;
let currentChapter = capitulumPrimum;
let pinnedToken = null;
let activeInputElement = null;
let currentColorMode = null; // 'nominativus', 'genetivus', 'ablativus', 'verbum', 'totum', or null

// Statūs certāminis (Drill)
let drillScore = 0;
let drillStreak = 0;
let currentDrillQuestion = null;

// Inceptiō ubi pāgina onusta est
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  loadChapter(1);
});

// 1. Mūtātiō Capitulī (Chapter Loader)
function loadChapter(num) {
  if (!capitula[num]) return;
  currentChapterNum = parseInt(num, 10);
  currentChapter = capitula[currentChapterNum];

  // Pāgina tituli
  document.getElementById('page-chapter-num').textContent = currentChapter.titulus;
  document.getElementById('page-chapter-title').textContent = currentChapter.subtitulus;
  document.title = `Lingua Latina — ${currentChapter.titulus}`;

  // Reddere omnia
  renderCapitulum();
  renderTabulaDeclinationum();
  renderVocabularium();
  renderPensa();
  renderDrill();
  loadSavedPensaState();
  applyCaseHighlighter();
}

// 2. Textus Lēctiōnis Reddere
function renderCapitulum() {
  const container = document.getElementById('textus-container');
  if (!container) return;

  let html = '';

  currentChapter.sectiones.forEach((sectio) => {
    html += `<div class="section-header">${sectio.titulusSectio}</div>`;

    sectio.versus.forEach((v) => {
      html += `
        <div class="verse-row">
          <div class="verse-num">${v.numerus}</div>
          <div class="verse-text">
      `;

      v.tokens.forEach((tok) => {
        const tokData = encodeURIComponent(JSON.stringify(tok));
        const lead = tok.lead || '';
        const punc = tok.punc || '';
        html += `${lead}<span class="latin-token" data-token="${tokData}">${tok.f}</span>${punc} `;
      });

      html += `
          </div>
          <div class="verse-marginalia">${v.marginalia || ''}</div>
        </div>
      `;
    });
  });

  container.innerHTML = html;
}

// 3. Tabula Dēclīnātiōnum (In Tabulā Laterālī)
function renderTabulaDeclinationum() {
  const container = document.getElementById('declinationes-content');
  if (!container) return;

  const td = currentChapter.tabulaDeclinationum;
  let html = `<p style="font-size:0.92rem; font-style:italic; margin-bottom:1.2rem; color:var(--ink-secondary);">${td.descriptio}</p>`;

  td.declinationes.forEach((decl) => {
    html += `
      <div class="decl-card">
        <div class="decl-card-header">
          <span>${decl.nomen}</span>
          <span style="font-size:0.8rem; color:var(--ink-muted); font-style:italic;">${decl.genus}</span>
        </div>
        <div style="font-size:0.88rem; font-weight:600; margin-bottom:0.4rem; color:var(--ink-secondary);">
          Paradigma: <em>${decl.paradigma}</em>
        </div>
        <table class="decl-table">
          <thead>
            <tr>
              <th>CASUS</th>
              <th>SINGVLĀRIS</th>
              <th>PLŪRĀLIS</th>
            </tr>
          </thead>
          <tbody>
    `;

    decl.casus.forEach((c) => {
      html += `
        <tr>
          <td>${c.casus}</td>
          <td>${c.sg}</td>
          <td>${c.pl}</td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;
  });

  container.innerHTML = html;
}

// 4. Vocābulārium (Cumulātīvum usque ad hoc capitulum)
function getCumulativeVocab() {
  const map = new Map();
  for (let i = 1; i <= currentChapterNum; i++) {
    if (capitula[i] && capitula[i].vocabularium) {
      capitula[i].vocabularium.forEach(item => {
        map.set(item.lemma, item);
      });
    }
  }
  return Array.from(map.values()).sort((a, b) => a.lemma.localeCompare(b.lemma, 'la'));
}

function renderVocabularium(filterQuery = '') {
  const container = document.getElementById('vocabularium-list');
  if (!container) return;

  const query = filterQuery.trim().toLowerCase();
  const allWords = getCumulativeVocab();
  const words = allWords.filter((item) => {
    if (!query) return true;
    return item.lemma.toLowerCase().includes(query) ||
           item.pars.toLowerCase().includes(query) ||
           item.notatio.toLowerCase().includes(query);
  });

  if (words.length === 0) {
    container.innerHTML = '<p style="font-style:italic; color:var(--ink-muted); padding:1rem;">Nūllum vocābulum inventum est.</p>';
    return;
  }

  let html = '';
  words.forEach((item) => {
    html += `
      <div class="vocab-item" data-lemma="${item.lemma}">
        <div class="vocab-header">
          <span class="vocab-lemma">${item.lemma}</span>
          <span class="vocab-pars">${item.pars} (${item.genus})</span>
        </div>
        <div class="vocab-notatio">${item.notatio}</div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// 5. Pēnsa Interactīva
function renderPensa() {
  renderPensumA();
  renderPensumB();
  renderPensumC();
}

function renderPensumA() {
  const container = document.getElementById('pensum-a-content');
  if (!container) return;

  const pa = currentChapter.pensa.pensumA;
  let html = `<p class="pensum-desc">${pa.descriptio}</p>`;

  pa.quaestiones.forEach((q, idx) => {
    html += `
      <div class="cloze-row" data-qid="${q.id}">
        <span class="cloze-num">${idx + 1}.</span>
        <span>${q.praefix}</span>
        <input type="text" class="cloze-input" data-ans="${q.lacuna}" autocomplete="off" spellcheck="false" style="width:${Math.max(44, q.lacuna.length * 20)}px" />
        <span>${q.inter}</span>
        <input type="text" class="cloze-input" data-ans="${q.lacuna2}" autocomplete="off" spellcheck="false" style="width:${Math.max(44, q.lacuna2.length * 20)}px" />
        <span>${q.suffix}</span>
      </div>
    `;
  });

  html += `
    <div class="pensa-actions">
      <button class="btn-ancient active" id="btn-proba-a">✔ PROBĀ PĒNSVM A</button>
      <div class="score-display" id="score-a"></div>
    </div>
  `;

  container.innerHTML = html;
}

function renderPensumB() {
  const container = document.getElementById('pensum-b-content');
  if (!container) return;

  const pb = currentChapter.pensa.pensumB;
  let html = `<p class="pensum-desc">${pb.descriptio}</p>`;

  pb.quaestiones.forEach((q, idx) => {
    html += `
      <div class="cloze-row" data-qid="${q.id}">
        <span class="cloze-num">${idx + 1}.</span>
        <span>${q.praefix}</span>
        <input type="text" class="cloze-input" data-ans="${q.lacuna}" autocomplete="off" spellcheck="false" style="width:${Math.max(65, q.lacuna.length * 16)}px" />
        <span>${q.suffix}</span>
      </div>
    `;
  });

  html += `
    <div class="pensa-actions">
      <button class="btn-ancient active" id="btn-proba-b">✔ PROBĀ PĒNSVM B</button>
      <div class="score-display" id="score-b"></div>
    </div>
  `;

  container.innerHTML = html;
}

function renderPensumC() {
  const container = document.getElementById('pensum-c-content');
  if (!container) return;

  const pc = currentChapter.pensa.pensumC;
  let html = `<p class="pensum-desc">${pc.descriptio}</p>`;

  pc.quaestiones.forEach((q, idx) => {
    html += `
      <div class="interrogatio-card" data-qid="${q.id}">
        <div class="interrogatio-text">${idx + 1}. ${q.interrogatio}</div>
        <input type="text" class="interrogatio-input" placeholder="Scrībe respōnsum tuum Latīnē..." autocomplete="off" spellcheck="false" />
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <button class="btn-ancient btn-toggle-exemplum" data-qid="${q.id}" style="font-size:0.75rem;">👁 OSTENDE EXEMPLVM</button>
          <div class="self-eval-buttons" data-qid="${q.id}">
            <button class="btn-recte" data-val="recte">✔ RĒCTĒ</button>
            <button class="btn-prave" data-val="prave">✘ PRĀVĒ</button>
          </div>
        </div>
        <div class="model-answer-box" id="exemplum-${q.id}">
          <div class="model-label">Exemplum rēctum:</div>
          <div><em>${q.exemplum}</em></div>
        </div>
      </div>
    `;
  });

  html += `
    <div class="pensa-actions">
      <div></div>
      <div class="score-display" id="score-c"></div>
    </div>
  `;

  container.innerHTML = html;
}

// 6. Certāmen Celer (Paradigms Quick Drill in Drawer)
function generateDrillQuestions() {
  if (currentChapterNum === 1) {
    return [
      { q: "Quis est plūrālis verbi 'oppidum'?", a: "oppida", opts: ["oppida", "oppidī", "oppidōrum", "oppidae"] },
      { q: "Quis est plūrālis verbi 'fluvius'?", a: "fluviī", opts: ["fluviī", "fluvia", "fluviōrum", "fluviīs"] },
      { q: "Quis est plūrālis verbi 'īnsula'?", a: "īnsulae", opts: ["īnsulae", "īnsulās", "īnsulārum", "īnsulīs"] },
      { q: "Quis est casus in phrasī 'in Italiā'?", a: "Ablātīvus", opts: ["Ablātīvus", "Nōminātīvus", "Genetīvus", "Accūsātīvus"] },
      { q: "Quis est singulāris verbi 'parvī'?", a: "parvus", opts: ["parvus", "parvum", "parva", "parvō"] },
      { q: "Crēta nōn est oppidum, sed...", a: "īnsula", opts: ["īnsula", "fluvius", "imperium", "littera"] }
    ];
  } else {
    return [
      { q: "Quis est genetīvus singulāris verbi 'Iūlius'?", a: "Iūliī", opts: ["Iūliī", "Iūliō", "Iūliae", "Iūlium"] },
      { q: "Quis est genetīvus plūrālis verbi 'servus'?", a: "servōrum", opts: ["servōrum", "servī", "servārum", "servīs"] },
      { q: "Quis est genetīvus plūrālis verbi 'ancilla'?", a: "ancillārum", opts: ["ancillārum", "ancillae", "ancillōrum", "ancillīs"] },
      { q: "Mārcus et Quīntus sunt fīliī...", a: "Iūliī", opts: ["Iūliī", "Iūlius", "Iūlium", "Iūliō"] },
      { q: "Quis est fēminīnum verbi 'vir'?", a: "fēmina", opts: ["fēmina", "puella", "ancilla", "domina"] },
      { q: "Quid significat 'fīliī fīliaeque'?", a: "fīliī et fīliae", opts: ["fīliī et fīliae", "fīliī nōn fīliae", "fīlia fīliī", "fīliī sine fīliā"] }
    ];
  }
}

function renderDrill() {
  const container = document.getElementById('drill-content');
  if (!container) return;

  const pool = generateDrillQuestions();
  currentDrillQuestion = pool[Math.floor(Math.random() * pool.length)];

  // Shuffle options
  const shuffledOpts = [...currentDrillQuestion.opts].sort(() => Math.random() - 0.5);

  let html = `
    <div class="drill-box">
      <div class="drill-stats">
        <span>PŪNCTA: <strong>${drillScore}</strong></span>
        <span>CONTINUĀTIŌ: <strong>${drillStreak} 🔥</strong></span>
      </div>
      <div class="drill-question">${currentDrillQuestion.q}</div>
      <div class="drill-options">
  `;

  shuffledOpts.forEach(opt => {
    html += `<button class="drill-btn" data-val="${opt}">${opt}</button>`;
  });

  html += `
      </div>
      <div class="drill-feedback" id="drill-feedback"></div>
      <button class="btn-ancient" id="btn-next-drill" style="width:100%; margin-top:0.75rem; display:none; justify-content:center;">
        PROXIMA QVAESTIŌ ➔
      </button>
    </div>
  `;

  container.innerHTML = html;
}

// 7. Collūstrātiō Cāsuum (Grammatical Case Highlighter)
function applyCaseHighlighter() {
  const tokens = document.querySelectorAll('.latin-token');
  tokens.forEach(tok => {
    tok.classList.remove('highlight-nominativus', 'highlight-genetivus', 'highlight-ablativus', 'highlight-verbum');
    if (!currentColorMode) return;

    const data = JSON.parse(decodeURIComponent(tok.dataset.token));

    if (currentColorMode === 'totum') {
      if (data.c === 'Nōminātīvus') tok.classList.add('highlight-nominativus');
      if (data.c === 'Genetīvus') tok.classList.add('highlight-genetivus');
      if (data.c && data.c.includes('Ablātīvus')) tok.classList.add('highlight-ablativus');
      if (data.p === 'Verbum') tok.classList.add('highlight-verbum');
    } else if (currentColorMode === 'nominativus' && data.c === 'Nōminātīvus') {
      tok.classList.add('highlight-nominativus');
    } else if (currentColorMode === 'genetivus' && data.c === 'Genetīvus') {
      tok.classList.add('highlight-genetivus');
    } else if (currentColorMode === 'ablativus' && data.c && data.c.includes('Ablātīvus')) {
      tok.classList.add('highlight-ablativus');
    } else if (currentColorMode === 'verbum' && data.p === 'Verbum') {
      tok.classList.add('highlight-verbum');
    }
  });
}

// 8. Normalizātiō Macrōnum
function stripMacrons(str) {
  return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .trim();
}

// 9. Event Listeners & Flow Mode (Auto-advance)
function setupEventListeners() {
  const popover = document.getElementById('popover-card');
  const drawer = document.getElementById('lateral-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const colorDropdown = document.getElementById('color-dropdown');

  // Chapter Switcher
  const chapterSelect = document.getElementById('chapter-select');
  chapterSelect?.addEventListener('change', (e) => {
    loadChapter(e.target.value);
  });

  // Color Dropdown Toggle
  document.getElementById('btn-toggle-colors')?.addEventListener('click', (e) => {
    e.stopPropagation();
    colorDropdown?.classList.toggle('open');
  });

  document.querySelectorAll('.color-opt-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.color-opt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentColorMode = btn.dataset.color === 'null' ? null : btn.dataset.color;
      
      const label = document.getElementById('current-color-label');
      if (label) {
        label.textContent = currentColorMode ? btn.textContent.split(' ')[0].toUpperCase() : 'COLŌRĒS';
      }
      colorDropdown?.classList.remove('open');
      applyCaseHighlighter();
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.highlighter-wrapper')) {
      colorDropdown?.classList.remove('open');
    }
  });

  // Token Hover & Click
  document.addEventListener('mouseover', (e) => {
    if (pinnedToken) return;
    const tokenEl = e.target.closest('.latin-token');
    if (tokenEl) {
      showPopover(tokenEl, JSON.parse(decodeURIComponent(tokenEl.dataset.token)));
    } else {
      if (!e.target.closest('.popover-card')) {
        hidePopover();
      }
    }
  });

  document.addEventListener('click', (e) => {
    const tokenEl = e.target.closest('.latin-token');
    if (tokenEl) {
      const data = JSON.parse(decodeURIComponent(tokenEl.dataset.token));
      if (pinnedToken === tokenEl) {
        pinnedToken = null;
        tokenEl.classList.remove('active');
        hidePopover();
      } else {
        if (pinnedToken) pinnedToken.classList.remove('active');
        pinnedToken = tokenEl;
        tokenEl.classList.add('active');
        showPopover(tokenEl, data);
        highlightInVocabularium(data.l);
      }
      return;
    }

    if (!e.target.closest('.popover-card')) {
      if (pinnedToken) {
        pinnedToken.classList.remove('active');
        pinnedToken = null;
        hidePopover();
      }
    }
  });

  // Drawer Toggle
  document.getElementById('btn-open-drawer')?.addEventListener('click', () => {
    drawer.classList.add('open');
    drawerOverlay.classList.add('open');
  });

  document.getElementById('btn-close-drawer')?.addEventListener('click', closeDrawer);
  drawerOverlay?.addEventListener('click', closeDrawer);

  function closeDrawer() {
    drawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
  }

  // Drawer Tabs
  const drawerTabs = document.querySelectorAll('.drawer-tab');
  drawerTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      drawerTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.target;
      document.getElementById('declinationes-content').style.display = target === 'decl' ? 'block' : 'none';
      document.getElementById('vocabularium-content').style.display = target === 'vocab' ? 'block' : 'none';
      document.getElementById('drill-content').style.display = target === 'drill' ? 'block' : 'none';
    });
  });

  // Vocab Search
  const vocabSearch = document.getElementById('vocab-search-input');
  vocabSearch?.addEventListener('input', (e) => {
    renderVocabularium(e.target.value);
  });

  // Pēnsa Tabs
  const pensumTabs = document.querySelectorAll('.pensum-tab-btn');
  pensumTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      pensumTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.pensum;
      document.querySelectorAll('.pensum-panel').forEach(p => p.classList.remove('active'));
      document.getElementById(`pensum-${target}-panel`).classList.add('active');
    });
  });

  // Jump to Pensa
  document.getElementById('btn-jump-pensa')?.addEventListener('click', () => {
    document.getElementById('area-pensa')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Focus tracking
  document.addEventListener('focusin', (e) => {
    if (e.target.matches('.cloze-input, .interrogatio-input, .vocab-input')) {
      activeInputElement = e.target;
    }
  });

  // Hotkeys (Alt + a/e/i/o/u)
  document.addEventListener('keydown', (e) => {
    if (e.altKey && !e.metaKey) {
      const keyLower = e.key.toLowerCase();
      const macronMap = {
        'a': 'ā', 'e': 'ē', 'i': 'ī', 'o': 'ō', 'u': 'ū'
      };

      if (macronMap[keyLower]) {
        const targetInput = (document.activeElement && document.activeElement.matches('input, textarea'))
          ? document.activeElement
          : activeInputElement;

        if (targetInput) {
          e.preventDefault();
          e.stopPropagation();
          const isUpper = e.shiftKey || (e.key === e.key.toUpperCase() && e.key !== e.key.toLowerCase());
          const replacement = isUpper ? macronMap[keyLower].toUpperCase() : macronMap[keyLower];
          insertTextAtCursor(targetInput, replacement);
          targetInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
    }
  });

  // Flow Mode: Auto-advance cloze inputs on typing
  document.addEventListener('input', (e) => {
    if (e.target.matches('.cloze-input')) {
      handleMacronReplacement(e.target);
      savePensaState();

      // Check auto-advance condition
      const val = e.target.value.trim();
      const expected = (e.target.dataset.ans || '').trim();
      if (val.length >= expected.length && expected.length > 0) {
        advanceToNextCloze(e.target);
      }
    } else if (e.target.matches('.interrogatio-input, .vocab-input')) {
      handleMacronReplacement(e.target);
      savePensaState();
    }
  });

  // Flow Mode: Navigation via Space, Enter, Backspace
  document.addEventListener('keydown', (e) => {
    if (e.target.matches('.cloze-input')) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        advanceToNextCloze(e.target);
      } else if (e.key === 'Backspace' && e.target.value.length === 0) {
        regressToPrevCloze(e.target);
      }
    }
  });

  // Proba Pensum A & B — event delegation (botones se crean dinámicamente)
  document.getElementById('pensum-a-content')?.addEventListener('click', (e) => {
    if (e.target.matches('#btn-proba-a')) {
      validateClozePensum('pensum-a-content', 'score-a');
      savePensaState();
    }
  });

  document.getElementById('pensum-b-content')?.addEventListener('click', (e) => {
    if (e.target.matches('#btn-proba-b')) {
      validateClozePensum('pensum-b-content', 'score-b');
      savePensaState();
    }
  });

  // Pensum C Interactions
  document.getElementById('pensum-c-content')?.addEventListener('click', (e) => {
    if (e.target.matches('.btn-toggle-exemplum')) {
      const qid = e.target.dataset.qid;
      const box = document.getElementById(`exemplum-${qid}`);
      box.classList.toggle('visible');
      e.target.textContent = box.classList.contains('visible') ? '🙈 CLAVDE EXEMPLVM' : '👁 OSTENDE EXEMPLVM';
    }

    if (e.target.matches('.btn-recte')) {
      const card = e.target.closest('.interrogatio-card');
      card.querySelector('.btn-prave').classList.remove('selected');
      e.target.classList.add('selected');
      updatePensumCScore();
      savePensaState();
    }

    if (e.target.matches('.btn-prave')) {
      const card = e.target.closest('.interrogatio-card');
      card.querySelector('.btn-recte').classList.remove('selected');
      e.target.classList.add('selected');
      updatePensumCScore();
      savePensaState();
    }
  });

  // Drill Options Click
  document.getElementById('drill-content')?.addEventListener('click', (e) => {
    if (e.target.matches('.drill-btn') && currentDrillQuestion) {
      const selected = e.target.dataset.val;
      const isCorrect = (selected === currentDrillQuestion.a);
      const feedback = document.getElementById('drill-feedback');
      const nextBtn = document.getElementById('btn-next-drill');

      document.querySelectorAll('.drill-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.val === currentDrillQuestion.a) {
          btn.classList.add('correct');
        } else if (btn === e.target) {
          btn.classList.add('incorrect');
        }
      });

      if (isCorrect) {
        drillScore += 10;
        drillStreak += 1;
        feedback.textContent = "✔ Rēctē! Optime factum!";
        feedback.style.color = "var(--recte-green)";
      } else {
        drillStreak = 0;
        feedback.textContent = `✘ Prāvē! Rēctē erat: '${currentDrillQuestion.a}'`;
        feedback.style.color = "var(--prave-red)";
      }

      nextBtn.style.display = 'flex';
    }

    if (e.target.matches('#btn-next-drill')) {
      renderDrill();
    }
  });
}

// 10. Flow Mode Helpers
function advanceToNextCloze(currentInput) {
  const container = currentInput.closest('.pensum-panel');
  if (!container) return;
  const inputs = Array.from(container.querySelectorAll('.cloze-input'));
  const idx = inputs.indexOf(currentInput);
  if (idx !== -1 && idx + 1 < inputs.length) {
    inputs[idx + 1].focus();
  }
}

function regressToPrevCloze(currentInput) {
  const container = currentInput.closest('.pensum-panel');
  if (!container) return;
  const inputs = Array.from(container.querySelectorAll('.cloze-input'));
  const idx = inputs.indexOf(currentInput);
  if (idx > 0) {
    inputs[idx - 1].focus();
  }
}

// 11. Popover Placement & Content
function showPopover(element, data) {
  const popover = document.getElementById('popover-card');
  if (!popover) return;

  document.getElementById('pop-lemma').textContent = data.l;
  document.getElementById('pop-forma').textContent = data.f;
  document.getElementById('pop-pars').textContent = data.p;
  document.getElementById('pop-casus').textContent = data.c || '—';
  document.getElementById('pop-numerus').textContent = data.n || '—';
  document.getElementById('pop-genus').textContent = data.g || '—';
  document.getElementById('pop-notatio').textContent = data.d || '';

  popover.classList.add('visible');

  const rect = element.getBoundingClientRect();
  const popRect = popover.getBoundingClientRect();

  let top = rect.bottom + window.scrollY + 8;
  let left = rect.left + window.scrollX + (rect.width / 2) - (popRect.width / 2);

  if (left < 10) left = 10;
  if (left + popRect.width > window.innerWidth - 10) {
    left = window.innerWidth - popRect.width - 10;
  }

  if (rect.bottom + popRect.height + 20 > window.innerHeight) {
    top = rect.top + window.scrollY - popRect.height - 8;
  }

  popover.style.top = `${top}px`;
  popover.style.left = `${left}px`;
}

function hidePopover() {
  const popover = document.getElementById('popover-card');
  if (popover && !pinnedToken) {
    popover.classList.remove('visible');
  }
}

function highlightInVocabularium(lemma) {
  const baseLemma = lemma.split(',')[0].trim().toLowerCase();
  const searchInput = document.getElementById('vocab-search-input');
  if (searchInput) {
    searchInput.value = baseLemma;
    renderVocabularium(baseLemma);
  }
}

// 12. Macron Helpers & Shortcuts
function insertTextAtCursor(input, text) {
  const start = input.selectionStart || 0;
  const end = input.selectionEnd || 0;
  const val = input.value;
  input.value = val.substring(0, start) + text + val.substring(end);
  input.selectionStart = input.selectionEnd = start + text.length;
  input.focus();
}

function handleMacronReplacement(input) {
  const map = {
    'a=': 'ā', 'e=': 'ē', 'i=': 'ī', 'o=': 'ō', 'u=': 'ū',
    'A=': 'Ā', 'E=': 'Ē', 'I=': 'Ī', 'O=': 'Ō', 'U=': 'Ū',
    'a-': 'ā', 'e-': 'ē', 'i-': 'ī', 'o-': 'ō', 'u-': 'ū',
    'A-': 'Ā', 'E-': 'Ē', 'I-': 'Ī', 'O-': 'Ō', 'U-': 'Ū'
  };
  let val = input.value;
  let changed = false;
  for (const [key, replacement] of Object.entries(map)) {
    if (val.includes(key)) {
      val = val.replaceAll(key, replacement);
      changed = true;
    }
  }
  if (changed) {
    const cur = input.selectionEnd;
    input.value = val;
    input.selectionStart = input.selectionEnd = Math.max(0, cur - 1);
  }
}

// 13. Validation Logic
function validateClozePensum(containerId, scoreId) {
  const container = document.getElementById(containerId);
  const inputs = container.querySelectorAll('.cloze-input');
  let correctCount = 0;
  const total = inputs.length;

  inputs.forEach((input) => {
    const userVal = input.value.trim();
    const expected = input.dataset.ans.trim();

    const isExact = (userVal === expected);
    const isLenient = (stripMacrons(userVal) === stripMacrons(expected));

    input.classList.remove('correct', 'incorrect');
    if (isExact) {
      input.classList.add('correct');
      correctCount++;
    } else if (isLenient) {
      input.classList.add('correct');
      input.title = `Macrōnēs dēficiunt: rēctē est '${expected}'`;
      correctCount++;
    } else {
      input.classList.add('incorrect');
      input.title = `Rēctē est: '${expected}'`;
    }
  });

  const scoreEl = document.getElementById(scoreId);
  if (scoreEl) {
    scoreEl.textContent = `PŪNCTA: ${correctCount} / ${total} ${correctCount === total ? '✔ OPTIMĒ!' : ''}`;
  }
}

function updatePensumCScore() {
  const container = document.getElementById('pensum-c-content');
  const recteButtons = container.querySelectorAll('.btn-recte.selected');
  const total = container.querySelectorAll('.interrogatio-card').length;
  const scoreEl = document.getElementById('score-c');
  if (scoreEl) {
    scoreEl.textContent = `PŪNCTA: ${recteButtons.length} / ${total} RĒCTĒ`;
  }
}

// 14. Memoria Status (Local Storage per Capitulum)
function getStorageKey() {
  return `llpsi_cap${currentChapterNum}_pensa_v2`;
}

function savePensaState() {
  const state = {
    clozeInputs: {},
    interrogatioInputs: {},
    selfEval: {}
  };

  document.querySelectorAll('.cloze-input').forEach((inp, idx) => {
    state.clozeInputs[idx] = inp.value;
  });

  document.querySelectorAll('.interrogatio-card').forEach((card) => {
    const qid = card.dataset.qid;
    const inp = card.querySelector('.interrogatio-input');
    state.interrogatioInputs[qid] = inp.value;

    const isRecte = card.querySelector('.btn-recte').classList.contains('selected');
    const isPrave = card.querySelector('.btn-prave').classList.contains('selected');
    if (isRecte) state.selfEval[qid] = 'recte';
    if (isPrave) state.selfEval[qid] = 'prave';
  });

  localStorage.setItem(getStorageKey(), JSON.stringify(state));
}

function loadSavedPensaState() {
  const raw = localStorage.getItem(getStorageKey());
  if (!raw) return;

  try {
    const state = JSON.parse(raw);
    if (state.clozeInputs) {
      document.querySelectorAll('.cloze-input').forEach((inp, idx) => {
        if (state.clozeInputs[idx] !== undefined) {
          inp.value = state.clozeInputs[idx];
        }
      });
    }

    if (state.interrogatioInputs) {
      Object.entries(state.interrogatioInputs).forEach(([qid, val]) => {
        const card = document.querySelector(`.interrogatio-card[data-qid="${qid}"]`);
        if (card) {
          const inp = card.querySelector('.interrogatio-input');
          if (inp) inp.value = val;
        }
      });
    }

    if (state.selfEval) {
      Object.entries(state.selfEval).forEach(([qid, val]) => {
        const card = document.querySelector(`.interrogatio-card[data-qid="${qid}"]`);
        if (card) {
          if (val === 'recte') card.querySelector('.btn-recte').classList.add('selected');
          if (val === 'prave') card.querySelector('.btn-prave').classList.add('selected');
        }
      });
      updatePensumCScore();
    }
  } catch (e) {
    console.error('Error loading state:', e);
  }
}
