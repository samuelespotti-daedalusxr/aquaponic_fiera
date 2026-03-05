import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section
      id="perche"
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
            marginBottom: '48px',
            maxWidth: '720px',
          }}
        >
          {t.description}
        </p>

        {/* Primary CTA row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            marginBottom: '48px',
          }}
        >
          <a
            href="#programma"
            style={{
              background: '#1F3D2B',
              color: '#fff',
              borderRadius: '999px',
              padding: '14px 28px',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {t.ctaDiscover}
            <ArrowRight size={16} />
          </a>
          <a
            href="/programma.pdf"
            download
            style={{
              background: 'transparent',
              color: '#1F3D2B',
              border: '1.5px solid #1F3D2B',
              borderRadius: '999px',
              padding: '14px 28px',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Download size={15} />
            {t.ctaDownload}
          </a>
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', background: 'rgba(110,143,116,0.25)', marginBottom: '40px' }} />

        {/* Secondary calls */}
        <p
          style={{
            fontSize: '12px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#6E8F74',
            marginBottom: '20px',
          }}
        >
          {t.callsLabel}
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
          }}
        >
          <a
            href="#esponi"
            style={{
              background: '#B7D36B',
              color: '#1F3D2B',
              borderRadius: '999px',
              padding: '13px 28px',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            {t.ctaExhibitors}
          </a>
          <a
            href="#creator"
            style={{
              background: 'transparent',
              color: '#1F3D2B',
              border: '1.5px solid #B7D36B',
              borderRadius: '999px',
              padding: '13px 28px',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
            }}
          >
            {t.ctaCreators}
          </a>
        </div>
      </div>
    </section>
  );
}
