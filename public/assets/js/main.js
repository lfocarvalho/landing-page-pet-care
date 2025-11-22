(function(){
  const root = document.documentElement;
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const saved = localStorage.getItem('theme');
  if ((saved === 'light') || (!saved && prefersLight)) root.classList.add('light');

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const opened = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(opened));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=>{
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const targetId = this.getAttribute('href');
      if (targetId && targetId.length > 1) {
        const el = document.querySelector(targetId);
        if (el) {
          e.preventDefault();
          window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 64, behavior: 'smooth' });
        }
      }
    });
  });

  // Theme toggle
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn){
    themeBtn.addEventListener('click', ()=>{
      const isLight = root.classList.toggle('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      themeBtn.setAttribute('aria-pressed', String(isLight));
    });
  }

  // Try to replace 'Localizações e mapa' screenshot with a user-provided capture
  const mapImg = document.getElementById('mapCaptureImg');
  if (mapImg) {
    const candidates = [
      'fotos projeto/captura.png',
      'fotos projeto/captura.jpg',
      'fotos projeto/captura.jpeg',
      'assets/img/captura.png',
      'assets/img/captura.jpg',
      'assets/img/captura.jpeg'
    ];
    (async () => {
      for (const path of candidates) {
        const url = encodeURI(path);
        try {
          const resp = await fetch(url, { method: 'HEAD', cache: 'no-store' });
          if (resp.ok) {
            mapImg.src = url;
            mapImg.alt = 'Localizações e mapa (captura)';
            break;
          }
        } catch { /* ignore */ }
      }
    })();
  }
})();
