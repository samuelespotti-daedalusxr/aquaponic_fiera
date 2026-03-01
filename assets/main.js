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

// ── 9. Swipe Gallery ───────────────────────────────────────
(function initGallery() {
  const stack     = document.getElementById('gallery-stack');
  const dotsWrap  = document.getElementById('gallery-dots');
  if (!stack || !dotsWrap) return;

  // Images: use real paths; if missing, CSS gradient placeholders are rendered
  const IMAGES = [
    './assets/gallery/gallery-01.jpg',
    './assets/gallery/gallery-02.jpg',
    './assets/gallery/gallery-03.jpg',
    './assets/gallery/gallery-04.jpg',
    './assets/gallery/gallery-05.jpg',
    './assets/gallery/gallery-06.jpg',
  ];

  const VISIBLE   = 4;     // number of stacked cards
  const THRESHOLD = 90;    // px to trigger fly-away
  const GRADIENTS = [      // fallback CSS gradients (placeholders)
    'linear-gradient(135deg,#1F3D2B 0%,#6E8F74 100%)',
    'linear-gradient(135deg,#6E8F74 0%,#B7D36B 100%)',
    'linear-gradient(135deg,#B7D36B 0%,#1F3D2B 100%)',
    'linear-gradient(135deg,#B86B4B 0%,#1F3D2B 100%)',
    'linear-gradient(135deg,#1F3D2B 0%,#B86B4B 100%)',
    'linear-gradient(135deg,#6E8F74 0%,#B86B4B 100%)',
  ];

  let current = 0;         // index of top card in IMAGES
  let dragging = false;
  let startX = 0, startY = 0, dx = 0, dy = 0;
  let topCard = null;
  let dirLock = null;      // 'x' | 'y' | null — direction lock for touch

  // ── helpers ──
  function mod(i) {
    return ((i % IMAGES.length) + IMAGES.length) % IMAGES.length;
  }

  // Build / rebuild dots
  function renderDots() {
    dotsWrap.innerHTML = '';
    IMAGES.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.className = 'gallery-dot' + (i === mod(current) ? ' is-active' : '');
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-label', `Immagine ${i + 1}`);
      btn.setAttribute('aria-selected', String(i === mod(current)));
      btn.addEventListener('click', () => {
        current = i;
        render();
      });
      dotsWrap.appendChild(btn);
    });
  }

  // Create a single card element
  function makeCard(imgIndex, pos) {
    const card = document.createElement('div');
    card.className   = 'swipe-card';
    card.dataset.pos = pos;

    const img = new Image();
    img.src = IMAGES[imgIndex];
    img.alt = `Galleria immagine ${imgIndex + 1}`;
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
    img.draggable = false;

    // On error: show gradient placeholder
    img.onerror = () => {
      card.style.background = GRADIENTS[imgIndex % GRADIENTS.length];
    };

    card.appendChild(img);
    return card;
  }

  // Full render: clear stack, add VISIBLE cards
  function render() {
    stack.innerHTML = '';
    for (let pos = VISIBLE - 1; pos >= 0; pos--) {
      const idx  = mod(current + pos);
      const card = makeCard(idx, pos);

      // Apply static transform for pos > 0
      if (pos > 0) {
        card.style.transition = 'transform 0.35s cubic-bezier(0.16,1,0.3,1)';
      }

      stack.appendChild(card);
    }

    // Bind drag to top card (pos 0)
    topCard = stack.querySelector('[data-pos="0"]');
    if (topCard) bindDrag(topCard);

    renderDots();
  }

  // ── Drag logic ──
  function bindDrag(card) {
    // Mouse
    card.addEventListener('mousedown', onMouseDown, { passive: false });
    // Touch — touchstart stays passive (no preventDefault needed on start)
    card.addEventListener('touchstart', onTouchStart, { passive: true });
  }

  function onMouseDown(e) {
    if (e.button !== 0) return;
    e.preventDefault();
    startX = e.clientX;
    startY = e.clientY;
    dx = dy = 0;
    dragging = true;
    topCard.style.transition = 'none';
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  function onMouseMove(e) {
    if (!dragging) return;
    dx = e.clientX - startX;
    dy = e.clientY - startY;
    applyDrag(dx, dy);
  }

  function onMouseUp() {
    dragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    settle();
  }

  function onTouchStart(e) {
    const t = e.touches[0];
    startX = t.clientX;
    startY = t.clientY;
    dx = dy = 0;
    dirLock = null;
    dragging = true;
    topCard.style.transition = 'none';
    // passive: false on touchmove so we can call preventDefault() to block
    // vertical page scroll when the user is swiping horizontally
    topCard.addEventListener('touchmove', onTouchMove, { passive: false });
    topCard.addEventListener('touchend',   onTouchEnd,  { once: true });
    topCard.addEventListener('touchcancel', onTouchEnd, { once: true });
  }

  function onTouchMove(e) {
    if (!dragging) return;
    const t  = e.touches[0];
    const cx = t.clientX - startX;
    const cy = t.clientY - startY;

    // Determine scroll-vs-swipe direction once per gesture (after 10px)
    if (!dirLock) {
      if (Math.abs(cx) > Math.abs(cy) && Math.abs(cx) > 10) {
        dirLock = 'x'; // horizontal swipe — take control
      } else if (Math.abs(cy) > Math.abs(cx) && Math.abs(cy) > 10) {
        dirLock = 'y'; // vertical scroll — let page scroll naturally
      }
    }

    if (dirLock === 'x') {
      // Block page scroll so horizontal drag works cleanly
      e.preventDefault();
      dx = cx;
      dy = cy;
      applyDrag(dx, dy);
    }
    // dirLock === 'y': do nothing, browser handles the scroll
  }

  function onTouchEnd() {
    dragging = false;
    topCard.removeEventListener('touchmove',   onTouchMove);
    topCard.removeEventListener('touchcancel', onTouchEnd);
    if (dirLock === 'x') {
      settle();
    } else {
      // Vertical scroll gesture: snap card back cleanly without fly-away
      if (topCard) {
        topCard.style.transition = 'transform 0.4s cubic-bezier(0.16,1,0.3,1)';
        topCard.style.transform  = '';
      }
      dirLock = null;
    }
  }

  // Apply drag transform to top card + promote card below in real time
  function applyDrag(dx, dy) {
    if (!topCard) return;
    const rot = dx * 0.06;
    topCard.style.transform = `translate(${dx}px, ${dy}px) rotate(${rot}deg)`;

    // Progress 0..1 based on threshold
    const progress = Math.min(Math.abs(dx) / THRESHOLD, 1);

    // Animate card at pos=1 toward pos=0 transform
    const card1 = stack.querySelector('[data-pos="1"]');
    if (card1) {
      const scale = 0.94 + (1 - 0.94) * progress;
      const tY    = 18 - 18 * progress;
      card1.style.transform = `scale(${scale}) translateY(${tY}px)`;
    }
  }

  // Settle: fly-away or snap back
  function settle() {
    if (!topCard) return;
    if (Math.abs(dx) >= THRESHOLD) {
      flyAway(dx > 0 ? 1 : -1);
    } else {
      // Snap back
      topCard.style.transition = 'transform 0.4s cubic-bezier(0.16,1,0.3,1)';
      topCard.style.transform  = '';
      // Reset card1 too
      const card1 = stack.querySelector('[data-pos="1"]');
      if (card1) {
        card1.style.transition = 'transform 0.4s cubic-bezier(0.16,1,0.3,1)';
        card1.style.transform  = 'scale(0.94) translateY(18px)';
      }
    }
  }

  function flyAway(dir) {
    if (!topCard) return;
    const rot = dir * 25;
    const tx  = dir * (window.innerWidth + 300);
    topCard.style.transition = 'transform 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.45s ease';
    topCard.style.transform  = `translate(${tx}px, ${dy}px) rotate(${rot}deg)`;
    topCard.style.opacity    = '0';

    topCard.addEventListener('transitionend', () => {
      current = mod(current + 1);
      render();
    }, { once: true });
  }

  // ── Keyboard navigation ──
  stack.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      if (dir === 1) {
        current = mod(current + 1);
      } else {
        current = mod(current - 1);
      }
      render();
    }
  });

  // ── Init ──
  render();
})();
