import { Hero } from './components/Hero';
import { About } from './components/About';
import { Exhibitors } from './components/Exhibitors';
import { Workshops } from './components/Workshops';
import { RoundTables } from './components/RoundTables';
import { EventInfo } from './components/EventInfo';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Exhibitors />
      <Workshops />
      <RoundTables />
      <EventInfo />
      <CTA />
      <Footer />
    </div>
  );
}
