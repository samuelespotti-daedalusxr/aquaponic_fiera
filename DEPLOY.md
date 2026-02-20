# 🚀 Guida Deploy su GitHub

## Comandi Git per caricare il codice

Esegui questi comandi nel terminale dalla directory del progetto:

### 1. Inizializza Git (se necessario)
```bash
git init
```

### 2. Aggiungi tutti i file
```bash
git add .
```

### 3. Fai il primo commit
```bash
git commit -m "feat: landing page completa Innovate 2026 con design Aquaponic"
```

### 4. Aggiungi il repository remoto
```bash
git remote add origin https://github.com/samuelespotti-daedalusxr/aquaponic_fiera.git
```

### 5. Rinomina il branch in main
```bash
git branch -M main
```

### 6. Pusha su GitHub
```bash
git push -u origin main
```

---

## 🔄 Comandi per aggiornamenti futuri

Dopo la prima configurazione, per caricare nuove modifiche:

```bash
# Aggiungi i file modificati
git add .

# Fai il commit
git commit -m "descrizione delle modifiche"

# Pusha su GitHub
git push
```

---

## ⚠️ Troubleshooting

### Se il remote esiste già
```bash
git remote remove origin
git remote add origin https://github.com/samuelespotti-daedalusxr/aquaponic_fiera.git
```

### Se ci sono conflitti con il branch
```bash
git pull origin main --rebase
git push -u origin main
```

### Se hai bisogno di forzare il push (usa con cautela!)
```bash
git push -u origin main --force
```

---

## 🌐 Deploy su GitHub Pages (opzionale)

Per hostare la landing page gratuitamente su GitHub Pages:

1. Vai su: `https://github.com/samuelespotti-daedalusxr/aquaponic_fiera/settings/pages`

2. In "Source", seleziona il branch `main`

3. Clicca "Save"

4. La tua landing page sarà disponibile su:
   `https://samuelespotti-daedalusxr.github.io/aquaponic_fiera/`

### Configurazione Vite per GitHub Pages

Aggiungi al file `vite.config.ts`:

```typescript
export default {
  base: '/aquaponic_fiera/'
}
```

Poi riesegui:
```bash
pnpm build
git add .
git commit -m "chore: configurazione GitHub Pages"
git push
```

---

## ✅ Checklist

- [ ] `git init` eseguito
- [ ] Tutti i file aggiunti con `git add .`
- [ ] Primo commit creato
- [ ] Remote origin configurato
- [ ] Branch rinominato in main
- [ ] Push eseguito su GitHub
- [ ] Codice visibile su GitHub
- [ ] (Opzionale) GitHub Pages attivato
