import { Lightbulb, Users, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00BFA5] uppercase tracking-wide">{t.sectionLabel}</span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-6">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#E0F7F4] p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-[#00BFA5] rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl mb-4">{t.card1Title}</h3>
            <p className="text-muted-foreground">{t.card1Text}</p>
          </div>

          <div className="bg-[#E0F7F4] p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-[#0097A7] rounded-full flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl mb-4">{t.card2Title}</h3>
            <p className="text-muted-foreground">{t.card2Text}</p>
          </div>

          <div className="bg-[#E0F7F4] p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-[#00838F] rounded-full flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl mb-4">{t.card3Title}</h3>
            <p className="text-muted-foreground">{t.card3Text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
