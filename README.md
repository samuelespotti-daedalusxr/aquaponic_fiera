# OLTRE LA TERRA — Landing Page

**8–10 Maggio 2026 · Le Serre dei Giardini, Bologna**

---

## 🚀 Per vedere il sito online — 3 click

### 1. Mergia la PR
👉 **https://github.com/samuelespotti-daedalusxr/aquaponic_fiera/pulls**
→ Apri la PR → "**Merge pull request**" → "**Confirm merge**"

Il workflow GitHub Actions parte in automatico e crea il branch `gh-pages` con tutti i file statici.

### 2. Attiva GitHub Pages (solo la prima volta)
👉 **https://github.com/samuelespotti-daedalusxr/aquaponic_fiera/settings/pages**

- **Source**: "Deploy from a branch"
- **Branch**: `gh-pages` / `/ (root)`
- Clicca **Save**

### 3. Sito live entro 1 minuto
🌐 **https://samuelespotti-daedalusxr.github.io/aquaponic_fiera/**

---

## Struttura file

```
index.html              ← Landing page (12 sezioni)
assets/
  styles.css            ← CSS mobile-first, zero framework
  main.js               ← JS vanilla
  og-image.jpg          ← Placeholder OG (sostituire: 1200×630px)
  serre-giardini-bologna.jpg  ← Foto hero
.github/workflows/
  deploy.yml            ← Auto-deploy su gh-pages al merge
```

## Immagini da aggiornare (opzionale)
- `assets/og-image.jpg` → sostituire con foto evento 1200×630px
- `assets/serre-giardini-bologna.jpg` → foto drone Le Serre dei Giardini
- `assets/venue-placeholder.jpg` → foto venue (da aggiungere)

## Contatti
oltrelaterra@aquaponicdesign.it · Aquaponic Design Srl
