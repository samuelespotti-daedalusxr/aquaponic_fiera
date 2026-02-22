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
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('is-open', !expanded);
  });
}

// ── 3. Chiudi nav al click su link ─────────────────────────
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navToggle && mainNav) {
      navToggle.setAttribute('aria-expanded', 'false');
      mainNav.classList.remove('is-open');
    }
  });
});

// ── 4. Header scroll shadow ────────────────────────────────
if (header) {
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ── 5. Accordion (programma + FAQ) ─────────────────────────
document.querySelectorAll('.accordion-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    const panelId  = trigger.getAttribute('aria-controls');
    const panel    = panelId ? document.getElementById(panelId) : null;

    // Close all others in same accordion
    const parentAccordion = trigger.closest('.accordion');
    if (parentAccordion) {
      parentAccordion.querySelectorAll('.accordion-trigger').forEach(t => {
        if (t !== trigger) {
          t.setAttribute('aria-expanded', 'false');
          const pid = t.getAttribute('aria-controls');
          const p   = pid ? document.getElementById(pid) : null;
          if (p) p.hidden = true;
        }
      });
    }

    trigger.setAttribute('aria-expanded', String(!expanded));
    if (panel) panel.hidden = expanded;
  });
});

// ── 6. Active nav link (IntersectionObserver) ──────────────
if ('IntersectionObserver' in window && sections.length) {
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'is-active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  // rootMargin: top -40% keeps nav from activating too early when section
  // is only just entering the viewport; bottom -55% ensures the active link
  // updates as the next section scrolls in from below.
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(sec => navObserver.observe(sec));
}

// ── 7. Back-to-top ─────────────────────────────────────────
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.hidden = window.scrollY < 400;
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── 8. CTA click tracking (data-cta) ─────────────────────
document.querySelectorAll('[data-cta]').forEach(el => {
  el.addEventListener('click', () => {
    const ctaId = el.dataset.cta;
    console.log('CTA clicked:', ctaId);
    // GA4: gtag('event', 'cta_click', { cta_id: ctaId });
    // Matomo: _paq.push(['trackEvent', 'CTA', 'click', ctaId]);
  });
});

// ── 9. Form signup ─────────────────────────────────────────
if (signupForm && formFeedback) {
  signupForm.addEventListener('submit', e => {
    e.preventDefault();

    // Honeypot check: silently abort if a bot filled the hidden field.
    // No user feedback is intentional — bots shouldn't know they were detected.
    const hp = signupForm.querySelector('[name="website"]');
    if (hp && hp.value.trim() !== '') return;

    const nome    = signupForm.querySelector('[name="nome"]');
    const email   = signupForm.querySelector('[name="email"]');
    const profilo = signupForm.querySelector('[name="profilo"]');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome || nome.value.trim() === '') {
      formFeedback.textContent = 'Inserisci il tuo nome.';
      formFeedback.className = 'form-feedback error';
      nome && nome.focus();
      return;
    }
    if (!email || !emailPattern.test(email.value.trim())) {
      formFeedback.textContent = 'Inserisci un\'email valida.';
      formFeedback.className = 'form-feedback error';
      email && email.focus();
      return;
    }
    if (!profilo || profilo.value === '') {
      formFeedback.textContent = 'Seleziona il tuo profilo.';
      formFeedback.className = 'form-feedback error';
      profilo && profilo.focus();
      return;
    }

    // Success feedback
    formFeedback.textContent = 'Grazie! Ti aggiorneremo su OLTRE LA TERRA.';
    formFeedback.className = 'form-feedback success';
    signupForm.reset();
  });
}

// ── 10. Smooth scroll polyfill check ───────────────────────
// CSS già ha scroll-behavior: smooth su html. Nessun polyfill necessario per browser moderni.

