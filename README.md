# OLTRE LA TERRA — Landing Page

Sito statico della landing page **OLTRE LA TERRA** (8–10 Maggio 2026, Bologna).

---

## 👁️ Come vedere il sito live

### Metodo 1 — Approva il workflow GitHub Actions (consigliato)

1. Vai su: https://github.com/samuelespotti-daedalusxr/aquaponic_fiera/actions
2. Clicca sul workflow in attesa → clicca **"Approve and run"**
3. Aspetta ~30 secondi che finisca (comparirà un branch `gh-pages`)
4. Vai su: **Settings → Pages → Source → "Deploy from a branch" → branch: `gh-pages` → root `/`**
5. Clicca **Save**
6. Sito live: `https://samuelespotti-daedalusxr.github.io/aquaponic_fiera/`

### Metodo 2 — Mergia la PR (più semplice)

1. Vai sulla PR aperta e clicca **"Merge pull request"**
2. Vai su: **Settings → Pages → Source → branch: `main` → root `/`**
3. Sito live: `https://samuelespotti-daedalusxr.github.io/aquaponic_fiera/`

---

## File statici

| File | Descrizione |
|------|-------------|
| `index.html` | Landing page completa (12 sezioni) |
| `assets/styles.css` | CSS mobile-first, zero framework |
| `assets/main.js` | JS vanilla: accordion, form, scroll |
| `assets/og-image.jpg` | Placeholder OG image (sostituire con 1200×630px) |
| `assets/serre-giardini-bologna.jpg` | Foto hero (già presente) |

## Immagini da sostituire

- **Hero**: `assets/serre-giardini-bologna.jpg` → foto drone Le Serre dei Giardini, Bologna
- **About**: `assets/about-placeholder.jpg` → foto colture fuori suolo (non inclusa)
- **Venue**: `assets/venue-placeholder.jpg` → foto esterna/interna Le Serre (non inclusa)
- **OG image**: `assets/og-image.jpg` → immagine 1200×630px per i social

## Contatti

Email: oltrelaterra@aquaponicdesign.it
Organizzazione: Aquaponic Design Srl
