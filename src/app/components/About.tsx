import { Lightbulb, Users, Target } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00BFA5] uppercase tracking-wide">Chi Siamo</span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-6">Un evento che trasforma il futuro</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Innovate 2026 è il punto d'incontro tra imprenditori, innovatori e visionari 
            che stanno costruendo un futuro più sostenibile e tecnologicamente avanzato.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#E0F7F4] p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-[#00BFA5] rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl mb-4">Innovazione</h3>
            <p className="text-muted-foreground">
              Scopri le ultime tecnologie e soluzioni che stanno rivoluzionando 
              i settori della sostenibilità e dell'agricoltura urbana.
            </p>
          </div>

          <div className="bg-[#E0F7F4] p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-[#0097A7] rounded-full flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl mb-4">Networking</h3>
            <p className="text-muted-foreground">
              Connettiti con professionisti, investitori e aziende leader 
              per creare partnership strategiche e opportunità di business.
            </p>
          </div>

          <div className="bg-[#E0F7F4] p-8 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-[#00838F] rounded-full flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl mb-4">Crescita</h3>
            <p className="text-muted-foreground">
              Partecipa a workshop pratici e sessioni formative per sviluppare 
              competenze concrete e far crescere il tuo progetto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
