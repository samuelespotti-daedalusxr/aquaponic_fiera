import { Clock, Users, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  it: {
    label: 'Workshop',
    title: 'Impara dai migliori',
    description: 'Sessioni pratiche e interattive per acquisire competenze concrete nel settore',
    workshops: [
      { title: "Introduzione all'Acquaponica", date: '15 Maggio', level: 'Principianti', duration: '3 ore', capacity: '25 persone' },
      { title: 'IoT per Smart Farming', date: '16 Maggio', level: 'Intermedio', duration: '4 ore', capacity: '20 persone' },
      { title: 'Business Model Sostenibile', date: '17 Maggio', level: 'Tutti i livelli', duration: '2.5 ore', capacity: '30 persone' },
    ],
    bookBtn: 'Prenota il posto',
  },
  en: {
    label: 'Workshops',
    title: 'Learn from the best',
    description: 'Practical and interactive sessions to acquire concrete skills in the sector',
    workshops: [
      { title: 'Introduction to Aquaponics', date: 'May 15', level: 'Beginners', duration: '3 hours', capacity: '25 people' },
      { title: 'IoT for Smart Farming', date: 'May 16', level: 'Intermediate', duration: '4 hours', capacity: '20 people' },
      { title: 'Sustainable Business Model', date: 'May 17', level: 'All levels', duration: '2.5 hours', capacity: '30 people' },
    ],
    bookBtn: 'Book your spot',
  },
};

export function Workshops() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const workshopData = [
    { instructor: "Dr. Maria Rossi", time: "10:00 - 13:00", image: "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzE1OTc1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { instructor: "Ing. Luca Bianchi", time: "14:00 - 18:00", image: "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzE1OTc1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
    { instructor: "Prof. Giovanni Verdi", time: "09:30 - 12:00", image: "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzE1OTc1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00BFA5] uppercase tracking-wide">{t.label}</span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-6">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.workshops.map((workshop, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={workshopData[index].image}
                  alt={workshop.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#00BFA5] text-white px-3 py-1 rounded-full text-sm">
                  {workshop.level}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl mb-2">{workshop.title}</h3>
                <p className="text-[#0097A7] mb-4">{workshopData[index].instructor}</p>

                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#00BFA5]" />
                    <span>{workshop.date} • {workshopData[index].time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#00BFA5]" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#00BFA5]" />
                    <span>Max {workshop.capacity}</span>
                  </div>
                </div>

                <button className="w-full bg-[#E0F7F4] text-[#00BFA5] py-3 rounded-full hover:bg-[#00BFA5] hover:text-white transition-all">
                  {t.bookBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
