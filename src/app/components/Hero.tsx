import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571645163064-77faa9676a46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdGFydHVwJTIwZXZlbnQlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc3MTU5NzUyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#00BFA5]/90 via-[#0097A7]/85 to-[#00838F]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fade-in">Innovate <span className="text-[#E0F7F4]">2026</span></h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-4 max-w-3xl mx-auto">
          Il futuro della sostenibilità e dell'innovazione
        </p>
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          3 giorni di esposizioni, workshop interattivi e tavole rotonde con i leader del settore
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-[#00BFA5] px-8 py-4 rounded-full hover:bg-[#E0F7F4] transition-all transform hover:scale-105 flex items-center gap-2">
            Registrati Ora
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all">
            Scopri di più
          </button>
        </div>

        {/* Event Info Pills */}
        <div className="flex flex-wrap gap-6 justify-center mt-16 text-white">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="opacity-80">📅 15-17 Maggio 2026</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="opacity-80">📍 Milano Expo Center</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="opacity-80">👥 500+ Partecipanti</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
