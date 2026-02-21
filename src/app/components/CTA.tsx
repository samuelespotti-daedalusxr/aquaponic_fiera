import { ArrowRight, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export function CTA() {
  const { language } = useLanguage();
  const t = translations[language].cta;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
          {t.title}
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.description}
        </p>

        <div className="bg-gradient-to-br from-[#E0F7F4] to-[#B2EBF2] p-8 md:p-12 rounded-3xl shadow-xl">
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder={t.namePlaceholder}
                  className="w-full px-6 py-4 rounded-full bg-white border-2 border-transparent focus:border-[#00BFA5] outline-none transition-all"
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="w-full px-6 py-4 rounded-full bg-white border-2 border-transparent focus:border-[#00BFA5] outline-none transition-all"
                />
              </div>
            </div>

            <button className="w-full bg-[#00BFA5] text-white px-8 py-5 rounded-full hover:bg-[#0097A7] transition-all transform hover:scale-105 flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" />
              {t.submitButton}
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-sm text-muted-foreground mt-6">
              {t.disclaimer}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl text-[#00BFA5] mb-2">500+</p>
            <p className="text-muted-foreground">{t.stat1}</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl text-[#00BFA5] mb-2">50+</p>
            <p className="text-muted-foreground">{t.stat2}</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl text-[#00BFA5] mb-2">25+</p>
            <p className="text-muted-foreground">{t.stat3}</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl text-[#00BFA5] mb-2">15+</p>
            <p className="text-muted-foreground">{t.stat4}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
