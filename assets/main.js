'use strict';

// ── 1. DOM refs ────────────────────────────────────────────
const header       = document.getElementById('site-header');
const navToggle    = document.querySelector('.nav-toggle');
const mainNav      = document.getElementById('main-nav');
const navLinks     = document.querySelectorAll('.nav-link');
const backToTop    = document.getElementById('back-to-top');
const signupForm   = document.getElementById('signup-form');
const formFeedback = document.getElementById('form-feedback');
const sections     = document.querySelectorAll('main section[id]');

// ── 2. Nav mobile (hamburger toggle) ───────────────────────
function openNav() {
  mainNav.classList.add('is-open');
  navToggle.setAttribute('aria-expanded', 'true');
  navToggle.setAttribute('aria-label', 'Chiudi menu di navigazione');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  mainNav.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Apri menu di navigazione');
  document.body.style.overflow = '';
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    if (expanded) {
      closeNav();
    } else {
      openNav();
    }
  });

  // Chiudi cliccando fuori dal menu (sull'overlay)
  document.addEventListener('click', e => {
    if (
      mainNav.classList.contains('is-open') &&
      !mainNav.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      closeNav();
    }
  });

  // Chiudi con tasto Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
      closeNav();
      navToggle.focus();
    }
  });
}

// ── 3. Chiudi nav al click su link o CTA ───────────────────
const navClickables = document.querySelectorAll('.nav-link, .nav-cta');
navClickables.forEach(link => {
  link.addEventListener('click', () => {
    if (navToggle && mainNav) {
      closeNav();
    }
  });
});

// ── 4. Header scroll shadow ────────────────────────────────
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// ── 5. Back-to-top ─────────────────────────────────────────
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.hidden = window.scrollY < 400;
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── 6. Active nav link on scroll ───────────────────────────
const observerOptions = {
  rootMargin: '-40% 0px -55% 0px',
  threshold: 0,
};

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, observerOptions);

sections.forEach(sec => navObserver.observe(sec));

// ── 7. Accordion ───────────────────────────────────────────
document.querySelectorAll('.accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    const panelId  = trigger.getAttribute('aria-controls');
    const panel    = document.getElementById(panelId);

    // Close siblings in same accordion
    const accordion = trigger.closest('.accordion');
    accordion.querySelectorAll('.accordion-trigger').forEach(t => {
      if (t !== trigger) {
        t.setAttribute('aria-expanded', 'false');
        const p = document.getElementById(t.getAttribute('aria-controls'));
        if (p) p.hidden = true;
      }
    });

    trigger.setAttribute('aria-expanded', String(!expanded));
    if (panel) panel.hidden = expanded;
  });
});

// ── 8. Signup form ─────────────────────────────────────────
if (signupForm && formFeedback) {
  signupForm.addEventListener('submit', e => {
    e.preventDefault();

    // Honeypot check
    const hp = signupForm.querySelector('.hp-field');
    if (hp && hp.value) return;

    const emailInput = signupForm.querySelector('[name="email"]');
    if (!emailInput || !emailInput.value.trim()) {
      formFeedback.textContent = 'Inserisci un indirizzo email valido.';
      formFeedback.className   = 'form-feedback error';
      emailInput && emailInput.focus();
      return;
    }

    // Simulate async submit — replace with real fetch to your ESP
    formFeedback.textContent = '';
    formFeedback.className   = 'form-feedback';

    setTimeout(() => {
      formFeedback.textContent = '✓ Iscritto! Ti aggiorneremo presto.';
      formFeedback.className   = 'form-feedback success';
      signupForm.reset();
    }, 400);
  });
}

