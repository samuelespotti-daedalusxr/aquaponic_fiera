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
    'hero.eyebrow': '8–10 MAGGIO 2026 · LE SERRE DEI GIARDINI · BOLOGNA',
    'hero.cta1': 'Scopri il programma',
    'hero.cta2': 'Registrati / Aggiornamenti',
    // Stats
    'stat1.label': 'ESPOSITORI',
    'stat1.desc':  'Su infrastrutture, tecnologie, servizi',
    'stat2.label': 'GIORNI DI',
    'stat2.desc':  'Talk & Incontri',
    'stat3.label': 'PROGETTI',
    'stat3.desc':  'Presentati al Demo Day Startup',
    'stat4.label': 'NUOVA',
    'stat4.desc':  'Imprenditorialità e produzioni locali',
    // Schedule
    'schedule.title':   'Programma',
    'schedule.day1':    'Venerdì 8 Maggio',
    'schedule.day1.1':  'Apertura ufficiale',
    'schedule.day1.2':  'Expo aperta al pubblico',
    'schedule.day1.3':  'Talk e panel',
    'schedule.day1.4':  'Workshop',
    'schedule.day1.5':  'Serata live',
    'schedule.day2':    'Sabato 9 Maggio',
    'schedule.day2.1':  'Expo',
    'schedule.day2.2':  'Workshop',
    'schedule.day2.3':  'Demo Day Masterclass (pomeriggio)',
    'schedule.day2.4':  'Serata DJ set',
    'schedule.day3':    'Domenica 10 Maggio',
    'schedule.day3.1':  'Expo',
    'schedule.day3.2':  'Talk',
    'schedule.day3.3':  'Workshop',
    'schedule.day3.4':  'Chiusura ufficiale',
    'schedule.soon':    'Programma completo: presto online',
    // Formats
    'formats.title':          'Aree e Format',
    'formats.expo.title':     'Expo',
    'formats.expo.desc':      '40 espositori su tecnologie, impianti e soluzioni per colture fuori suolo.',
    'formats.talk.title':     'Talk & Panel',
    'formats.talk.desc':      'Voci autorevoli tra ricerca, impresa e istituzioni. Confronto aperto.',
    'formats.workshop.title': 'Workshop / Lab',
    'formats.workshop.desc':  'Laboratori pratici con materiali, impianti e tecnici presenti.',
    'formats.demo.title':     'Demo Day',
    'formats.demo.desc':      '17 progetti della Masterclass 2025/26. Matchmaking e slot 1:1 su prenotazione.',
    'formats.creator.title':  'Creator Hub',
    'formats.creator.desc':   'Spazio per produzione contenuti: interviste, video, recap e distribuzione.',
    'formats.serate.title':   'Serate live / DJ set',
    'formats.serate.desc':    'Dalle 19, ogni sera. Musica, networking e cibo in spazio aperto.',
    // Partners
    'partners.cta': 'Diventa partner',
    // Signup
    'signup.title':   'Ricevi aggiornamenti',
    'signup.lead':    "Iscriviti per ricevere il programma completo, aggiornamenti e informazioni sull'evento.",
    'signup.name':    'Nome',
    'signup.email':   'Email',
    'signup.profile': 'Sei…',
    'signup.submit':  'Iscriviti',
    // FAQ
    'faq.title': 'Domande frequenti',
    'faq.q1': "L'ingresso è gratuito?",
    'faq.a1': "Sì, l'evento è aperto al pubblico. La registrazione (gratuita) è consigliata per ricevere aggiornamenti e riservare posti ai workshop.",
    'faq.q2': 'Quali sono gli orari?',
    'faq.a2': 'I tre giorni si svolgono indicativamente dalle 10:00 alle 20:00, con serate live/dj dalle 19:00. Gli orari dettagliati saranno pubblicati presto.',
    'faq.q3': 'Come posso candidarmi come espositore?',
    'faq.a3': 'Scrivici a oltrelaterra@aquaponicdesign.it con oggetto "Candidatura espositore". Ti risponderemo entro 5 giorni lavorativi.',
    'faq.q4': 'Ci sono opportunità per press e creator?',
    'faq.a4': 'Sì. Il Creator Hub è uno spazio dedicato a giornalisti, creator e comunicatori. Scrivici per accredito stampa o collaborazioni.',
    'faq.q5': "Cos'è il Demo Day?",
    'faq.a5': 'Il Demo Day si svolge sabato pomeriggio: 17 progetti della Masterclass 2025/26 vengono presentati al pubblico. Sono previsti slot di matchmaking 1:1 su prenotazione.',
    'faq.q6': 'Come arrivo alle Serre dei Giardini?',
    'faq.a6': 'Via Castiglione 134, Bologna. Raggiungibile a piedi/bici dal centro, con diverse linee bus. Parcheggio nei pressi: attenzione alla ZTL.',
    'faq.q7': 'Posso diventare partner o sponsor?',
    'faq.a7': 'Scrivi a oltrelaterra@aquaponicdesign.it con oggetto "Proposta partnership". Offriamo pacchetti per obiettivi, non per logo size.',
    'faq.q8': "Chi organizza OLTRE LA TERRA?",
    'faq.a8': "L'evento è organizzato da Aquaponic Design Srl. Per qualsiasi informazione: oltrelaterra@aquaponicdesign.it",
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
    'hero.eyebrow': '8–10 MAY 2026 · LE SERRE DEI GIARDINI · BOLOGNA',
    'hero.cta1': 'Explore the programme',
    'hero.cta2': 'Register / Updates',
    // Stats
    'stat1.label': 'EXHIBITORS',
    'stat1.desc':  'Infrastructure, technologies, services',
    'stat2.label': 'DAYS OF',
    'stat2.desc':  'Talks & Meetings',
    'stat3.label': 'PROJECTS',
    'stat3.desc':  'Presented at the Startup Demo Day',
    'stat4.label': 'NEW',
    'stat4.desc':  'Entrepreneurship and local production',
    // Schedule
    'schedule.title':   'Programme',
    'schedule.day1':    'Friday 8 May',
    'schedule.day1.1':  'Official opening',
    'schedule.day1.2':  'Expo open to the public',
    'schedule.day1.3':  'Talks and panels',
    'schedule.day1.4':  'Workshops',
    'schedule.day1.5':  'Live evening',
    'schedule.day2':    'Saturday 9 May',
    'schedule.day2.1':  'Expo',
    'schedule.day2.2':  'Workshops',
    'schedule.day2.3':  'Masterclass Demo Day (afternoon)',
    'schedule.day2.4':  'DJ set evening',
    'schedule.day3':    'Sunday 10 May',
    'schedule.day3.1':  'Expo',
    'schedule.day3.2':  'Talks',
    'schedule.day3.3':  'Workshops',
    'schedule.day3.4':  'Official closing',
    'schedule.soon':    'Full programme: coming soon',
    // Formats
    'formats.title':          'Areas & Formats',
    'formats.expo.title':     'Expo',
    'formats.expo.desc':      '40 exhibitors showcasing technologies, systems and solutions for soilless crops.',
    'formats.talk.title':     'Talks & Panels',
    'formats.talk.desc':      'Authoritative voices from research, business and institutions. Open debate.',
    'formats.workshop.title': 'Workshop / Lab',
    'formats.workshop.desc':  'Practical labs with materials, systems and technicians on site.',
    'formats.demo.title':     'Demo Day',
    'formats.demo.desc':      '17 projects from the 2025/26 Masterclass. Matchmaking and 1:1 slots on request.',
    'formats.creator.title':  'Creator Hub',
    'formats.creator.desc':   'Content production space: interviews, videos, recaps and distribution.',
    'formats.serate.title':   'Live evenings / DJ sets',
    'formats.serate.desc':    'From 7 pm, every evening. Music, networking and food in open space.',
    // Partners
    'partners.cta': 'Become a partner',
    // Signup
    'signup.title':   'Stay updated',
    'signup.lead':    'Sign up to receive the full programme, updates and event information.',
    'signup.name':    'Name',
    'signup.email':   'Email',
    'signup.profile': 'I am…',
    'signup.submit':  'Sign up',
    // FAQ
    'faq.title': 'Frequently asked questions',
    'faq.q1': 'Is entry free?',
    'faq.a1': 'Yes, the event is open to the public. Free registration is recommended to receive updates and reserve workshop seats.',
    'faq.q2': 'What are the opening hours?',
    'faq.a2': 'All three days run approximately from 10:00 to 20:00, with live/DJ evenings from 19:00. Detailed times will be published soon.',
    'faq.q3': 'How can I apply as an exhibitor?',
    'faq.a3': 'Email us at oltrelaterra@aquaponicdesign.it with subject "Exhibitor application". We will reply within 5 working days.',
    'faq.q4': 'Are there opportunities for press and creators?',
    'faq.a4': 'Yes. The Creator Hub is a dedicated space for journalists, creators and communicators. Contact us for press accreditation or collaborations.',
    'faq.q5': 'What is the Demo Day?',
    'faq.a5': '17 projects from the 2025/26 Masterclass are presented to the public on Saturday afternoon. 1:1 matchmaking slots are available on request.',
    'faq.q6': 'How do I get to Le Serre dei Giardini?',
    'faq.a6': 'Via Castiglione 134, Bologna. Reachable on foot or by bike from the city centre, and by several bus lines. Parking nearby — mind the ZTL restricted zone.',
    'faq.q7': 'Can I become a partner or sponsor?',
    'faq.a7': 'Email us at oltrelaterra@aquaponicdesign.it with subject "Partnership proposal". We offer goal-based packages, not logo-size tiers.',
    'faq.q8': 'Who organises OLTRE LA TERRA?',
    'faq.a8': 'The event is organised by Aquaponic Design Srl. For any information: oltrelaterra@aquaponicdesign.it',
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

// ── Init ───────────────────────────────────────────────────
const VALID_LANGS = ['it', 'en'];
const DEFAULT_LANG = 'it';

// Wire up buttons and init after DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // Wire up lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // Read saved preference or fall back to default
  let lang = DEFAULT_LANG;
  try { lang = localStorage.getItem('olt-lang') || DEFAULT_LANG; } catch (_) { /* noop */ }
  if (!VALID_LANGS.includes(lang)) lang = DEFAULT_LANG;
  applyLang(lang);
});