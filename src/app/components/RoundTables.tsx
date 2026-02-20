import { MessageCircle, Users2 } from 'lucide-react';

export function RoundTables() {
  const roundtables = [
    {
      title: "Il Futuro dell'Agricoltura Urbana",
      description: "Discussione sulle sfide e opportunità della produzione alimentare nelle città",
      moderator: "Dr. Elena Fontana",
      panelists: ["CEO GreenCity", "Ricercatore UniMI", "Fondatore UrbanGrow", "Investitore Impact"],
      date: "15 Maggio",
      time: "15:00 - 17:00",
      image: "https://images.unsplash.com/photo-1697059361419-349e924ed363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VuZHRhYmxlJTIwZGlzY3Vzc2lvbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MTU5NzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Sostenibilità e Profitto: Un Binomio Possibile?",
      description: "Come costruire business model redditizi mantenendo l'impatto ambientale positivo",
      moderator: "Prof. Marco Santini",
      panelists: ["CFO EcoVentures", "Startup Founder", "Angel Investor", "Sustainability Expert"],
      date: "16 Maggio",
      time: "11:00 - 13:00",
      image: "https://images.unsplash.com/photo-1697059361419-349e924ed363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VuZHRhYmxlJTIwZGlzY3Vzc2lvbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MTU5NzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Tecnologia e Natura: La Nuova Sinergia",
      description: "L'integrazione di AI, IoT e biotecnologie per un'agricoltura innovativa",
      moderator: "Ing. Sara Colombo",
      panelists: ["CTO AgriTech", "Biologo", "Data Scientist", "Product Designer"],
      date: "17 Maggio",
      time: "14:30 - 16:30",
      image: "https://images.unsplash.com/photo-1697059361419-349e924ed363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VuZHRhYmxlJTIwZGlzY3Vzc2lvbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MTU5NzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-[#E0F7F4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00BFA5] uppercase tracking-wide">Tavole Rotonde</span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-6">Dialoghi con i leader del settore</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Partecipa alle discussioni che stanno plasmando il futuro della sostenibilità
          </p>
        </div>

        <div className="space-y-8">
          {roundtables.map((table, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="md:flex">
                <div className="md:w-2/5 h-64 md:h-auto">
                  <img 
                    src={table.image} 
                    alt={table.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="md:w-3/5 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#00BFA5]/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-[#00BFA5]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#0097A7]">{table.date} • {table.time}</p>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl mb-3">{table.title}</h3>
                  <p className="text-muted-foreground mb-6">{table.description}</p>

                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">Moderatore:</p>
                    <p className="text-[#00BFA5]">{table.moderator}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                      <Users2 className="w-4 h-4" />
                      Panelisti:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {table.panelists.map((panelist, idx) => (
                        <span 
                          key={idx}
                          className="bg-[#E0F7F4] text-[#00838F] px-3 py-1 rounded-full text-sm"
                        >
                          {panelist}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="bg-[#00BFA5] text-white px-6 py-3 rounded-full hover:bg-[#0097A7] transition-all">
                    Registrati alla sessione
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
