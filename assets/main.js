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
