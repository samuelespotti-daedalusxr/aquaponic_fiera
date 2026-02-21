import { Lightbulb, Users, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  it: {
    label: 'Chi Siamo',
    title: 'Un evento che trasforma il futuro',
    description: "Innovate 2026 è il punto d'incontro tra imprenditori, innovatori e visionari che stanno costruendo un futuro più sostenibile e tecnologicamente avanzato.",
    card1Title: 'Innovazione',
    card1Desc: "Scopri le ultime tecnologie e soluzioni che stanno rivoluzionando i settori della sostenibilità e dell'agricoltura urbana.",
    card2Title: 'Networking',
    card2Desc: 'Connettiti con professionisti, investitori e aziende leader per creare partnership strategiche e opportunità di business.',
    card3Title: 'Crescita',
    card3Desc: 'Partecipa a workshop pratici e sessioni formative per sviluppare competenze concrete e far crescere il tuo progetto.',
  },
  en: {
    label: 'About Us',
    title: 'An event that transforms the future',
    description: 'Innovate 2026 is the meeting point between entrepreneurs, innovators and visionaries building a more sustainable and technologically advanced future.',
    card1Title: 'Innovation',
    card1Desc: 'Discover the latest technologies and solutions revolutionizing the fields of sustainability and urban agriculture.',
    card2Title: 'Networking',
    card2Desc: 'Connect with professionals, investors and leading companies to create strategic partnerships and business opportunities.',
    card3Title: 'Growth',
    card3Desc: 'Participate in practical workshops and training sessions to develop concrete skills and grow your project.',
  },
};

export function About() {
  const { lang } = useLanguage();
  const t = translations[lang];

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

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#E0F7F4] p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-[#00BFA5] rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl mb-4">{t.card1Title}</h3>
            <p className="text-muted-foreground">
              {t.card1Desc}
            </p>
          </div>

          <div className="bg-[#E0F7F4] p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-[#0097A7] rounded-full flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl mb-4">{t.card2Title}</h3>
            <p className="text-muted-foreground">
              {t.card2Desc}
            </p>
          </div>

          <div className="bg-[#E0F7F4] p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-[#00838F] rounded-full flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl mb-4">{t.card3Title}</h3>
            <p className="text-muted-foreground">
              {t.card3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