// ── 9. Ospiti / Espositori — array-driven scrollable cards ─
(function initOspiti() {
  const grid = document.getElementById('ospiti-grid');
  if (!grid) return;

  // ── Dati ospiti: aggiungere/modificare qui ──
  const OSPITI = [
    {
      foto: '',
      nome: 'Marta Ferretti',
      ruolo: 'Fondatrice · AquaGrow Italia',
      bio: 'Pioniera dell\'acquaponica italiana, sviluppa sistemi integrati pesce-pianta per ristorazione sostenibile.',
    },
    {
      foto: '',
      nome: 'Lorenzo Bianchi',
      ruolo: 'Ricercatore · Università di Bologna',
      bio: 'Studioso di idroponica e colture aeroponiche applicate all\'horticulture urbana. Speaker e autore.',
    },
  ];

  OSPITI.forEach((ospite) => {
    const article = document.createElement('article');
    article.className = 'ospiti-card';
    article.setAttribute('role', 'listitem');

    const imgDiv = document.createElement('div');
    imgDiv.className = 'ospiti-card-img';
    if (ospite.foto) {
      const img = document.createElement('img');
      img.src = ospite.foto;
      img.alt = ospite.nome;
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
      imgDiv.appendChild(img);
    } else {
      imgDiv.setAttribute('role', 'img');
      imgDiv.setAttribute('aria-label', `Foto ${ospite.nome} — da sostituire`);
    }

    const body = document.createElement('div');
    body.className = 'ospiti-card-body';

    const name = document.createElement('h3');
    name.className = 'ospiti-card-name';
    name.textContent = ospite.nome;

    const role = document.createElement('p');
    role.className = 'ospiti-card-role';
    role.textContent = ospite.ruolo;

    const bio = document.createElement('p');
    bio.className = 'ospiti-card-bio';
    bio.textContent = ospite.bio;

    body.appendChild(name);
    body.appendChild(role);
    body.appendChild(bio);
    article.appendChild(imgDiv);
    article.appendChild(body);
    grid.appendChild(article);
  });
})();

// ── 10. Slideshow Gallery ───────────────────────────────────
(function initSlideshow() {
  const track    = document.getElementById('slideshow-track');
  const dotsWrap = document.getElementById('slideshow-dots');
  const prevBtn  = document.getElementById('slideshow-prev');
  const nextBtn  = document.getElementById('slideshow-next');
  if (!track) return;

  const IMAGES = [
    './assets/immagine_1.jpg',
    './assets/immagine_2.jpg',
    './assets/immagine_3.jpg',
    './assets/immagine_4.jpg',
    './assets/immagine_5.jpg',
    './assets/immagine_6.jpg',
    './assets/immagine_7.jpg',
  ];

  let current = 0;
  let timer   = null;

  // Build slides
  IMAGES.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'slideshow-slide' + (i === 0 ? ' is-active' : '');

    const img = document.createElement('img');
    img.src      = src;
    img.alt      = `Le Serre dei Giardini — immagine ${i + 1}`;
    img.loading  = i === 0 ? 'eager' : 'lazy';
    img.draggable = false;
    slide.appendChild(img);
    track.appendChild(slide);
  });

  // Dots
  function renderDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = '';
    IMAGES.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.className = 'slideshow-dot' + (i === current ? ' is-active' : '');
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-label', `Immagine ${i + 1}`);
      btn.setAttribute('aria-selected', String(i === current));
      btn.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(btn);
    });
  }

  function goTo(index) {
    const slides = track.querySelectorAll('.slideshow-slide');
    slides[current].classList.remove('is-active');
    current = (index + IMAGES.length) % IMAGES.length;
    slides[current].classList.add('is-active');
    renderDots();
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 4500);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

  // Pause on hover/focus
  const slideshowEl = document.getElementById('slideshow');
  if (slideshowEl) {
    slideshowEl.addEventListener('mouseenter', () => clearInterval(timer));
    slideshowEl.addEventListener('mouseleave', resetTimer);
  }

  // Touch swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
  }, { passive: true });

  renderDots();
  resetTimer();
})();

