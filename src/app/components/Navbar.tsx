import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const navLinks = [
  { label: { it: 'Programma', en: 'Program' }, href: '#programma' },
  { label: { it: 'Format', en: 'Formats' }, href: '#format' },
  { label: { it: 'Masterclass 2026/27', en: 'Masterclass 2026/27' }, href: '#masterclass' },
  { label: { it: 'Dove', en: 'Venue' }, href: '#dove' },
];

export function Navbar() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(246,243,236,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(110,143,116,0.18)' : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={handleLinkClick}
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 800,
              fontSize: '18px',
              color: scrolled ? '#1F3D2B' : '#fff',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
              transition: 'color 0.3s',
              flexShrink: 0,
            }}
          >
            OLTRE LA TERRA
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: '32px' }}
            aria-label="Navigazione principale"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: scrolled ? '#1C1F1D' : 'rgba(255,255,255,0.88)',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#6E8F74'; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = scrolled ? '#1C1F1D' : 'rgba(255,255,255,0.88)'; }}
              >
                {link.label[lang]}
              </a>
            ))}
          </nav>

          {/* Desktop right: language + CTA */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '20px' }}>
            {/* Language switcher */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                onClick={() => setLang('it')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: lang === 'it' ? 700 : 400,
                  color: lang === 'it'
                    ? (scrolled ? '#1F3D2B' : '#fff')
                    : (scrolled ? 'rgba(28,31,29,0.45)' : 'rgba(255,255,255,0.45)'),
                  letterSpacing: '0.06em',
                  padding: '2px 0',
                  transition: 'color 0.2s',
                  fontFamily: 'Inter, sans-serif',
                }}
                aria-pressed={lang === 'it'}
              >
                IT
              </button>
              <span style={{ color: scrolled ? 'rgba(28,31,29,0.3)' : 'rgba(255,255,255,0.3)', fontSize: '13px' }}>|</span>
              <button
                onClick={() => setLang('en')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: lang === 'en' ? 700 : 400,
                  color: lang === 'en'
                    ? (scrolled ? '#1F3D2B' : '#fff')
                    : (scrolled ? 'rgba(28,31,29,0.45)' : 'rgba(255,255,255,0.45)'),
                  letterSpacing: '0.06em',
                  padding: '2px 0',
                  transition: 'color 0.2s',
                  fontFamily: 'Inter, sans-serif',
                }}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>

            {/* CTA Esponi */}
            <a
              href="#esponi"
              style={{
                background: '#B7D36B',
                color: '#1F3D2B',
                borderRadius: '999px',
                padding: '10px 24px',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                textDecoration: 'none',
                transition: 'background 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.background = '#c9e67c'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.background = '#B7D36B'; }}
            >
              {lang === 'it' ? 'Esponi' : 'Exhibit'}
            </a>
          </div>

          {/* Mobile: language + hamburger */}
          <div className="flex md:hidden" style={{ alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                onClick={() => setLang('it')}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '13px', fontWeight: lang === 'it' ? 700 : 400,
                  color: lang === 'it' ? (scrolled ? '#1F3D2B' : '#fff') : (scrolled ? 'rgba(28,31,29,0.45)' : 'rgba(255,255,255,0.45)'),
                  letterSpacing: '0.06em', fontFamily: 'Inter, sans-serif',
                }}
                aria-pressed={lang === 'it'}
              >IT</button>
              <span style={{ color: scrolled ? 'rgba(28,31,29,0.3)' : 'rgba(255,255,255,0.3)', fontSize: '13px' }}>|</span>
              <button
                onClick={() => setLang('en')}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '13px', fontWeight: lang === 'en' ? 700 : 400,
                  color: lang === 'en' ? (scrolled ? '#1F3D2B' : '#fff') : (scrolled ? 'rgba(28,31,29,0.45)' : 'rgba(255,255,255,0.45)'),
                  letterSpacing: '0.06em', fontFamily: 'Inter, sans-serif',
                }}
                aria-pressed={lang === 'en'}
              >EN</button>
            </div>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Chiudi menu' : 'Apri menu'}
              aria-expanded={open}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: scrolled ? '#1F3D2B' : '#fff',
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                transition: 'color 0.2s',
              }}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        aria-hidden={!open}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: '#1F3D2B',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px 32px 48px',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          overflowY: 'auto',
        }}
      >
        <nav aria-label="Menu mobile" style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(28px, 8vw, 40px)',
                color: '#fff',
                textDecoration: 'none',
                lineHeight: 1.3,
                padding: '12px 0',
                borderBottom: '1px solid rgba(255,255,255,0.10)',
                display: 'block',
                transition: 'color 0.15s',
              }}
            >
              {link.label[lang]}
            </a>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div style={{ marginTop: '48px' }}>
          <a
            href="#esponi"
            onClick={handleLinkClick}
            style={{
              display: 'block',
              background: '#B7D36B',
              color: '#1F3D2B',
              borderRadius: '999px',
              padding: '18px 32px',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 700,
              fontSize: '18px',
              textDecoration: 'none',
              textAlign: 'center',
              width: '100%',
            }}
          >
            {lang === 'it' ? 'Esponi' : 'Exhibit'}
          </a>
        </div>
      </div>
    </>
  );
}
