# 🚀 Démarrage Rapide - Migration Supabase vers Neon

## ⚡ Configuration en 5 minutes

### 1. Créer votre base Neon
- Allez sur [console.neon.tech](https://console.neon.tech/)
- Créez un projet "Portfolio"
- Copiez la `DATABASE_URL`

### 2. Configuration automatique
```bash
cd back-end
node setup-neon.js
# Suivez les instructions et collez votre URL Neon
```

### 3. Application du schéma
```bash
npx prisma generate
npx prisma db push
```

### 4. Ajout des données initiales
```bash
# Option A: Via Prisma Studio (interface graphique)
npx prisma studio

# Option B: Via script SQL
# Ouvrez neon-data-migration.sql et adaptez les données
```

### 5. Test du serveur
```bash
npm start
# Vérifiez http://localhost:3001/api/test
```

### 6. Démarrage du frontend
```bash
cd ../front-end
npm start
# Vérifiez http://localhost:3000
```

## 🌐 Mise en ligne

### Backend (Railway - Gratuit)
1. [railway.app](https://railway.app/) → Nouveau projet
2. Connectez GitHub → Sélectionnez Portfolio
3. Variables d'environnement :
   - `DATABASE_URL` = Votre URL Neon
   - `DIRECT_URL` = Votre URL Neon
   - `NODE_ENV` = production

### Frontend (Netlify - Gratuit)
1. [netlify.com](https://netlify.com/) → Nouveau site
2. Glisser-déposer le dossier `front-end/build`
3. ✅ Terminé !

## ❓ Problèmes courants

**"Cannot find module" :**
```bash
cd back-end && npm install
cd ../front-end && npm install
```

**"Database connection failed" :**
- Vérifiez votre URL Neon dans le fichier `.env`
- Testez avec `npx prisma studio`

**"CORS error" :**
- Vérifiez que l'URL du backend est correcte dans le frontend
- Consultez `server.js` pour la configuration CORS

## 📁 Fichiers créés pour la migration

- `migration-guide.md` - Guide détaillé
- `setup-neon.js` - Script de configuration automatique
- `neon-data-migration.sql` - Script SQL pour les données
- `quick-start.md` - Ce fichier

## 🎯 Checklist finale

- [ ] Base Neon créée et configurée
- [ ] Variables d'environnement définies
- [ ] Schéma Prisma appliqué
- [ ] Données migrées ou créées
- [ ] Backend testé localement
- [ ] Frontend testé localement
- [ ] Backend déployé en production
- [ ] Frontend déployé en production
- [ ] URLs de production mises à jour
- [ ] Tests des fonctionnalités en production

🎉 **Votre portfolio est maintenant en ligne !**
