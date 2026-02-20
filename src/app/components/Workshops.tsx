import { Clock, Users, Calendar } from 'lucide-react';

export function Workshops() {
  const workshops = [
    {
      title: "Introduzione all'Acquaponica",
      instructor: "Dr. Maria Rossi",
      duration: "3 ore",
      capacity: "25 persone",
      date: "15 Maggio",
      time: "10:00 - 13:00",
      level: "Principianti",
      image: "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzE1OTc1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "IoT per Smart Farming",
      instructor: "Ing. Luca Bianchi",
      duration: "4 ore",
      capacity: "20 persone",
      date: "16 Maggio",
      time: "14:00 - 18:00",
      level: "Intermedio",
      image: "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzE1OTc1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Business Model Sostenibile",
      instructor: "Prof. Giovanni Verdi",
      duration: "2.5 ore",
      capacity: "30 persone",
      date: "17 Maggio",
      time: "09:30 - 12:00",
      level: "Tutti i livelli",
      image: "https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGNvbGxhYm9yYXRpb24lMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzE1OTc1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00BFA5] uppercase tracking-wide">Workshop</span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-6">Impara dai migliori</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sessioni pratiche e interattive per acquisire competenze concrete nel settore
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={workshop.image} 
                  alt={workshop.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#00BFA5] text-white px-3 py-1 rounded-full text-sm">
                  {workshop.level}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl mb-2">{workshop.title}</h3>
                <p className="text-[#0097A7] mb-4">{workshop.instructor}</p>
                
                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#00BFA5]" />
                    <span>{workshop.date} • {workshop.time}</span>
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
                  Prenota il posto
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
