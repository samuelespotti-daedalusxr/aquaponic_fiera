import { ArrowRight, Mail } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
          Pronto a far parte del cambiamento?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Registrati ora e ottieni l'accesso anticipato a tutti i contenuti esclusivi dell'evento
        </p>

        <div className="bg-gradient-to-br from-[#E0F7F4] to-[#B2EBF2] p-8 md:p-12 rounded-3xl shadow-xl">
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full px-6 py-4 rounded-full bg-white border-2 border-transparent focus:border-[#00BFA5] outline-none transition-all"
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-full bg-white border-2 border-transparent focus:border-[#00BFA5] outline-none transition-all"
                />
              </div>
            </div>

            <button className="w-full bg-[#00BFA5] text-white px-8 py-5 rounded-full hover:bg-[#0097A7] transition-all transform hover:scale-105 flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" />
              Registrati Gratuitamente
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-sm text-muted-foreground mt-6">
              Riceverai conferma via email. Niente spam, promesso! 🌱
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl text-[#00BFA5] mb-2">500+</p>
            <p className="text-muted-foreground">Partecipanti</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl text-[#00BFA5] mb-2">50+</p>
            <p className="text-muted-foreground">Espositori</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl text-[#00BFA5] mb-2">25+</p>
            <p className="text-muted-foreground">Workshop</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl text-[#00BFA5] mb-2">15+</p>
            <p className="text-muted-foreground">Tavole Rotonde</p>
          </div>
        </div>
      </div>
    </section>
  );
}
