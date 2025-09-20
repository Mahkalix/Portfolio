# Guide de déploiement Backend sur Vercel

## ✅ Votre backend fonctionne localement !

Votre serveur local est opérationnel sur `http://localhost:3001`. 

## 🚀 Déployer sur Vercel

### 1. Via l'interface web Vercel (Recommandé)

1. Allez sur [vercel.com](https://vercel.com/) et connectez-vous
2. Cliquez "New Project"
3. Importez votre repository GitHub `Portfolio`
4. **IMPORTANT** : Configurez le projet :
   - **Root Directory** : `back-end` (très important !)
   - **Framework Preset** : `Other`
   - **Build Command** : `npm install && npx prisma generate`
   - **Install Command** : `npm install`

### 2. Variables d'environnement

Dans les paramètres du projet Vercel, ajoutez ces variables dans "Environment Variables" :

```
DATABASE_URL=postgresql://neondb_owner:npg_SO3gKT5ebLvV@ep-broad-boat-abowv8n2-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require

DIRECT_URL=postgresql://neondb_owner:npg_SO3gKT5ebLvV@ep-broad-boat-abowv8n2-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require

NODE_ENV=production
```

### 3. Déploiement

1. Commitez et pushez vos changements :
   ```bash
   git add .
   git commit -m "Fix Vercel configuration"
   git push
   ```

2. Vercel déploiera automatiquement
3. Votre API sera disponible à : `https://votre-projet.vercel.app`

### 4. Test du déploiement

Testez ces endpoints une fois déployé :
- `GET https://votre-projet.vercel.app/` - Page d'accueil
- `GET https://votre-projet.vercel.app/api/test` - Test API
- `GET https://votre-projet.vercel.app/api/projects` - Liste des projets

### 5. Erreurs courantes et solutions

**Erreur "Cannot find module"** :
- Vérifiez que Root Directory est bien défini sur `back-end`

**Erreur de base de données** :
- Vérifiez que vos variables d'environnement sont correctement configurées
- Assurez-vous que Neon Database autorise les connexions

**Erreur de build Prisma** :
- Le script `postinstall` génère automatiquement le client Prisma
- Vérifiez que le schéma Prisma est valide

**Timeout d'exécution** :
- Les fonctions Vercel ont une limite de temps
- Optimisez vos requêtes si nécessaire

## 📝 Configuration actuelle

✅ **Fichiers configurés** :
- `vercel.json` - Configuration Vercel simplifiée
- `server.js` - Adapté pour l'environnement serverless
- `package.json` - Script postinstall pour Prisma

✅ **Base de données** :
- Neon Database configurée et fonctionnelle
- Prisma Client généré et opérationnel

✅ **Tests locaux** :
- Serveur fonctionne sur http://localhost:3001
- API répond correctement aux requêtes