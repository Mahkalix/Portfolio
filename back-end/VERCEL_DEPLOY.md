# Guide de déploiement Backend sur Vercel

## Étapes pour déployer le backend sur Vercel

### 1. Prérequis
- Compte Vercel (gratuit)
- Base de données Neon configurée
- Repository GitHub avec le code

### 2. Configuration des variables d'environnement sur Vercel

1. Allez sur [vercel.com](https://vercel.com/) et connectez-vous
2. Importez votre repository GitHub
3. Sélectionnez le dossier `back-end` comme projet
4. Dans les paramètres du projet, allez dans "Environment Variables"
5. Ajoutez ces variables :

```
DATABASE_URL=postgresql://username:password@ep-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require
DIRECT_URL=postgresql://username:password@ep-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require
NODE_ENV=production
```

### 3. Configuration du Build

Dans les paramètres du projet Vercel :
- **Framework Preset**: Other
- **Root Directory**: `back-end`
- **Build Command**: `npm install && npx prisma generate`
- **Install Command**: `npm install`

### 4. Déploiement

1. Commitez et pushez vos changements sur GitHub
2. Vercel déploiera automatiquement
3. Votre API sera disponible à l'adresse : `https://votre-projet.vercel.app`

### 5. Test du déploiement

Testez ces endpoints :
- `GET https://votre-projet.vercel.app/` - Page d'accueil
- `GET https://votre-projet.vercel.app/api/test` - Test API
- `GET https://votre-projet.vercel.app/api/projects` - Liste des projets

### 6. Mise à jour du frontend

Dans votre frontend, mettez à jour l'URL de l'API :

```javascript
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://votre-backend.vercel.app' 
  : 'http://localhost:3001';
```

## Troubleshooting

### Erreur de base de données
- Vérifiez que les variables d'environnement sont correctement configurées
- Assurez-vous que Neon Database autorise les connexions externes

### Erreur de build Prisma
- Le script `postinstall` dans package.json génère automatiquement le client Prisma
- En cas d'erreur, vérifiez que le schéma Prisma est valide

### Erreur de timeout
- Les fonctions Vercel ont une limite de 10 secondes (configurée dans vercel.json)
- Optimisez vos requêtes si nécessaire