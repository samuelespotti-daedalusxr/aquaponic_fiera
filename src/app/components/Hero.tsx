import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

const IMG_URL = 'assets/serre-giardini-bologna.jpg';
/* SOSTITUIRE con foto drone de Le Serre dei Giardini — luce naturale, formato landscape */

export function Hero() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ fontFamily: 'Manrope, sans-serif' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMG_URL}
          alt="Vista aerea de Le Serre dei Giardini di Bologna"
          className="w-full h-full object-cover"
        />
        {/* Overlay Verde Bosco 58% */}
        <div className="absolute inset-0" style={{ background: 'rgba(31,61,43,0.58)' }} />
      </div>

      {/* Language switcher — pill grigio scuro top right */}
      <div className="absolute top-5 right-6 z-30">
        <div
          style={{
            background: 'rgba(28,31,29,0.82)',
            borderRadius: '999px',
            display: 'flex',
            alignItems: 'center',
            padding: '6px 18px',
            backdropFilter: 'blur(6px)',
          }}
        >
          <button
            onClick={() => setLang('it')}
            style={{
              background: 'none',
              border: 'none',
              color: lang === 'it' ? '#fff' : 'rgba(255,255,255,0.45)',
              fontWeight: lang === 'it' ? 700 : 400,
              fontSize: '13px',
              cursor: 'pointer',
              letterSpacing: '0.08em',
              padding: '0 4px',
              fontFamily: 'Inter, sans-serif',
            }}
            aria-pressed={lang === 'it'}
          >
            IT
          </button>
          <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 6px', fontSize: '13px' }}>|</span>
          <button
            onClick={() => setLang('en')}
            style={{
              background: 'none',
              border: 'none',
              color: lang === 'en' ? '#fff' : 'rgba(255,255,255,0.45)',
              fontWeight: lang === 'en' ? 700 : 400,
              fontSize: '13px',
              cursor: 'pointer',
              letterSpacing: '0.08em',
              padding: '0 4px',
              fontFamily: 'Inter, sans-serif',
            }}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 text-center">
        <p
          style={{
            fontSize: '11px',
            letterSpacing: '0.18em',
            color: 'rgba(255,255,255,0.72)',
            textTransform: 'uppercase',
            marginBottom: '28px',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {t.subtitle}
        </p>

        <h1
          style={{
            fontSize: 'clamp(52px, 10vw, 120px)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            marginBottom: '32px',
          }}
        >
          {t.title}
        </h1>

        {/* Linea orizzonte */}
        <div
          style={{
            width: '60px',
            height: '1px',
            background: 'rgba(183,211,107,0.7)',
            margin: '0 auto 24px',
          }}
        />

        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'rgba(255,255,255,0.88)',
            fontStyle: 'italic',
            marginBottom: '12px',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {t.tagline}
        </p>

        <p
          style={{
            fontSize: '15px',
            color: 'rgba(255,255,255,0.68)',
            marginBottom: '44px',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {t.date}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <a
            href="#programma"
            data-cta="scopri-programma"
            style={{
              background: '#fff',
              color: '#1F3D2B',
              border: 'none',
              borderRadius: '999px',
              padding: '14px 32px',
              fontWeight: 700,
              fontSize: '15px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              fontFamily: 'Manrope, sans-serif',
            }}
          >
            {t.cta1}
            <ArrowRight size={16} />
          </a>
          <a
            href="#newsletter"
            data-cta="registrati"
            style={{
              background: 'transparent',
              color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.6)',
              borderRadius: '999px',
              padding: '14px 32px',
              fontWeight: 500,
              fontSize: '15px',
              textDecoration: 'none',
              fontFamily: 'Manrope, sans-serif',
            }}
          >
            {t.cta2}
          </a>
        </div>

        {/* Stats pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
            marginTop: '72px',
          }}
        >
          {[
            { label: t.stat1Label, sub: t.stat1Sub },
            { label: t.stat2Label, sub: t.stat2Sub },
            { label: t.stat3Label, sub: t.stat3Sub },
            { label: t.stat4Label, sub: t.stat4Sub },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.10)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '999px',
                padding: '10px 24px',
                textAlign: 'center',
              }}
            >
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '14px', margin: 0 }}>{s.label}</p>
              <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: '11px', margin: 0 }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div
          style={{
            width: '24px',
            height: '38px',
            border: '1.5px solid rgba(255,255,255,0.4)',
            borderRadius: '999px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div style={{ width: '3px', height: '8px', background: 'rgba(255,255,255,0.4)', borderRadius: '999px' }} />
        </div>
      </div>
    </section>
  );
}