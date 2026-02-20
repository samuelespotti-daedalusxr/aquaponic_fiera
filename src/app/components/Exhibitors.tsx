import { Building2, Sprout, Zap, Droplets } from 'lucide-react';

export function Exhibitors() {
  const exhibitors = [
    {
      icon: Sprout,
      name: "GreenTech Solutions",
      category: "Agricoltura Sostenibile",
      description: "Sistemi aquaponici all'avanguardia per coltivazione urbana"
    },
    {
      icon: Droplets,
      name: "AquaFlow Systems",
      category: "Gestione Idrica",
      description: "Tecnologie innovative per il risparmio e il riciclo dell'acqua"
    },
    {
      icon: Zap,
      name: "EcoEnergy Hub",
      category: "Energie Rinnovabili",
      description: "Soluzioni integrate per l'energia pulita e autosufficiente"
    },
    {
      icon: Building2,
      name: "UrbanFarm Tech",
      category: "Smart Farming",
      description: "IoT e AI per l'ottimizzazione della produzione alimentare"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#E0F7F4] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00BFA5] uppercase tracking-wide">Espositori</span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-6">Aziende innovative in mostra</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Incontra le aziende pioniere che stanno ridefinendo il futuro della sostenibilità
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exhibitors.map((exhibitor, index) => {
            const Icon = exhibitor.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-[#00BFA5]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#00BFA5]" />
                </div>
                <h3 className="text-xl mb-2">{exhibitor.name}</h3>
                <p className="text-sm text-[#00BFA5] mb-3">{exhibitor.category}</p>
                <p className="text-sm text-muted-foreground">{exhibitor.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#00BFA5] text-white px-8 py-4 rounded-full hover:bg-[#0097A7] transition-all">
            Vedi tutti gli espositori
          </button>
        </div>
      </div>
    </section>
  );
}
