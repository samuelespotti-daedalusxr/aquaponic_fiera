import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section
      id="about"
      style={{
        background: '#F6F3EC',
        padding: '100px 24px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Eyebrow */}
        <p
          style={{
            fontSize: '11px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#6E8F74',
            marginBottom: '20px',
          }}
        >
          {t.eyebrow}
        </p>

        {/* Title */}
        <h2
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: '#1F3D2B',
            lineHeight: 1.15,
            marginBottom: '40px',
          }}
        >
          {t.title}
        </h2>

        {/* Linea orizzonte */}
        <div style={{ width: '48px', height: '1px', background: '#6E8F74', marginBottom: '40px' }} />

        {/* Body text */}
        <p
          style={{
            fontSize: '17px',
            lineHeight: 1.75,
            color: '#1C1F1D',
            marginBottom: '24px',
            maxWidth: '720px',
          }}
        >
          {t.description}
        </p>

        {/* Bullets */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '48px 0 0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            { icon: '◎', text: t.card1Title + ' — ' + t.card1Text },
            { icon: '◎', text: t.card2Title + ' — ' + t.card2Text },
            { icon: '◎', text: t.card3Title + ' — ' + t.card3Text },
          ].map((item, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                borderLeft: '2px solid #B7D36B',
                paddingLeft: '20px',
              }}
            >
              <span style={{ color: '#1F3D2B', fontWeight: 700, fontSize: '15px', lineHeight: 1.7 }}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}