// ── 11. Map lightbox con zoom + pan ─────────────────────────
(function initMapLightbox() {
  const lightbox   = document.getElementById('map-lightbox');
  const backdrop   = document.getElementById('map-lightbox-backdrop');
  const closeBtn   = document.getElementById('map-lightbox-close');
  const zoomBtn    = document.getElementById('map-zoom-btn');
  const mapImg     = document.getElementById('map-img');
  const lbImg      = lightbox && lightbox.querySelector('.map-lightbox-img');
  const hint       = document.getElementById('map-lightbox-hint');
  if (!lightbox) return;

  function hideHint() {
    if (hint) hint.classList.add('hide');
  }

  // ── zoom+pan state ──
  let scale = 1, tx = 0, ty = 0;
  let dragging = false, startX = 0, startY = 0;
  // touch pinch
  let lastDist = 0;

  function applyTransform() {
    lbImg.style.transform = `translate(${tx}px,${ty}px) scale(${scale})`;
    lbImg.style.cursor = scale > 1 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in';
  }

  function resetTransform() {
    scale = 1; tx = 0; ty = 0;
    lbImg.style.transition = 'transform .3s ease';
    applyTransform();
    setTimeout(() => { lbImg.style.transition = ''; }, 300);
    // reset hint visibility for next open
    if (hint) hint.classList.remove('hide');
  }

  function clampTranslate() {
    // allow panning only when zoomed in
    const maxShift = 500 * (scale - 1);
    tx = Math.max(-maxShift, Math.min(maxShift, tx));
    ty = Math.max(-maxShift, Math.min(maxShift, ty));
  }

  // wheel zoom
  lbImg && lbImg.addEventListener('wheel', e => {
    e.preventDefault();
    hideHint();
    const step = e.deltaY < 0 ? 0.25 : -0.25;
    scale = Math.min(5, Math.max(1, scale + step));
    if (scale === 1) { tx = 0; ty = 0; }
    clampTranslate();
    applyTransform();
  }, { passive: false });

  // drag to pan
  lbImg && lbImg.addEventListener('mousedown', e => {
    if (scale <= 1) return;
    hideHint();
    dragging = true;
    startX = e.clientX - tx;
    startY = e.clientY - ty;
    applyTransform();
  });
  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    tx = e.clientX - startX;
    ty = e.clientY - startY;
    clampTranslate();
    applyTransform();
  });
  document.addEventListener('mouseup', () => {
    dragging = false;
    if (lbImg) applyTransform();
  });

  // touch drag+pinch
  lbImg && lbImg.addEventListener('touchstart', e => {
    if (e.touches.length === 1 && scale > 1) {
      dragging = true;
      startX = e.touches[0].clientX - tx;
      startY = e.touches[0].clientY - ty;
    }
    if (e.touches.length === 2) {
      lastDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    }
  }, { passive: true });
  lbImg && lbImg.addEventListener('touchmove', e => {
    e.preventDefault();
    if (e.touches.length === 1 && dragging) {
      tx = e.touches[0].clientX - startX;
      ty = e.touches[0].clientY - startY;
      clampTranslate();
      applyTransform();
    }
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      scale = Math.min(5, Math.max(1, scale * (dist / lastDist)));
      lastDist = dist;
      if (scale === 1) { tx = 0; ty = 0; }
      clampTranslate();
      applyTransform();
    }
  }, { passive: false });
  lbImg && lbImg.addEventListener('touchend', () => { dragging = false; });

  // double-click to reset
  lbImg && lbImg.addEventListener('dblclick', resetTransform);

  // ── open / close ──
  function openLightbox() {
    resetTransform();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn && closeBtn.focus();
  }

  function closeLightbox() {
    resetTransform();
    lightbox.hidden = true;
    document.body.style.overflow = '';
    zoomBtn && zoomBtn.focus();
  }

  if (zoomBtn) zoomBtn.addEventListener('click', openLightbox);
  if (mapImg)  mapImg.addEventListener('click', openLightbox);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
})();
