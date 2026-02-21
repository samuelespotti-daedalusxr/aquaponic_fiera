import { MapPin, Calendar, Clock, Ticket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export function EventInfo() {
  const { language } = useLanguage();
  const t = translations[language].eventInfo;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#00BFA5] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">{t.title}</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl mb-2">{t.card1Title}</h3>
            <p className="text-white/80">15-17 Maggio 2026</p>
            <p className="text-sm text-white/60 mt-2">{t.card1Sub}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl mb-2">{t.card2Title}</h3>
            <p className="text-white/80">Milano Expo Center</p>
            <p className="text-sm text-white/60 mt-2">Via Expo 1, Milano</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl mb-2">{t.card3Title}</h3>
            <p className="text-white/80">09:00 - 19:00</p>
            <p className="text-sm text-white/60 mt-2">{t.card3Sub}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Ticket className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl mb-2">{t.card4Title}</h3>
            <p className="text-white/80">Da €49</p>
            <p className="text-sm text-white/60 mt-2">{t.card4Sub}</p>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
          <div className="h-96 bg-gradient-to-br from-[#0097A7] to-[#00838F] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-white/50 mx-auto mb-4" />
              <p className="text-white/70">{t.mapLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
