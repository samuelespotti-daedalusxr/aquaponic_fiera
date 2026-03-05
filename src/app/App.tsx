import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Highlights } from './components/Highlights';
import { Program } from './components/Program';
import { Formats } from './components/Formats';
import { Institutional } from './components/Institutional';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen" style={{ background: '#F6F3EC', color: '#1C1F1D', fontFamily: 'Inter, sans-serif' }}>
        <Navbar />
        <Hero />
        <About />
        <Highlights />
        <Program />
        <Formats />
        <Institutional />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
