import { useLanguage } from '../context/LanguageContext';

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-4 right-6 z-50 flex items-center gap-1 bg-[#1f3d2b]/70 backdrop-blur-sm rounded-full px-2 py-1.5">
      <button
        onClick={() => setLang('it')}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
          lang === 'it'
            ? 'bg-white text-[#1f3d2b]'
            : 'text-white/70 hover:text-white'
        }`}
      >
        IT
      </button>
      <span className="text-white/50 text-sm select-none">|</span>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
          lang === 'en'
            ? 'bg-white text-[#1f3d2b]'
            : 'text-white/70 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
}
