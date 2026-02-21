import { MessageCircle, Users2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

const roundtableData = [
  {
    moderator: "Dr. Elena Fontana",
    panelists: ["CEO GreenCity", "Ricercatore UniMI", "Fondatore UrbanGrow", "Investitore Impact"],
    date: "15 Maggio",
    time: "15:00 - 17:00",
    image: "https://images.unsplash.com/photo-1697059361419-349e924ed363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VuZHRhYmxlJTIwZGlzY3Vzc2lvbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MTU5NzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    moderator: "Prof. Marco Santini",
    panelists: ["CFO EcoVentures", "Startup Founder", "Angel Investor", "Sustainability Expert"],
    date: "16 Maggio",
    time: "11:00 - 13:00",
    image: "https://images.unsplash.com/photo-1697059361419-349e924ed363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VuZHRhYmxlJTIwZGlzY3Vzc2lvbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MTU5NzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    moderator: "Ing. Sara Colombo",
    panelists: ["CTO AgriTech", "Biologo", "Data Scientist", "Product Designer"],
    date: "17 Maggio",
    time: "14:30 - 16:30",
    image: "https://images.unsplash.com/photo-1697059361419-349e924ed363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3VuZHRhYmxlJTIwZGlzY3Vzc2lvbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MTU5NzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function RoundTables() {
  const { language } = useLanguage();
  const t = translations[language].roundtables;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-[#E0F7F4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00BFA5] uppercase tracking-wide">{t.sectionLabel}</span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-6">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="space-y-8">
          {t.items.map((item, index) => {
            const data = roundtableData[index];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 h-64 md:h-auto">
                    <img
                      src={data.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="md:w-3/5 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#00BFA5]/10 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-[#00BFA5]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#0097A7]">{data.date} • {data.time}</p>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-6">{item.description}</p>

                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-2">{t.moderatorLabel}</p>
                      <p className="text-[#00BFA5]">{data.moderator}</p>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                        <Users2 className="w-4 h-4" />
                        {t.panelistsLabel}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {data.panelists.map((panelist, idx) => (
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
                      {t.registerButton}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
