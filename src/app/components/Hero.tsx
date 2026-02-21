import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="assets/serre-giardini-bologna.jpg"
          alt="Vista aerea delle Serre dei Giardini di Bologna, serre di vetro immerse nel verde"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f3d2b]/60 via-[#1f3d2b]/50 to-[#1f3d2b]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm md:text-base text-white/80 uppercase tracking-widest mb-4">
          Forum Nazionale · Esposizione Innovativa · Masterclass Imprenditoriali
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 animate-fade-in tracking-tight">
          OLTRE LA TERRA
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-2 max-w-3xl mx-auto italic">
          Dove innovazione tecnologica e agricoltura si incontrano
        </p>
        <p className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          8–10 Maggio 2026 · Le Serre dei Giardini · Bologna
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#registrati"
            className="bg-white text-[#1f3d2b] px-8 py-4 rounded-full hover:bg-[#e8f0e9] transition-all transform hover:scale-105 flex items-center gap-2 font-semibold"
          >
            Scopri il programma
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#registrati"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all"
          >
            Registrati / Aggiornamenti
          </a>
        </div>

        {/* Event Stats Pills */}
        <div className="flex flex-wrap gap-6 justify-center mt-16 text-white">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="opacity-90 font-semibold">40 Espositori</p>
            <p className="opacity-60 text-xs">Infrastrutture, Tecnologie, Servizi</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="opacity-90 font-semibold">3 Giorni</p>
            <p className="opacity-60 text-xs">di Talk &amp; Incontri</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="opacity-90 font-semibold">17 Progetti</p>
            <p className="opacity-60 text-xs">Demo Day Startup</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="opacity-90 font-semibold">Nuova</p>
            <p className="opacity-60 text-xs">Imprenditorialità Locale</p>
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