import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Program() {
  const { lang } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  const days = lang === 'it' ? [
    {
      day: 'Venerdì 8 maggio',
      items: ['Apertura ufficiale', 'Expo aperta al pubblico', 'Talk & Panel con ricercatori e imprese', 'Workshop pratici', 'Serata live'],
    },
    {
      day: 'Sabato 9 maggio',
      items: ['Expo aperta al pubblico', 'Workshop & Lab', 'Demo Day — pomeriggio (17 progetti Masterclass 2025/26)', 'Matchmaking 1:1 (su prenotazione)', 'Serata DJ set'],
    },
    {
      day: 'Domenica 10 maggio',
      items: ['Expo aperta al pubblico', 'Talk & Panel conclusivi', 'Workshop', 'Chiusura e saluti'],
    },
  ] : [
    {
      day: 'Friday May 8',
      items: ['Official opening', 'Expo open to the public', 'Talks & Panels with researchers and companies', 'Practical workshops', 'Live evening'],
    },
    {
      day: 'Saturday May 9',
      items: ['Expo open to the public', 'Workshops & Labs', 'Demo Day — afternoon (17 Masterclass 2025/26 projects)', 'Matchmaking 1:1 (by reservation)', 'DJ set evening'],
    },
    {
      day: 'Sunday May 10',
      items: ['Expo open to the public', 'Closing Talks & Panels', 'Workshops', 'Closing ceremony'],
    },
  ];

  return (
    <section id="programma" style={{ background: '#F6F3EC', padding: '100px 24px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6E8F74', marginBottom: '20px' }}>
          {lang === 'it' ? 'Programma' : 'Program'}
        </p>
        <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, color: '#1F3D2B', marginBottom: '48px' }}>
          {lang === 'it' ? 'Cosa succede in 3 giorni' : 'What happens in 3 days'}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {days.map((d, i) => (
            <div key={i} style={{ border: '1px solid #6E8F74', borderRadius: '8px', overflow: 'hidden' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '20px 24px', background: open === i ? '#1F3D2B' : '#F6F3EC',
                  color: open === i ? '#fff' : '#1C1F1D', border: 'none', cursor: 'pointer',
                  fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '17px', textAlign: 'left',
                  transition: 'background 0.2s',
                }}
              >
                {d.day}
                <span style={{ fontSize: '20px', lineHeight: 1 }}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <ul style={{ margin: 0, padding: '20px 24px 24px 40px', background: '#fff', listStyle: 'disc' }}>
                  {d.items.map((item, j) => (
                    <li key={j} style={{ fontSize: '15px', color: '#1C1F1D', marginBottom: '8px', lineHeight: 1.6 }}>{item}</li>
                  ))}
                  <li style={{ fontSize: '13px', color: '#6E8F74', marginTop: '12px', listStyle: 'none' }}>
                    {lang === 'it' ? 'Programma completo: presto online' : 'Full program: coming soon'}
                  </li>
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}