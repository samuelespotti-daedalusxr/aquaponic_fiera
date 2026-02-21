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
    // About
    'about.title': "Un formato equo, un'esperienza aperta.",
    'about.p1':    "OLTRE LA TERRA nasce da un'idea semplice: l'esperienza è aperta e alla pari. Tre giorni tra fiera e festival dedicati alle colture fuori suolo, per incontrare aziende agricole e soluzioni tecnologiche, ascoltare voci autorevoli, partecipare a workshop pratici e vedere progetti reali in azione.",
    'about.p2':    "Abbiamo scelto un formato equo: spazi e visibilità sono uniformi per gli espositori. Il contributo dei partner è finalizzato ad abilitare programmi — talk, workshop, borse, demo, produzione contenuti e reportistica — con ricadute misurabili sul territorio.",
    'about.p3':    'Colture fuori suolo: produzione, tecnologia e persone. Dal parlare al fare: demo, workshop, casi reali.',
    'about.v1':    'Programmi abilitati dai partner, con ricadute misurabili sul territorio.',
    'about.v2':    'Dal parlare al fare: demo, workshop, casi reali.',
    'about.v3':    'Spazi uniformi per tutti gli espositori: visibilità equa, nessuna gerarchia commerciale.',
    // Temi
    'temi.title': 'TEMI FONDAMENTALI',
    'temi.1': 'COLTURE IDROPONICHE, ACQUAPONICHE E VERTICAL FARMING',
    'temi.2': 'RIDUZIONE CONSUMO IDRICO E RESILIENZA PRODUTTIVA',
    'temi.3': "FUTURO E NORMATIVE DELL'AGRICOLTURA FUORI SUOLO",
    'temi.4': 'NUOVA IMPRENDITORIALITÀ E PRODUZIONI LOCALI',
    // What happens
    'what.title': 'Cosa succede in 3 giorni.',
    'what.lead':  'Un format progettato per essere utile, non solo interessante.',
    'what.tag1':  'Talk & Panel',
    'what.p1':    'Ricercatori, imprenditori e istituzioni a confronto su produzione, tecnologia e politiche agricole.',
    'what.tag2':  'Workshop pratici',
    'what.p2':    'Laboratori hands-on con materiali, impianti e tecnici presenti. Posti limitati.',
    'what.tag3':  'Creator Hub',
    'what.p3':    'Spazio per produzione contenuti: interviste, video, recap e distribuzione.',
    'what.tag4':  'Serate live / DJ set',
    'what.p4':    'Dalle 19, ogni sera. Musica, networking e cibo in spazio aperto.',
    'what.tag5':  'Demo Day',
    'what.p5':    '17 progetti della Masterclass 2025/26 presentati al pubblico. Matchmaking e slot 1:1 su prenotazione.',
    // Schedule
    'schedule.title': 'Programma',
    'schedule.day1':  'Venerdì 8 Maggio',
    'schedule.day1.l1': 'Apertura ufficiale',
    'schedule.day1.l2': 'Expo aperta al pubblico',
    'schedule.day1.l3': 'Talk e panel',
    'schedule.day1.l4': 'Workshop',
    'schedule.day1.l5': 'Serata live',
    'schedule.day2':  'Sabato 9 Maggio',
    'schedule.day2.l1': 'Expo',
    'schedule.day2.l2': 'Workshop',
    'schedule.day2.l3': 'Demo Day Masterclass (pomeriggio)',
    'schedule.day2.l4': 'Serata DJ set',
    'schedule.day3':  'Domenica 10 Maggio',
    'schedule.day3.l1': 'Expo',
    'schedule.day3.l2': 'Talk',
    'schedule.day3.l3': 'Workshop',
    'schedule.day3.l4': 'Chiusura ufficiale',
    'schedule.soon':     'Programma completo:',
    'schedule.soon.tag': 'presto online',
    // Formats
    'formats.title':  'Aree e Format',
    'format1.title':  'Expo',
    'format1.desc':   '40 espositori su tecnologie, impianti e soluzioni per colture fuori suolo.',
    'format2.title':  'Talk & Panel',
    'format2.desc':   'Voci autorevoli tra ricerca, impresa e istituzioni. Confronto aperto.',
    'format3.title':  'Workshop / Lab',
    'format3.desc':   'Laboratori pratici con materiali, impianti e tecnici presenti.',
    'format4.title':  'Demo Day',
    'format4.desc':   '17 progetti della Masterclass 2025/26. Matchmaking e slot 1:1 su prenotazione.',
    'format5.title':  'Creator Hub',
    'format5.desc':   'Spazio per produzione contenuti: interviste, video, recap e distribuzione.',
    'format6.title':  'Serate live / DJ set',
    'format6.desc':   'Dalle 19, ogni sera. Musica, networking e cibo in spazio aperto.',
    // Institutional
    'inst.title': 'Tavola Rotonda Istituzionale',
    'inst.p':     'OLTRE LA TERRA propone una tavola rotonda con istituzioni, associazioni di categoria, imprese e ricerca: un confronto concreto su sovranità alimentare, resilienza produttiva e innovazione tecnologica applicata alle colture fuori suolo in Italia (standard, filiere, ricerca, competenze, investimenti e modelli sostenibili).',
    // Venue
    'venue.title': 'Dove siamo',
    'venue.how':   'Come arrivare',
    'venue.dir1':  'A piedi o in bici dal centro di Bologna (15 minuti)',
    'venue.dir2':  'Bus linee: 13, 14, 19 — fermata Giardini Margherita',
    'venue.dir3':  'Auto: attenzione alla ZTL. Parcheggio in Via Murri o Via Toscana',
    'venue.maps':  'Apri in Google Maps →',
    'venue.maps.fallback': 'Apri mappa in Google Maps',
    // Partners
    'partners.title': 'Partner & Sponsor',
    'partners.lead':  'I partner di OLTRE LA TERRA abilitano programmi con ricadute concrete: talk, workshop, borse, demo e produzione contenuti. Visibilità equa per tutti.',
    'partners.cta':   'Diventa partner',
    // Signup
    'signup.title':   'Ricevi aggiornamenti',
    'signup.lead':    "Iscriviti per ricevere il programma completo, aggiornamenti e informazioni sull'evento.",
    'signup.name':    'Nome',
    'signup.email':   'Email',
    'signup.profile': 'Sei…',
    'signup.profile.placeholder': 'Seleziona il tuo profilo',
    'signup.opt.attendee':  'Partecipante',
    'signup.opt.exhibitor': 'Espositore',
    'signup.opt.partner':   'Partner',
    'signup.opt.press':     'Press',
    'signup.opt.creator':   'Creator',
    'signup.submit':  'Iscriviti',
    // FAQ
    'faq.title': 'Domande frequenti',
    'faq.q1': "L'ingresso è gratuito?",
    'faq.a1': 'Sì, l\'evento è aperto al pubblico. La registrazione (gratuita) è consigliata per ricevere aggiornamenti e riservare posti ai workshop.',
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
    'faq.q8': 'Chi organizza OLTRE LA TERRA?',
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
    // About
    'about.title': 'A fair format, an open experience.',
    'about.p1':    'OLTRE LA TERRA was born from a simple idea: the experience is open and equal. Three days of fair and festival dedicated to soilless crops — meet agri-businesses and technology solutions, hear authoritative voices, attend hands-on workshops and see real projects in action.',
    'about.p2':    'We chose a fair format: spaces and visibility are uniform for all exhibitors. Partner contributions fund programmes — talks, workshops, grants, demos, content production and reporting — with measurable local impact.',
    'about.p3':    'Soilless crops: production, technology and people. From talking to doing: demos, workshops, real cases.',
    'about.v1':    'Partner-funded programmes with measurable local impact.',
    'about.v2':    'From talking to doing: demos, workshops, real cases.',
    'about.v3':    'Uniform spaces for all exhibitors: equal visibility, no commercial hierarchy.',
    // Temi
    'temi.title': 'KEY THEMES',
    'temi.1': 'HYDROPONIC, AQUAPONIC AND VERTICAL FARMING',
    'temi.2': 'WATER USE REDUCTION AND PRODUCTION RESILIENCE',
    'temi.3': 'FUTURE AND REGULATIONS OF SOILLESS AGRICULTURE',
    'temi.4': 'NEW ENTREPRENEURSHIP AND LOCAL PRODUCTION',
    // What happens
    'what.title': 'What happens in 3 days.',
    'what.lead':  'A format designed to be useful, not just interesting.',
    'what.tag1':  'Talks & Panels',
    'what.p1':    'Researchers, entrepreneurs and institutions discussing production, technology and agricultural policy.',
    'what.tag2':  'Practical Workshops',
    'what.p2':    'Hands-on labs with materials, systems and technicians on site. Limited seats.',
    'what.tag3':  'Creator Hub',
    'what.p3':    'Content production space: interviews, videos, recaps and distribution.',
    'what.tag4':  'Live evenings / DJ sets',
    'what.p4':    'From 7 pm, every evening. Music, networking and food in open space.',
    'what.tag5':  'Demo Day',
    'what.p5':    '17 projects from the 2025/26 Masterclass presented to the public. Matchmaking and 1:1 slots on request.',
    // Schedule
    'schedule.title': 'Programme',
    'schedule.day1':  'Friday 8 May',
    'schedule.day1.l1': 'Official opening',
    'schedule.day1.l2': 'Expo open to the public',
    'schedule.day1.l3': 'Talks and panels',
    'schedule.day1.l4': 'Workshops',
    'schedule.day1.l5': 'Live evening',
    'schedule.day2':  'Saturday 9 May',
    'schedule.day2.l1': 'Expo',
    'schedule.day2.l2': 'Workshops',
    'schedule.day2.l3': 'Masterclass Demo Day (afternoon)',
    'schedule.day2.l4': 'DJ set evening',
    'schedule.day3':  'Sunday 10 May',
    'schedule.day3.l1': 'Expo',
    'schedule.day3.l2': 'Talks',
    'schedule.day3.l3': 'Workshops',
    'schedule.day3.l4': 'Official closing',
    'schedule.soon':     'Full programme:',
    'schedule.soon.tag': 'coming soon',
    // Formats
    'formats.title':  'Areas & Formats',
    'format1.title':  'Expo',
    'format1.desc':   '40 exhibitors showcasing technologies, systems and solutions for soilless crops.',
    'format2.title':  'Talks & Panels',
    'format2.desc':   'Authoritative voices from research, business and institutions. Open debate.',
    'format3.title':  'Workshop / Lab',
    'format3.desc':   'Practical labs with materials, systems and technicians on site.',
    'format4.title':  'Demo Day',
    'format4.desc':   '17 projects from the 2025/26 Masterclass. Matchmaking and 1:1 slots on request.',
    'format5.title':  'Creator Hub',
    'format5.desc':   'Content production space: interviews, videos, recaps and distribution.',
    'format6.title':  'Live evenings / DJ sets',
    'format6.desc':   'From 7 pm, every evening. Music, networking and food in open space.',
    // Institutional
    'inst.title': 'Institutional Round Table',
    'inst.p':     'OLTRE LA TERRA hosts a round table with institutions, industry associations, businesses and research: a concrete discussion on food sovereignty, production resilience and technological innovation applied to soilless crops in Italy (standards, supply chains, research, skills, investment and sustainable models).',
    // Venue
    'venue.title': 'Where we are',
    'venue.how':   'How to get there',
    'venue.dir1':  'On foot or by bike from Bologna city centre (15 minutes)',
    'venue.dir2':  'Bus lines: 13, 14, 19 — stop Giardini Margherita',
    'venue.dir3':  'By car: mind the ZTL restricted zone. Parking on Via Murri or Via Toscana',
    'venue.maps':  'Open in Google Maps →',
    'venue.maps.fallback': 'Open map in Google Maps',
    // Partners
    'partners.title': 'Partners & Sponsors',
    'partners.lead':  'OLTRE LA TERRA partners fund programmes with concrete outcomes: talks, workshops, grants, demos and content production. Equal visibility for all.',
    'partners.cta':   'Become a partner',
    // Signup
    'signup.title':   'Stay updated',
    'signup.lead':    'Sign up to receive the full programme, updates and event information.',
    'signup.name':    'Name',
    'signup.email':   'Email',
    'signup.profile': 'I am…',
    'signup.profile.placeholder': 'Select your profile',
    'signup.opt.attendee':  'Attendee',
    'signup.opt.exhibitor': 'Exhibitor',
    'signup.opt.partner':   'Partner',
    'signup.opt.press':     'Press',
    'signup.opt.creator':   'Creator',
    'signup.submit':  'Sign up',
    // FAQ
    'faq.title': 'Frequently asked questions',
    'faq.q1': 'Is entry free?',
    'faq.a1': 'Yes, the event is open to the public. Free registration is recommended to receive updates and reserve workshop seats.',
    'faq.q2': 'What are the opening hours?',
    'faq.a2': 'All three days run approximately from 10:00 to 20:00, with live/DJ evenings from 19:00. Detailed times will be published soon.',
    'faq.q3': 'How can I apply as an exhibitor?',
    'faq.a3': 'Email us at oltrelaterra@aquaponicdesign.it with subject "Exhibitor application". We will reply within 5 business days.',
    'faq.q4': 'Are there opportunities for press and creators?',
    'faq.a4': 'Yes. The Creator Hub is a dedicated space for journalists, creators and communicators. Contact us for press accreditation or collaborations.',
    'faq.q5': 'What is the Demo Day?',
    'faq.a5': 'The Demo Day takes place Saturday afternoon: 17 projects from the 2025/26 Masterclass are presented to the public. 1:1 matchmaking slots are available on request.',
    'faq.q6': 'How do I get to Le Serre dei Giardini?',
    'faq.a6': 'Via Castiglione 134, Bologna. Reachable on foot/bike from the centre, with several bus lines. Nearby parking available — mind the ZTL zone.',
    'faq.q7': 'Can I become a partner or sponsor?',
    'faq.a7': 'Email oltrelaterra@aquaponicdesign.it with subject "Partnership proposal". We offer goal-oriented packages, not logo-size deals.',
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
