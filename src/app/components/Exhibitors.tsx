import { Building2, Sprout, Zap, Droplets } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export function Exhibitors() {
  const { language } = useLanguage();
  const t = translations[language].exhibitors;

  const exhibitorIcons = [Sprout, Droplets, Zap, Building2];
  const exhibitorNames = ["GreenTech Solutions", "AquaFlow Systems", "EcoEnergy Hub", "UrbanFarm Tech"];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#E0F7F4] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00BFA5] uppercase tracking-wide">{t.sectionLabel}</span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-6">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, index) => {
            const Icon = exhibitorIcons[index];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-[#00BFA5]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#00BFA5]" />
                </div>
                <h3 className="text-xl mb-2">{exhibitorNames[index]}</h3>
                <p className="text-sm text-[#00BFA5] mb-3">{item.category}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#00BFA5] text-white px-8 py-4 rounded-full hover:bg-[#0097A7] transition-all">
            {t.viewAll}
          </button>
        </div>
      </div>
    </section>
  );
}
