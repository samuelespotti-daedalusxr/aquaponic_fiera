# Innovate 2026 - Landing Page Evento

Landing page moderna e responsive per fiera/evento dedicato all'innovazione e alla sostenibilità.

## 🎨 Design

Il design utilizza la palette di colori di **Aquaponic Design**:
- Verde acqua principale: `#00BFA5`
- Blu oceano secondario: `#0097A7`
- Accent turchese chiaro: `#E0F7F4`
- Design giovane in stile startup-mode

## 🚀 Features

- ✅ **Hero Section** - Sezione iniziale full-screen con CTA
- ✅ **About** - Presentazione dell'evento con value proposition
- ✅ **Espositori** - Showcase delle aziende partecipanti
- ✅ **Workshop** - Calendario workshop interattivi
- ✅ **Tavole Rotonde** - Programma discussioni con esperti
- ✅ **Info Evento** - Date, location, orari e mappa
- ✅ **CTA Form** - Form di registrazione
- ✅ **Footer** - Link, social media e contatti
- ✅ Completamente responsive (mobile, tablet, desktop)

## 🛠️ Tech Stack

- **React 18.3.1**
- **Tailwind CSS v4**
- **Vite**
- **Lucide React** (icone)
- **TypeScript/TSX**

## 📦 Installazione

```bash
# Installa le dipendenze
pnpm install

# Avvia il server di sviluppo
pnpm dev

# Build per produzione
pnpm build
```

## 📂 Struttura Progetto

```
src/
├── app/
│   ├── components/
│   │   ├── Hero.tsx          # Sezione hero
│   │   ├── About.tsx          # Chi siamo
│   │   ├── Exhibitors.tsx     # Espositori
│   │   ├── Workshops.tsx      # Workshop
│   │   ├── RoundTables.tsx    # Tavole rotonde
│   │   ├── EventInfo.tsx      # Info evento
│   │   ├── CTA.tsx            # Call to action
│   │   └── Footer.tsx         # Footer
│   └── App.tsx                # Componente principale
└── styles/
    └── theme.css              # Variabili colori custom
```

## 🎯 Componenti

### Hero
Sezione iniziale con:
- Background image + gradient overlay
- Titolo principale animato
- 2 CTA buttons
- Info pills (date, location, partecipanti)
- Scroll indicator

### Exhibitors
Grid di card espositori con:
- Icone categorizzate
- Nome azienda
- Categoria
- Descrizione

### Workshops
Card workshop con:
- Immagine preview
- Badge livello
- Info docente
- Orari e durata
- Posti disponibili
- CTA prenotazione

### Round Tables
Layout espanso con:
- Immagine discussione
- Titolo e descrizione
- Moderatore
- Lista panelisti
- Orario sessione

## 🌈 Palette Colori

```css
--primary: #00BFA5        /* Verde acqua */
--secondary: #0097A7      /* Blu oceano */
--accent: #E0F7F4         /* Turchese chiaro */
--foreground: #1a1a1a     /* Testo principale */
```

## 📱 Responsive

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Tutti i componenti si adattano automaticamente grazie a Tailwind breakpoints.

## 🔧 Personalizzazione

Per modificare i colori, edita `/src/styles/theme.css`:

```css
:root {
  --primary: #TUO_COLORE;
  --secondary: #TUO_COLORE;
  /* ... */
}
```

## 📄 Licenza

Progetto creato per Aquaponic Design.

---

Sviluppato con ❤️ usando Figma Make
