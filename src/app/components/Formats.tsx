import { useLanguage } from '../context/LanguageContext';

export function Formats() {
  const { lang } = useLanguage();

  const formats = lang === 'it' ? [
    { title: 'Expo', desc: '40 espositori con spazi e visibilità uniformi. Aziende agricole, tecnologie, servizi.' },
    { title: 'Talk & Panel', desc: 'Ricercatori, imprenditori e istituzioni. Confronto concreto, senza palco fisso.' },
    { title: 'Workshop / Lab', desc: 'Sessioni pratiche a numero chiuso. Dai un nome a quello che impari.' },
    { title: 'Demo Day', desc: '17 progetti della Masterclass 2025/26. Sabato pomeriggio, ingresso libero.' },
    { title: 'Creator Hub', desc: 'Produzione contenuti in loco: interviste, video, recap. Accrediti press/creator.' },
    { title: 'Serate live / DJ set', desc: "Dalle 19. Musica, persone, territorio. Festival nell'esperienza." },
  ] : [
    { title: 'Expo', desc: '40 exhibitors with uniform spaces and visibility. Agricultural companies, technologies, services.' },
    { title: 'Talks & Panels', desc: 'Researchers, entrepreneurs and institutions. Concrete discussion, no fixed stage.' },
    { title: 'Workshops / Labs', desc: 'Hands-on sessions with limited capacity. Name what you learn.' },
    { title: 'Demo Day', desc: '17 Masterclass 2025/26 projects. Saturday afternoon, free entry.' },
    { title: 'Creator Hub', desc: 'On-site content production: interviews, videos, recaps. Press/creator accreditation.' },
    { title: 'Live evenings / DJ sets', desc: 'From 19:00. Music, people, territory. Festival in experience.' },
  ];

  return (
    <section id="format" style={{ background: '#fff', padding: '100px 24px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6E8F74', marginBottom: '20px' }}>
          {lang === 'it' ? 'Aree e Format' : 'Areas & Formats'}
        </p>
        <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, color: '#1F3D2B', marginBottom: '56px' }}>
          {lang === 'it' ? 'Dal parlare al fare' : 'From talking to doing'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {formats.map((f, i) => (
            <div key={i} style={{ border: '1px solid #1C1F1D', borderRadius: '8px', padding: '32px 28px' }}>
              <h3 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '20px', fontWeight: 700, color: '#1F3D2B', marginBottom: '12px' }}>{f.title}</h3>
              <p style={{ fontSize: '15px', color: '#1C1F1D', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}