import { useLanguage } from '../context/LanguageContext';

export function Institutional() {
  const { lang } = useLanguage();

  return (
    <section id="istituzionale" style={{ background: '#1F3D2B', padding: '100px 24px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B7D36B', marginBottom: '20px' }}>
          {lang === 'it' ? 'Tavola Rotonda' : 'Round Table'}
        </p>
        <h2 style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: '#fff', marginBottom: '32px', lineHeight: 1.25 }}>
          {lang === 'it' ? 'Un confronto istituzionale concreto' : 'A concrete institutional discussion'}
        </h2>
        <div style={{ width: '48px', height: '1px', background: '#B7D36B', marginBottom: '36px' }} />
        <p style={{ fontSize: '17px', lineHeight: 1.75, color: 'rgba(255,255,255,0.82)', margin: 0 }}>
          {lang === 'it'
            ? 'OLTRE LA TERRA propone una tavola rotonda con istituzioni, associazioni di categoria, imprese e ricerca: un confronto concreto su sovranità alimentare, resilienza produttiva e innovazione tecnologica applicata alle colture fuori suolo in Italia. Standard, filiere, ricerca, competenze, investimenti e modelli sostenibili.'
            : 'OLTRE LA TERRA hosts a round table with institutions, trade associations, companies and research: a concrete discussion on food sovereignty, productive resilience and technological innovation applied to soilless crops in Italy. Standards, supply chains, research, skills, investments and sustainable models.'}
        </p>
        <a
          href="#newsletter"
          style={{ display: 'inline-block', marginTop: '40px', padding: '14px 32px', border: '1.5px solid #B7D36B', borderRadius: '999px', color: '#B7D36B', textDecoration: 'none', fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '14px' }}
        >
          {lang === 'it' ? 'Ricevi aggiornamenti' : 'Stay updated'}
        </a>
      </div>
    </section>
  );
}