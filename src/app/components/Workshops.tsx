import { Clock, Users, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

const workshopData = [
  {
    instructor: "Dr. Maria Rossi",
    duration: "3 ore",
    capacity: "25 persone",
    time: "10:00 - 13:00",
    level: "beginners" as const,
    image: "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzE1OTc1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    instructor: "Ing. Luca Bianchi",
    duration: "4 ore",
    capacity: "20 persone",
    time: "14:00 - 18:00",
    level: "intermediate" as const,
    image: "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzE1OTc1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    instructor: "Prof. Giovanni Verdi",
    duration: "2.5 ore",
    capacity: "30 persone",
    time: "09:30 - 12:00",
    level: "all" as const,
    image: "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzE1OTc1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Workshops() {
  const { language } = useLanguage();
  const t = translations[language].workshops;

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item, index) => {
            const data = workshopData[index];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={data.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#00BFA5] text-white px-3 py-1 rounded-full text-sm">
                    {t.levels[data.level]}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl mb-2">{item.title}</h3>
                  <p className="text-[#0097A7] mb-4">{data.instructor}</p>

                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#00BFA5]" />
                      <span>{item.date} • {data.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#00BFA5]" />
                      <span>{data.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#00BFA5]" />
                      <span>Max {data.capacity}</span>
                    </div>
                  </div>

                  <button className="w-full bg-[#E0F7F4] text-[#00BFA5] py-3 rounded-full hover:bg-[#00BFA5] hover:text-white transition-all">
                    {t.bookButton}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