// ── 11. Swipe Gallery ──────────────────────────────────────
(function () {
  const IMAGES = [
    './assets/gallery/gallery-01.jpg',
    './assets/gallery/gallery-02.jpg',
    './assets/gallery/gallery-03.jpg',
    './assets/gallery/gallery-04.jpg',
    './assets/gallery/gallery-05.jpg',
    './assets/gallery/gallery-06.jpg',
  ];

  // Fallback gradients when images are not available yet
  const GRADIENTS = [
    'linear-gradient(135deg,#1F3D2B 0%,#6E8F74 100%)',
    'linear-gradient(135deg,#6E8F74 0%,#B7D36B 100%)',
    'linear-gradient(135deg,#B86B4B 0%,#1F3D2B 100%)',
    'linear-gradient(135deg,#1C1F1D 0%,#6E8F74 100%)',
    'linear-gradient(135deg,#B7D36B 0%,#B86B4B 100%)',
    'linear-gradient(135deg,#6E8F74 0%,#1F3D2B 100%)',
  ];

  const STACK_SIZE  = 4;   // Number of visible cards in stack
  const SWIPE_THRESHOLD = 90;
  const FLY_ROTATE  = 25;
  const FLY_DURATION = 320; // ms

  const stack    = document.getElementById('gallery-stack');
  const dotsWrap = document.getElementById('gallery-dots');

  if (!stack || !dotsWrap) return;

  let current = 0;       // index of the top card image
  let isDragging = false;
  let startX = 0, startY = 0;
  let currentX = 0, currentY = 0;
  let topCard = null;
  let animating = false;

  // ── Helpers ────────────────────────────────────────────────
  function mod(i) {
    return ((i % IMAGES.length) + IMAGES.length) % IMAGES.length;
  }

  // ── Dots ───────────────────────────────────────────────────
  function renderDots() {
    dotsWrap.innerHTML = '';
    for (let i = 0; i < IMAGES.length; i++) {
      const d = document.createElement('button');
      d.className = 'gallery-dot' + (i === mod(current) ? ' is-active' : '');
      d.setAttribute('aria-label', 'Immagine ' + (i + 1));
      d.dataset.index = i;
      d.addEventListener('click', () => {
        if (animating) return;
        const delta = ((i - current) % IMAGES.length + IMAGES.length) % IMAGES.length;
        if (delta === 0) return;
        // advance `delta` times (fly-away each)
        let count = 0;
        function step() {
          if (count >= delta) return;
          count++;
          flyAway(1, step);
        }
        flyAway(1, step);
      });
      dotsWrap.appendChild(d);
    }
  }

  // ── Card element factory ────────────────────────────────────
  function makeCard(imgIndex, pos) {
    const el = document.createElement('div');
    el.className = 'swipe-card';
    el.dataset.pos = pos;

    const img = new Image();
    img.alt = 'Galleria immagine ' + (imgIndex + 1);
    img.src = IMAGES[imgIndex];
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;user-select:none;pointer-events:none;';
    img.draggable = false;

    // On error: show gradient placeholder
    img.addEventListener('error', () => {
      el.style.background = GRADIENTS[imgIndex % GRADIENTS.length];
    });

    el.appendChild(img);
    return el;
  }

  // ── Render stack ────────────────────────────────────────────
  function renderStack() {
    stack.innerHTML = '';
    for (let pos = STACK_SIZE - 1; pos >= 0; pos--) {
      const imgIdx = mod(current + pos);
      const card   = makeCard(imgIdx, pos);
      stack.appendChild(card);
    }
    topCard = stack.querySelector('.swipe-card[data-pos="0"]');
    bindDrag(topCard);
    renderDots();
  }

  // ── Apply real-time transform during drag ──────────────────
  function applyDrag(dx, dy) {
    if (!topCard) return;
    const rotate = dx * 0.06;
    topCard.style.transform = `translateX(${dx}px) translateY(${dy}px) rotate(${rotate}deg)`;
    topCard.style.transition = 'none';

    // Card pos=1 scales toward 1.0 proportionally to drag distance
    const progress = Math.min(Math.abs(dx) / SWIPE_THRESHOLD, 1);
    const nextCard = stack.querySelector('.swipe-card[data-pos="1"]');
    if (nextCard) {
      const fromScale = 0.94;
      const fromTY    = 18;
      const scaleNow  = fromScale + (1 - fromScale) * progress;
      const tyNow     = fromTY - fromTY * progress;
      nextCard.style.transform = `scale(${scaleNow}) translateY(${tyNow}px)`;
      nextCard.style.transition = 'none';
    }
  }

  // ── Fly-away animation ─────────────────────────────────────
  function flyAway(direction, callback) {
    if (!topCard || animating) return;
    animating = true;

    const flyX    = direction * (window.innerWidth + 200);
    const rotate  = direction * FLY_ROTATE;

    topCard.style.transition = `transform ${FLY_DURATION}ms cubic-bezier(0.16,1,0.3,1), opacity ${FLY_DURATION}ms ease`;
    topCard.style.transform  = `translateX(${flyX}px) rotate(${rotate}deg)`;
    topCard.style.opacity    = '0';

    // Also snap card pos=1 to card pos=0 position
    const nextCard = stack.querySelector('.swipe-card[data-pos="1"]');
    if (nextCard) {
      nextCard.style.transition = `transform ${FLY_DURATION}ms cubic-bezier(0.16,1,0.3,1)`;
      nextCard.style.transform  = 'scale(1) translateY(0px)';
    }

    setTimeout(() => {
      current = mod(current + 1);
      animating = false;
      renderStack();
      if (typeof callback === 'function') callback();
    }, FLY_DURATION);
  }

  // ── Snap back ──────────────────────────────────────────────
  function snapBack() {
    if (!topCard) return;
    topCard.style.transition = `transform 320ms cubic-bezier(0.16,1,0.3,1)`;
    topCard.style.transform  = '';

    const nextCard = stack.querySelector('.swipe-card[data-pos="1"]');
    if (nextCard) {
      nextCard.style.transition = `transform 320ms cubic-bezier(0.16,1,0.3,1)`;
      nextCard.style.transform  = '';
    }
  }

  // ── Drag binding ───────────────────────────────────────────
  function bindDrag(card) {
    if (!card) return;

    // Mouse
    card.addEventListener('mousedown', onMouseDown);

    // Touch
    card.addEventListener('touchstart', onTouchStart, { passive: true });
  }

  function onMouseDown(e) {
    if (animating) return;
    e.preventDefault();
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    currentX = 0;
    currentY = 0;
    topCard.style.cursor = 'grabbing';

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup',   onMouseUp);
  }

  function onMouseMove(e) {
    if (!isDragging) return;
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    applyDrag(currentX, currentY);
  }

  function onMouseUp() {
    if (!isDragging) return;
    isDragging = false;
    topCard.style.cursor = 'grab';
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup',   onMouseUp);

    if (Math.abs(currentX) >= SWIPE_THRESHOLD) {
      flyAway(currentX > 0 ? 1 : -1);
    } else {
      snapBack();
    }
  }

  function onTouchStart(e) {
    if (animating) return;
    const touch = e.touches[0];
    isDragging = true;
    startX = touch.clientX;
    startY = touch.clientY;
    currentX = 0;
    currentY = 0;

    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend',  onTouchEnd);
  }

  function onTouchMove(e) {
    if (!isDragging) return;
    const touch = e.touches[0];
    currentX = touch.clientX - startX;
    currentY = touch.clientY - startY;

    // Only prevent default if horizontal drag dominates (avoid blocking scroll)
    if (Math.abs(currentX) > Math.abs(currentY)) {
      e.preventDefault();
    }
    applyDrag(currentX, currentY);
  }

  function onTouchEnd() {
    if (!isDragging) return;
    isDragging = false;
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('touchend',  onTouchEnd);

    if (Math.abs(currentX) >= SWIPE_THRESHOLD) {
      flyAway(currentX > 0 ? 1 : -1);
    } else {
      snapBack();
    }
  }

  // ── Keyboard navigation ────────────────────────────────────
  stack.setAttribute('tabindex', '0');
  stack.addEventListener('keydown', e => {
    if (animating) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      flyAway(e.key === 'ArrowRight' ? 1 : -1);
    }
  });

  // ── Init ───────────────────────────────────────────────────
  renderStack();
}());