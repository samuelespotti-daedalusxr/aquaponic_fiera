import { Building2, Sprout, Zap, Droplets } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  it: {
    label: 'Espositori',
    title: 'Aziende innovative in mostra',
    description: 'Incontra le aziende pioniere che stanno ridefinendo il futuro della sostenibilità',
    exhibitors: [
      { category: 'Agricoltura Sostenibile', description: "Sistemi aquaponici all'avanguardia per coltivazione urbana" },
      { category: 'Gestione Idrica', description: "Tecnologie innovative per il risparmio e il riciclo dell'acqua" },
      { category: 'Energie Rinnovabili', description: "Soluzioni integrate per l'energia pulita e autosufficiente" },
      { category: 'Smart Farming', description: 'IoT e AI per l\'ottimizzazione della produzione alimentare' },
    ],
    cta: 'Vedi tutti gli espositori',
  },
  en: {
    label: 'Exhibitors',
    title: 'Innovative companies on display',
    description: 'Meet the pioneering companies redefining the future of sustainability',
    exhibitors: [
      { category: 'Sustainable Agriculture', description: 'Cutting-edge aquaponic systems for urban cultivation' },
      { category: 'Water Management', description: 'Innovative technologies for water saving and recycling' },
      { category: 'Renewable Energy', description: 'Integrated solutions for clean and self-sufficient energy' },
      { category: 'Smart Farming', description: 'IoT and AI for optimizing food production' },
    ],
    cta: 'See all exhibitors',
  },
};

export function Exhibitors() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const icons = [Sprout, Droplets, Zap, Building2];
  const names = ["GreenTech Solutions", "AquaFlow Systems", "EcoEnergy Hub", "UrbanFarm Tech"];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#E0F7F4] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00BFA5] uppercase tracking-wide">{t.label}</span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-6">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.exhibitors.map((exhibitor, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-[#00BFA5]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#00BFA5]" />
                </div>
                <h3 className="text-xl mb-2">{names[index]}</h3>
                <p className="text-sm text-[#00BFA5] mb-3">{exhibitor.category}</p>
                <p className="text-sm text-muted-foreground">{exhibitor.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#00BFA5] text-white px-8 py-4 rounded-full hover:bg-[#0097A7] transition-all">
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
