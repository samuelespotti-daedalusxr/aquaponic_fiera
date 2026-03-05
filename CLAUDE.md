# Istruzioni per Claude — Progetto OLTRE LA TERRA

## REGOLA OBBLIGATORIA: Link dopo ogni push

Dopo ogni `git push` su qualsiasi branch, devi SEMPRE includere nella risposta questi link:

---

### Per vedere le modifiche online:

**1. Mergia la PR:**
👉 https://github.com/samuelespotti-daedalusxr/aquaponic_fiera/compare/main...[NOME_BRANCH]

oppure dalla lista PR:
👉 https://github.com/samuelespotti-daedalusxr/aquaponic_fiera/pulls

→ Apri la PR → "Merge pull request" → "Confirm merge" → attendi ~1 minuto

**2. Sito live:**
🌐 https://samuelespotti-daedalusxr.github.io/aquaponic_fiera/

---

## Architettura del progetto

- **Sito live**: `index.html` + `assets/styles.css` + `assets/main.js` (HTML/CSS/JS vanilla)
- **Codice React**: `src/` (NON è quello che viene servito online — è separato)
- **Deploy**: GitHub Actions su merge in `main` → branch `gh-pages`

## Regole di sviluppo

- Tutte le modifiche visibili online vanno fatte in `index.html`, `assets/styles.css`, `assets/main.js`
- Le modifiche a `src/` NON cambiano il sito online
- Approccio mobile-first sempre
- Non pushare mai direttamente su `main` o `master`
