'use strict';

// ── Translations ────────────────────────────────────────────
const translations = {
  it: {
    // Nav
    'nav.program':  'Programma',
    'nav.format':   'Format',
    'nav.venue':    'Venue',
    'nav.partner':  'Partner',
    'nav.contacts': 'Contatti',
    'nav.register': 'Registrati',
    // Hero
    'hero.cta1': 'Scopri il programma',
    'hero.cta2': 'Registrati / Aggiornamenti',
    // Signup
    'signup.title':  'Ricevi aggiornamenti',
    'signup.lead':   "Iscriviti per ricevere il programma completo, aggiornamenti e informazioni sull'evento.",
    'signup.name':   'Nome',
    'signup.email':  'Email',
    'signup.profile': 'Sei…',
    'signup.submit': 'Iscriviti',
    // Partners
    'partners.cta': 'Diventa partner',
  },
  en: {
    // Nav
    'nav.program':  'Programme',
    'nav.format':   'Format',
    'nav.venue':    'Venue',
    'nav.partner':  'Partners',
    'nav.contacts': 'Contact',
    'nav.register': 'Register',
    // Hero
    'hero.cta1': 'Explore the programme',
    'hero.cta2': 'Register / Updates',
    // Signup
    'signup.title':  'Stay updated',
    'signup.lead':   'Sign up to receive the full programme, updates and event information.',
    'signup.name':   'Name',
    'signup.email':  'Email',
    'signup.profile': 'I am…',
    'signup.submit': 'Sign up',
    // Partners
    'partners.cta': 'Become a partner',
  },
};

// ── Apply language ──────────────────────────────────────────
function applyLang(lang) {
  if (!translations[lang]) return;

  // Update <html> lang attribute
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  // Update all translated elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = translations[lang][key];
    if (text !== undefined) el.textContent = text;
  });

  // Update active state on lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  // Persist preference
  try { localStorage.setItem('olt-lang', lang); } catch (_) { /* noop */ }
}

// ── Wire up buttons ─────────────────────────────────────────
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ── Init ───────────────────────────────────────────────────
const VALID_LANGS = ['it', 'en'];
const DEFAULT_LANG = 'it';

(function init() {
  let lang = DEFAULT_LANG;
  try { lang = localStorage.getItem('olt-lang') || DEFAULT_LANG; } catch (_) { /* noop */ }
  if (!VALID_LANGS.includes(lang)) lang = DEFAULT_LANG;
  applyLang(lang);
}());
