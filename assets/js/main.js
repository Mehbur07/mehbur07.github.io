/* =========================================================
   Mehbur07 — Ortak JavaScript
   1) Menü (header) ve alt bilgi (footer) tek yerden bütün sayfalara eklenir
   2) Açık/koyu tema düğmesi
   3) TR/EN dil seçimi
   4) Pixel yazı (M07) çizimi
   5) Neon sahnedeki parçacık ağı
   6) "STABİL DEĞİL" polis bandının açısı
   7) İletişim formu (Web3Forms)
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Ayarlar: menü ve sosyal medya linkleri ---------- */

  // Menüde görünecek sayfalar. Yeni sayfa eklenince buraya bir satır eklenir
  // ve menü yazısı translations.js dosyasına iki dilde yazılır.
  var NAV = [
    { key: 'nav.home', href: 'index.html', page: 'home' },
    { key: 'nav.projects', href: 'projelerim.html', page: 'projects' },
    { key: 'nav.about', href: 'hakkimda.html', page: 'about' },
    { key: 'nav.social', href: 'sosyal-medya.html', page: 'social' },
    { key: 'nav.contact', href: 'iletisim.html', page: 'contact' }
  ];

  var SOCIALS = [
    { name: 'Kick', url: 'https://kick.com/Mehbur07' },
    { name: 'Twitch', url: 'https://twitch.tv/Mehbur07' },
    { name: 'YouTube', url: 'https://youtube.com/@Mehbur07' },
    { name: 'Instagram', url: 'https://instagram.com/mehbur07' },
    { name: 'Discord', url: 'https://discord.gg/SkQXHFP2Q' },
    { name: 'X', url: 'https://x.com/RealMehbur07X' },
    { name: 'GitHub', url: 'https://github.com/Mehbur07' }
  ];

  var STORE_THEME = 'm07-theme';
  var STORE_LANG = 'm07-lang';
  var DICT = window.M07_TRANSLATIONS || { tr: {}, en: {} };
  var root = document.documentElement;

  // Tarayıcı hafızası (localStorage) bazı gizli modlarda çalışmaz; hata vermesin
  function store(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  // Çeviri bulunamazsa null döner; o zaman sayfadaki orijinal (Türkçe) metin kalır
  function t(key) {
    var lang = root.lang === 'en' ? 'en' : 'tr';
    var value = DICT[lang] && DICT[lang][key];
    if (value == null) value = DICT.tr[key];
    return value == null ? null : value;
  }

  // Sayfadaki orijinal Türkçe metinler (dil TR'ye dönünce geri yazmak için)
  var originals = new WeakMap();
  var originalAttrs = new WeakMap();

  /* ---------- İkonlar (SVG) ---------- */

  var ICON_SUN = '<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var ICON_MOON = '<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  var ICON_MENU = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';

  /* ---------- 1) Header ve footer ---------- */

  function buildHeader(el) {
    var current = document.body.getAttribute('data-page');
    var links = NAV.map(function (item) {
      var active = item.page === current ? ' aria-current="page"' : '';
      return '<li><a href="' + item.href + '"' + active + ' data-i18n="' + item.key + '"></a></li>';
    }).join('');

    el.innerHTML =
      '<a class="skip-link" href="#main" data-i18n="skip"></a>' +
      '<div class="container header-inner">' +
        '<a class="brand" href="index.html" aria-label="Mehbur07">' +
          '<img src="assets/img/mehbur07-logo.jpg" alt="" width="40" height="40">' +
          '<span>MEHBUR<b>07</b></span>' +
        '</a>' +
        '<nav class="site-nav" id="site-nav" data-i18n-attr="aria-label:nav.label">' +
          '<ul>' + links + '</ul>' +
        '</nav>' +
        '<div class="header-controls">' +
          '<div class="lang-switch" role="group" data-i18n-attr="aria-label:lang.label">' +
            '<button type="button" data-lang="tr" lang="tr">TR</button>' +
            '<button type="button" data-lang="en" lang="en">EN</button>' +
          '</div>' +
          '<button type="button" class="icon-btn theme-toggle">' + ICON_SUN + ICON_MOON + '</button>' +
          '<button type="button" class="icon-btn nav-toggle" aria-expanded="false" aria-controls="site-nav" data-i18n-attr="aria-label:nav.menu">' + ICON_MENU + '</button>' +
        '</div>' +
      '</div>';

    // Mobil menü aç/kapat
    var toggle = el.querySelector('.nav-toggle');
    var nav = el.querySelector('.site-nav');
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });

    el.querySelector('.theme-toggle').addEventListener('click', function () {
      setTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
    });

    el.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
    });
  }

  function buildFooter(el) {
    var socials = SOCIALS.map(function (s) {
      return '<li><a class="social-chip" href="' + s.url + '" target="_blank" rel="noopener">' + s.name + '</a></li>';
    }).join('');

    el.innerHTML =
      '<div class="container footer-inner">' +
        '<div class="footer-brand">' +
          '<a class="brand" href="index.html" aria-label="Mehbur07">' +
            '<img src="assets/img/mehbur07-logo.jpg" alt="" width="40" height="40" loading="lazy">' +
            '<span>MEHBUR<b>07</b></span>' +
          '</a>' +
          '<p data-i18n="footer.tagline"></p>' +
        '</div>' +
        '<ul class="social-list" data-i18n-attr="aria-label:footer.social">' + socials + '</ul>' +
        '<p class="footer-copy">© ' + new Date().getFullYear() + ' Mehbur07. <span data-i18n="footer.rights"></span></p>' +
      '</div>';
  }

  /* ---------- 2) Tema ---------- */

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    store(STORE_THEME, theme);
    updateThemeButton();
  }

  function updateThemeButton() {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    var isLight = root.getAttribute('data-theme') === 'light';
    var label = t(isLight ? 'theme.toDark' : 'theme.toLight') || '';
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
  }

  /* ---------- 3) Dil ---------- */

  function setLang(lang) {
    lang = lang === 'en' ? 'en' : 'tr';
    root.lang = lang;
    store(STORE_LANG, lang);
    applyTranslations();
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (!originals.has(el)) originals.set(el, el.textContent);
      var value = t(el.getAttribute('data-i18n'));
      el.textContent = value == null ? originals.get(el) : value;
    });
    // Örnek: data-i18n-attr="aria-label:nav.label"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length !== 2) return;
        var attr = parts[0].trim();
        if (!originalAttrs.has(el)) originalAttrs.set(el, {});
        var saved = originalAttrs.get(el);
        if (!(attr in saved)) saved[attr] = el.getAttribute(attr) || '';
        var value = t(parts[1].trim());
        el.setAttribute(attr, value == null ? saved[attr] : value);
      });
    });
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === root.lang));
    });
    updateThemeButton();
  }

  /* ---------- 4) Pixel yazı ---------- */

  // Her harf 5 sütun x 7 satır; "1" dolu blok, "." boşluk
  var GLYPHS = {
    'M': ['1...1', '11.11', '1.1.1', '1.1.1', '1...1', '1...1', '1...1'],
    '0': ['.111.', '1...1', '1...1', '1...1', '1...1', '1...1', '.111.'],
    '7': ['11111', '....1', '...1.', '..1..', '..1..', '..1..', '..1..'],
    '4': ['...1.', '..11.', '.1.1.', '1..1.', '11111', '...1.', '...1.']   // 404 sayfası için
  };

  function buildPixelText(el) {
    var text = (el.getAttribute('data-pixel') || '').toUpperCase();
    var cell = 10;   // bir bloğun boyutu
    var gap = 1.4;   // bloklar arası boşluk
    var rects = [];
    var col = 0;
    var i = 0;

    text.split('').forEach(function (ch, index) {
      var glyph = GLYPHS[ch];
      if (!glyph) return;
      if (index > 0) col += 1; // harfler arası 1 blok boşluk
      glyph.forEach(function (row, y) {
        row.split('').forEach(function (bit, x) {
          if (bit !== '1') return;
          rects.push('<rect x="' + ((col + x) * cell) + '" y="' + (y * cell) + '" width="' + (cell - gap) +
            '" height="' + (cell - gap) + '" rx="1.2" style="--i:' + (i++) + '"/>');
        });
      });
      col += 5;
    });

    var w = col * cell - gap;
    var h = 7 * cell - gap;
    el.setAttribute('role', 'img');
    el.setAttribute('aria-label', text);
    el.innerHTML = '<svg viewBox="0 0 ' + w + ' ' + h + '" aria-hidden="true">' + rects.join('') + '</svg>';
  }

  /* ---------- 5) Parçacık ağı ---------- */

  function startParticles(canvas) {
    var ctx = canvas.getContext('2d');
    if (!ctx) return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var w = 0, h = 0, pts = [], raf = 0, running = false;
    var LINK = 110; // bu mesafeden yakın noktalar çizgiyle bağlanır

    function resize() {
      var r = canvas.getBoundingClientRect();
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.round(Math.min(60, (w * h) / 11000));
      pts = [];
      for (var i = 0; i < count; i++) {
        pts.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.6 + 0.6,
          c: Math.random() < 0.7 ? '255,230,46' : '157,77,255'
        });
      }
      draw();
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < pts.length; i++) {
        for (var j = i + 1; j < pts.length; j++) {
          var dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            ctx.strokeStyle = 'rgba(255,230,46,' + ((1 - d / LINK) * 0.22).toFixed(3) + ')';
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      pts.forEach(function (p) {
        ctx.fillStyle = 'rgba(' + p.c + ',.85)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function step() {
      pts.forEach(function (p) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; else if (p.y > h) p.y = 0;
      });
      draw();
      if (running) raf = requestAnimationFrame(step);
    }

    function play() { if (!running && !reduce) { running = true; raf = requestAnimationFrame(step); } }
    function pause() { running = false; cancelAnimationFrame(raf); }

    resize();
    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas);
    // Ekranda görünmüyorsa animasyonu durdur (pil ve işlemci tasarrufu)
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries[0].isIntersecting ? play() : pause();
      }).observe(canvas);
    } else {
      play();
    }
  }

  /* ---------- 6) Polis bandı ---------- */

  // Bant, kartın sol üst köşesinden sağ alt köşesine tam çapraz uzansın diye
  // açısı ve uzunluğu kartın boyutuna göre hesaplanır.
  function fitTape(tape) {
    var card = tape.parentElement;
    function fit() {
      var w = card.offsetWidth, h = card.offsetHeight;
      if (!w || !h) return;
      var angle = Math.atan2(h, w) * 180 / Math.PI;
      tape.style.width = Math.ceil(Math.sqrt(w * w + h * h) + 80) + 'px';
      tape.style.transform = 'translate(-50%, -50%) rotate(' + angle.toFixed(2) + 'deg)';
    }
    fit();
    if ('ResizeObserver' in window) new ResizeObserver(fit).observe(card);
  }

  /* ---------- 7) İletişim formu ---------- */

  // Form sayfayı yenilemeden Web3Forms'a gönderilir, sonuç formun altında
  // gösterilir. JavaScript kapalıysa form normal yoldan yine gönderilir.
  function setupContactForm(form) {
    var status = form.querySelector('.form-status');
    var button = form.querySelector('button[type="submit"]');
    var keyInput = form.querySelector('input[name="access_key"]');

    // Durum mesajı data-i18n ile yazılır; dil değişince kendiliğinden çevrilir
    function show(key, state) {
      status.setAttribute('data-i18n', key);
      status.textContent = t(key);
      if (state) status.setAttribute('data-state', state);
      else status.removeAttribute('data-state');
      status.hidden = false;
    }

    // Erişim anahtarı yazılmamışsa form kullanılamaz
    if (!keyInput || !keyInput.value.trim()) {
      button.disabled = true;
      show('form.notReady', 'error');
      return;
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (button.disabled) return;   // çift tıklamada iki kez gönderme

      var data = {};
      new FormData(form).forEach(function (value, name) { data[name] = value; });

      button.disabled = true;
      show('form.sending');

      fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(function (res) {
          return res.json().catch(function () { return {}; }).then(function (json) {
            if (res.ok && json.success) {
              show('form.success', 'success');
              form.reset();
            } else {
              show('form.error', 'error');
            }
          });
        })
        .catch(function () { show('form.network', 'error'); })
        .then(function () { button.disabled = false; });
    });
  }

  /* ---------- Başlat ---------- */

  var header = document.querySelector('[data-layout="header"]');
  var footer = document.querySelector('[data-layout="footer"]');
  if (header) buildHeader(header);
  if (footer) buildFooter(footer);

  if (!root.getAttribute('data-theme')) root.setAttribute('data-theme', 'dark');
  root.lang = root.lang === 'en' ? 'en' : 'tr';
  applyTranslations();

  document.querySelectorAll('[data-pixel]').forEach(buildPixelText);
  document.querySelectorAll('canvas.particles').forEach(startParticles);
  document.querySelectorAll('.tape').forEach(fitTape);
  document.querySelectorAll('[data-contact-form]').forEach(setupContactForm);
})();
