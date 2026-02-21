import { useLanguage } from '../context/LanguageContext';

export function Highlights() {
  const { lang } = useLanguage();

  const cards = [
    { num: '40', label: lang === 'it' ? 'Espositori' : 'Exhibitors', sub: lang === 'it' ? 'Aziende agricole e tecnologie' : 'Agricultural companies & tech' },
    { num: '3', label: lang === 'it' ? 'Giorni' : 'Days', sub: lang === 'it' ? 'Talk, workshop, networking, serate' : 'Talks, workshops, networking, evenings' },
    { num: '17', label: lang === 'it' ? 'Progetti' : 'Projects', sub: 'Demo Day Masterclass 2025/26' },
    { num: '∞', label: 'Creator Hub', sub: lang === 'it' ? 'Contenuti, interviste, recap' : 'Content, interviews, recap' },
  ];

  return (
    <section id="highlights" style={{ background: '#1F3D2B', padding: '80px 24px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
          {cards.map((c, i) => (
            <div key={i} style={{ background: '#F6F3EC', border: '1px solid #6E8F74', borderRadius: '12px', padding: '40px 32px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '56px', fontWeight: 700, color: '#1F3D2B', lineHeight: 1, marginBottom: '8px' }}>{c.num}</p>
              <p style={{ fontSize: '16px', fontWeight: 600, color: '#1C1F1D', marginBottom: '6px' }}>{c.label}</p>
              <p style={{ fontSize: '12px', color: '#6E8F74' }}>{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}