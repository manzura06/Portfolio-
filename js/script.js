(function () {
  'use strict';

  /* ===== Tarjimalar / Translations ===== */
  var I18N = {
    uz: {
      skip: 'Asosiy mazmunga o‘tish',
      theme: 'Rejimni almashtirish',
      nav_about: 'Haqida', nav_skills: 'Ko‘nikmalar', nav_exp: 'Tajriba',
      nav_edu: 'Ta’lim', nav_ach: 'Yutuqlar', nav_contact: 'Aloqa',
      hero_greet: 'Salom, men',
      hero_role: 'Talaba va matematika o‘qituvchisi',
      hero_lead: 'Farg‘ona Davlat Texnika Universitetida axborot tizimlari va texnologiyalari yo‘nalishida o‘qiyman va o‘quv markazida o‘quvchilarga matematikadan dars beraman.',
      hero_cta1: 'Bog‘lanish', hero_cta2: 'Tajribamni ko‘rish',
      chip_math: 'Matematika', chip_it: 'Axborot texnologiyalari', chip_ai: 'Sun’iy intellekt fakulteti',
      about_title: 'Mantiq bilan o‘rgataman, kod bilan yarataman.',
      about_text: 'Matematika o‘qituvchisi sifatida o‘quvchilarning mantiqiy fikrlash qobiliyatini rivojlantiraman. Talaba sifatida esa axborot texnologiyalari va sun’iy intellekt fakultetida bilim va amaliy ko‘nikmalarimni oshirib boraman.',
      venn_a: 'Matematika', venn_b: 'Axborot texnologiyalari', venn_c: 'Mantiqiy fikrlash',
      skills_title: 'Ko‘nikmalar',
      sk_code: 'Dasturlash', sk_tools: 'Vositalar', sk_general: 'Umumiy', sk_computer: 'Kompyuter texnologiyalari',
      exp_title: 'Ish tajribasi',
      exp_date: '26.06.2026 – Hozirgi vaqt',
      exp_center: 'o‘quv markazi', exp_role: 'Matematika o‘qituvchisi', exp_place: 'Farg‘ona',
      exp_b1: 'O‘quvchilarga matematika fanidan dars berish va ularning mantiqiy fikrlash qobiliyatini rivojlantirish.',
      exp_b2: 'Dars jarayonlarini zamonaviy metodikalar asosida tashkil etish va o‘quvchilar natijalarini nazorat qilish.',
      edu_title: 'Ta’lim',
      edu_date: '09.09.2024 – Hozirda (talaba)',
      edu_school: 'Farg‘ona Davlat Texnika Universiteti',
      edu_degree: 'Bakalavr',
      edu_fac_l: 'Fakultet', edu_fac: 'Axborot texnologiyalari va sun’iy intellekt',
      edu_dir_l: 'Yo‘nalish', edu_dir: 'Axborot tizimlari va texnologiyalari (Bakalavr)',
      edu_b1: 'O‘quv jarayonida akademik va amaliy tadbirlarda faol ishtirok etganman.',
      ach_title: 'Yutuqlar',
      ach_1: 'Sertifikatlar bilan taqdirlanganman.',
      ach_2: 'O‘quv jarayonida turli tadbirlarda ishtirok etib, bilim va ko‘nikmalarimni rivojlantirdim.',
      contact_title: 'Keling, gaplashamiz.',
      contact_phone: 'Telefon', contact_addr: 'Manzil',
      contact_addr_v: 'Farg‘ona viloyati, Marg‘ilon shahar, 41-uy',
      contact_copy: 'Emailni nusxalash',
      copied: 'Email nusxalandi'
    },
    en: {
      skip: 'Skip to main content',
      theme: 'Toggle theme',
      nav_about: 'About', nav_skills: 'Skills', nav_exp: 'Experience',
      nav_edu: 'Education', nav_ach: 'Achievements', nav_contact: 'Contact',
      hero_greet: 'Hi, I’m',
      hero_role: 'Student and mathematics teacher',
      hero_lead: 'I study Information Systems and Technologies at Fergana State Technical University and teach mathematics to students at a learning center.',
      hero_cta1: 'Get in touch', hero_cta2: 'See my experience',
      chip_math: 'Mathematics', chip_it: 'Information technology', chip_ai: 'AI faculty',
      about_title: 'I teach with logic and build with code.',
      about_text: 'As a mathematics teacher, I help students develop logical thinking. As a student of the Faculty of Information Technologies and Artificial Intelligence, I keep growing my knowledge and practical skills.',
      venn_a: 'Mathematics', venn_b: 'Information technology', venn_c: 'Logical thinking',
      skills_title: 'Skills',
      sk_code: 'Programming', sk_tools: 'Tools', sk_general: 'General', sk_computer: 'Computer technologies',
      exp_title: 'Work experience',
      exp_date: '26.06.2026 – Present',
      exp_center: 'learning center', exp_role: 'Mathematics teacher', exp_place: 'Fergana',
      exp_b1: 'Teaching mathematics to students and developing their logical thinking skills.',
      exp_b2: 'Organizing lessons with modern teaching methods and monitoring student results.',
      edu_title: 'Education',
      edu_date: '09.09.2024 – Present (student)',
      edu_school: 'Fergana State Technical University',
      edu_degree: 'Bachelor’s degree',
      edu_fac_l: 'Faculty', edu_fac: 'Information Technologies and Artificial Intelligence',
      edu_dir_l: 'Major', edu_dir: 'Information Systems and Technologies (Bachelor’s)',
      edu_b1: 'Actively took part in academic and practical events during my studies.',
      ach_title: 'Achievements',
      ach_1: 'Awarded with certificates.',
      ach_2: 'Took part in various events and developed my knowledge and skills.',
      contact_title: 'Let’s talk.',
      contact_phone: 'Phone', contact_addr: 'Address',
      contact_addr_v: 'House 41, Margilan city, Fergana region',
      contact_copy: 'Copy email',
      copied: 'Email copied'
    }
  };

  var root = document.documentElement;
  var lang = root.getAttribute('lang') === 'en' ? 'en' : 'uz';

  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  /* ===== Til ===== */
  function applyLang(l) {
    lang = l;
    var d = I18N[l];
    root.setAttribute('lang', l);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (d[key] != null) el.textContent = d[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (d[key]) el.setAttribute('aria-label', d[key]);
    });
    document.querySelectorAll('.seg button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === l));
    });
    var vennLabel = l === 'en' ? 'Overlap of mathematics and information technology' : 'Matematika va axborot texnologiyalari kesishmasi';
    var venn = document.querySelector('.venn');
    if (venn) venn.setAttribute('aria-label', vennLabel);
    document.title = l === 'en' ? 'Manzura Mo‘sinova — Portfolio' : 'Mo‘sinova Manzura — Portfolio';
  }

  document.querySelectorAll('.seg button').forEach(function (b) {
    b.addEventListener('click', function () {
      applyLang(b.dataset.lang);
      store('lang', b.dataset.lang);
    });
  });

  /* ===== Tema ===== */
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    if (themeMeta) themeMeta.setAttribute('content', t === 'dark' ? '#0b1129' : '#f6f7fc');
    readColors();
    if (reduced) draw(0);
  }
  document.getElementById('themeBtn').addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    store('theme', next);
  });

  /* ===== Email nusxalash ===== */
  var toast = document.getElementById('toast');
  var toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2000);
  }
  document.getElementById('copyBtn').addEventListener('click', function () {
    var mail = document.getElementById('mail').textContent.trim();
    function done() { showToast(I18N[lang].copied); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(mail).then(done, done);
    } else {
      var ta = document.createElement('textarea');
      ta.value = mail; document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta); done();
    }
  });

  /* ===== Hero: koordinata tekisligi va sinus to'lqini ===== */
  var canvas = document.getElementById('wave');
  var ctx = canvas.getContext('2d');
  var hero = document.getElementById('top');
  var formulaEl = document.getElementById('formula');
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var W = 0, H = 0, dpr = 1;
  var mouse = { x: 0.5, y: 0.5 }, smooth = { x: 0.5, y: 0.5 };
  var colors = { grid: '#ccc', accent: '#5b6cff', blush: '#ff8fab', ink: '#000' };
  var running = true, frame = 0;

  function readColors() {
    var cs = getComputedStyle(root);
    colors.grid = cs.getPropertyValue('--grid').trim();
    colors.accent = cs.getPropertyValue('--accent').trim();
    colors.blush = cs.getPropertyValue('--blush').trim();
    colors.ink = cs.getPropertyValue('--ink').trim();
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = hero.clientWidth; H = hero.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw(performance.now() / 1000);
  }

  function curve(t, amp, k, phase, color, width) {
    var mid = H * 0.5;
    ctx.beginPath();
    for (var x = 0; x <= W; x += 4) {
      var y = mid + Math.sin((x / W) * Math.PI * 2 * k + phase + t) * amp;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = color; ctx.lineWidth = width; ctx.lineCap = 'round';
    ctx.stroke();
  }

  function draw(time) {
    ctx.clearRect(0, 0, W, H);

    /* panjara */
    var step = 44;
    ctx.lineWidth = 1; ctx.strokeStyle = colors.grid;
    ctx.beginPath();
    for (var gx = 0; gx <= W; gx += step) { ctx.moveTo(gx + .5, 0); ctx.lineTo(gx + .5, H); }
    for (var gy = 0; gy <= H; gy += step) { ctx.moveTo(0, gy + .5); ctx.lineTo(W, gy + .5); }
    ctx.stroke();

    /* o'qlar */
    ctx.strokeStyle = colors.ink; ctx.globalAlpha = .28; ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2);
    ctx.stroke();
    ctx.globalAlpha = 1;

    var k = 1.4 + smooth.x * 2.6;
    var amp = H * (0.07 + smooth.y * 0.16);
    var t = reduced ? 0 : time * 1.1;

    ctx.globalAlpha = .9;
    curve(t, amp, k, 0, colors.accent, 3);
    ctx.globalAlpha = .75;
    curve(t * 0.8, amp * 0.6, k * 1.5, 1.6, colors.blush, 2.5);
    ctx.globalAlpha = 1;

    /* egri chiziq bo'ylab harakatlanuvchi nuqta */
    var px = ((time * 0.06) % 1) * W;
    if (reduced) px = W * smooth.x;
    var py = H / 2 + Math.sin((px / W) * Math.PI * 2 * k + t) * amp;
    ctx.fillStyle = colors.ink;
    ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = colors.accent; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(px, py, 14, 0, Math.PI * 2); ctx.stroke();

    if (frame++ % 6 === 0 && formulaEl) {
      var a = (0.5 + smooth.y * 1.5).toFixed(1);
      formulaEl.textContent = 'f(x) = ' + a + '·sin(' + k.toFixed(1) + 'x)';
    }
  }

  function loop(ms) {
    if (!running) return;
    smooth.x += (mouse.x - smooth.x) * 0.06;
    smooth.y += (mouse.y - smooth.y) * 0.06;
    draw(ms / 1000);
    requestAnimationFrame(loop);
  }

  hero.addEventListener('pointermove', function (e) {
    var r = hero.getBoundingClientRect();
    mouse.x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    mouse.y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    if (reduced) { smooth.x = mouse.x; smooth.y = mouse.y; draw(0); }
  });

  /* ko'rinmay qolganda animatsiyani to'xtatish */
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      var vis = entries[0].isIntersecting;
      if (vis && !running && !reduced) { running = true; requestAnimationFrame(loop); }
      else if (!vis) running = false;
    }).observe(hero);
  }

  window.addEventListener('resize', resize);

  /* ===== Ishga tushirish ===== */
  document.getElementById('year').textContent = new Date().getFullYear();
  applyLang(lang);
  readColors();
  resize();
  if (reduced) { running = false; draw(0); } else { requestAnimationFrame(loop); }
})();
