import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="fixed top-4 right-6 z-50 flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1.5">
      <button
        onClick={() => setLanguage('it')}
        className={`text-sm px-2 py-0.5 rounded-full transition-colors ${
          language === 'it' ? 'font-bold text-white' : 'text-white/60 hover:text-white'
        }`}
      >
        IT
      </button>
      <span className="text-white/40 text-sm">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`text-sm px-2 py-0.5 rounded-full transition-colors ${
          language === 'en' ? 'font-bold text-white' : 'text-white/60 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <LanguageSwitcher />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="assets/serre-giardini-bologna.jpg"
          alt="Vista aerea delle Serre dei Giardini di Bologna, serre di vetro immerse nel verde"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f3d2b]/60 via-[#1f3d2b]/50 to-[#1f3d2b]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm md:text-base text-white/80 uppercase tracking-widest mb-4">
          {t.tagline}
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 animate-fade-in tracking-tight">
          {t.title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-2 max-w-3xl mx-auto italic">
          {t.subtitle}
        </p>
        <p className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          {t.date}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#registrati"
            className="bg-white text-[#1f3d2b] px-8 py-4 rounded-full hover:bg-[#e8f0e9] transition-all transform hover:scale-105 flex items-center gap-2 font-semibold"
          >
            {t.cta1}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#registrati"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all"
          >
            {t.cta2}
          </a>
        </div>

        {/* Event Stats Pills */}
        <div className="flex flex-wrap gap-6 justify-center mt-16 text-white">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="opacity-90 font-semibold">{t.stat1Label}</p>
            <p className="opacity-60 text-xs">{t.stat1Sub}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="opacity-90 font-semibold">{t.stat2Label}</p>
            <p className="opacity-60 text-xs">{t.stat2Sub}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="opacity-90 font-semibold">{t.stat3Label}</p>
            <p className="opacity-60 text-xs">{t.stat3Sub}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="opacity-90 font-semibold">{t.stat4Label}</p>
            <p className="opacity-60 text-xs">{t.stat4Sub}</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}