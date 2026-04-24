# 🚀 Portfolio

Un portfolio moderne développé avec React.js et Node.js, utilisant PostgreSQL avec Prisma ORM.

## 📋 Table des matières

- [Technologies utilisées](#-technologies-utilisées)
- [Prérequis](#-prérequis)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Démarrage](#-démarrage)
- [Structure du projet](#-structure-du-projet)
- [Base de données](#-base-de-données)
- [Déploiement](#-déploiement)
- [Troubleshooting](#-troubleshooting)

## 🛠️ Technologies utilisées

### Frontend
- **React.js** - Framework JavaScript
- **SCSS** - Préprocesseur CSS avec modules
- **React Router** - Navigation côté client

### Backend
- **Node.js** (v24.8.0) - Runtime JavaScript
- **Express.js** - Framework web
- **Prisma** - ORM pour la base de données
- **PostgreSQL** - Base de données via Neon Database

### Outils
- **npm** (v11.6.0) - Gestionnaire de paquets
- **VS Code** - Éditeur de code

## 📦 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (v18 ou plus récent) - [Télécharger ici](https://nodejs.org/)
- **npm** (inclus avec Node.js)
- **Git** - [Télécharger ici](https://git-scm.com/)

### Vérification des installations

```bash
node --version    # Doit afficher v24.8.0 ou plus récent
npm --version     # Doit afficher 11.6.0 ou plus récent
git --version     # Pour vérifier Git
```

## 🚀 Installation

### 1. Cloner le repository

```bash
git clone https://github.com/Mahkalix/Portfolio.git
cd Portfolio
```

### 2. Installer les dépendances

**Pour le backend :**
```bash
cd back-end
npm install
```

**Pour le frontend :**
```bash
cd ../front-end
npm install
```

### 3. Configuration PowerShell (Windows uniquement)

Si vous rencontrez des erreurs de politique d'exécution PowerShell :

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```

## ⚙️ Configuration

### Variables d'environnement

Copiez le modèle versionné puis renseignez vos vraies valeurs dans `back-end/.env` :

```bash
cd back-end
cp .env.example .env
```

> Sous PowerShell, vous pouvez aussi utiliser : `Copy-Item .env.example .env`

Exemple de contenu :

```env
# Base de données (Neon Database)
DATABASE_URL="your_neon_database_url"

# Autres variables
PORT=3001
NODE_ENV=development
```

Ne versionnez jamais de secrets dans `.env`.

### Base de données Prisma

Après avoir configuré votre DATABASE_URL :

```bash
cd back-end
npx prisma generate    # Génère le client Prisma
npx prisma db push      # Synchronise le schéma avec la DB
```

## 🏃‍♂️ Démarrage

### Démarrage en développement

**Terminal 1 - Backend :**
```bash
cd back-end
npm start
```
> Le serveur démarre sur http://localhost:3001

**Terminal 2 - Frontend :**
```bash
cd front-end
npm start
```
> L'application démarre sur http://localhost:3000

### Scripts disponibles

**Backend (`back-end/package.json`) :**
- `npm start` - Démarre le serveur
- `npm test` - Lance le test de connexion DB
- `npm run test:login` - Lance le test de login
- `npm run test:data` - Affiche un jeu de données de test
- `npm run test:remote` - Teste le login distant
- `npm run seed` - Exécute le seeding Prisma

**Frontend (`front-end/package.json`) :**
- `npm start` - Démarre en mode développement
- `npm run build` - Compile pour la production
- `npm test` - Lance les tests

## 📁 Structure du projet

```
Portfolio/
├── README.md
├── back-end/
│   ├── package.json
│   ├── server.js                 # Point d'entrée du serveur
│   ├── prismaClient.js           # Client Prisma partagé (Neon)
│   ├── prisma/
│   │   ├── schema.prisma         # Schéma de base de données
│   │   └── migrations/           # Migrations Prisma
│   ├── tests/                    # Scripts de test backend
│   └── routes/
│       ├── login.js              # Route authentification
│       └── projects.js           # Route gestion projets
└── front-end/
    ├── package.json
    ├── public/
    │   ├── index.html
    │   └── images/               # Images statiques
    ├── src/
    │   ├── App.jsx               # Composant principal
    │   ├── components/           # Composants réutilisables
    │   ├── pages/                # Pages de l'application
    │   ├── styles/               # Fichiers SCSS
    │   ├── data/                 # Données statiques
    │   └── router/               # Configuration routing
    └── tests/                    # Scripts de test frontend
```

## 🗄️ Base de données

### Migration de Supabase vers Neon Database

Le projet a été migré de **Supabase** vers **Neon Database** (PostgreSQL serverless).

#### Étapes de migration :

**1. Créer une nouvelle base Neon :**
- Allez sur [console.neon.tech](https://console.neon.tech/)
- Créez un nouveau projet
- Copiez la `DATABASE_URL` et `DIRECT_URL`

**2. Configuration des variables d'environnement :**
```env
# .env dans le dossier back-end
DATABASE_URL="postgresql://username:password@ep-xxx.us-east-1.aws.neon.tech/dbname?sslmode=require"
DIRECT_URL="postgresql://username:password@ep-xxx.us-east-1.aws.neon.tech/dbname?sslmode=require"
```

**3. Migration des données depuis Supabase :**
```bash
# 1. Réinitialiser Prisma
cd back-end
npx prisma migrate reset --force

# 2. Appliquer le schéma sur Neon
npx prisma db push

# 3. (Optionnel) Importer les données depuis le backup Supabase
# Utilisez pgAdmin ou psql pour importer le fichier .backup
```

### Schéma Prisma

Le projet utilise **Neon Database** (PostgreSQL serverless) avec les dépendances :
- `@neondatabase/serverless`
- `@prisma/adapter-neon`

### Structure des tables

**Table `Admin` :**
- `id` - Identifiant auto-incrémenté
- `username` - Nom d'utilisateur unique
- `password` - Mot de passe hashé
- `createdAt` - Date de création

**Table `Project` :**
- `id` - Identifiant CUID
- `title` - Titre du projet
- `description` - Description détaillée
- `year` - Année de réalisation
- `use` - Technologies utilisées
- `visit` - Lien de visite
- `view` - Lien de visualisation
- `cover` - Image de couverture
- `tools` - Outils utilisés (JSON)
- `category` - Catégorie du projet

### Migrations disponibles

- `20250212203856_init` - Migration initiale (Admin + Project)
- `20250219092529_category_add` - Ajout du champ catégorie

### Commandes Prisma utiles

```bash
npx prisma studio          # Interface graphique pour la DB
npx prisma db push         # Applique le schéma à la DB
npx prisma generate        # Génère le client Prisma
npx prisma migrate dev     # Crée une nouvelle migration
npx prisma migrate reset   # Remet à zéro la DB et les migrations
```

## 🚀 Déploiement

### Préparation pour la mise en ligne

**1. Configuration des variables d'environnement de production :**
```env
# Variables pour la production (Railway, Render, Vercel, etc.)
DATABASE_URL="postgresql://username:password@ep-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require"
DIRECT_URL="postgresql://username:password@ep-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require"
PORT=3001
NODE_ENV=production
```

**2. Build du frontend :**
```bash
cd front-end
npm run build
```

### Déploiement Backend

#### Option 1 : Railway (Recommandé)
1. Créez un compte sur [Railway](https://railway.app/)
2. Connectez votre repository GitHub
3. Ajoutez les variables d'environnement
4. Le déploiement se fait automatiquement

#### Option 2 : Render
1. Créez un compte sur [Render](https://render.com/)
2. Créez un nouveau Web Service
3. Connectez votre repository
4. Configuration :
   - Build Command: `cd back-end && npm install`
   - Start Command: `cd back-end && npm start`

#### Option 3 : Vercel (Pour Node.js)
```bash
# Installer Vercel CLI
npm i -g vercel

# Dans le dossier back-end
cd back-end
vercel --prod
```

**Configuration pour Vercel :**
1. Créez un compte sur [Vercel](https://vercel.com/)
2. Importez votre repository GitHub
3. Sélectionnez le dossier `back-end` comme projet
4. Configurez les variables d'environnement :
   - `DATABASE_URL` : Votre URL Neon Database
   - `DIRECT_URL` : Votre URL directe Neon Database
   - `NODE_ENV` : `production`
5. Dans les paramètres de build :
   - **Root Directory** : `back-end`
   - **Build Command** : `npm install && npx prisma generate`

Le projet contient déjà :
- `vercel.json` pour la configuration
- Adaptation du serveur pour l'environnement Vercel

📋 **Guide détaillé** : Consultez `back-end/VERCEL_DEPLOY.md` pour les instructions complètes.

### Déploiement Frontend

#### Option 1 : Netlify (Recommandé)
1. Glissez-déposez le dossier `front-end/build` sur [Netlify](https://netlify.com/)
2. Le fichier `_redirects` est déjà configuré pour le routing React

#### Option 2 : Vercel
```bash
# Dans le dossier front-end
cd front-end
vercel --prod
```

#### Option 3 : GitHub Pages
```bash
# Installer gh-pages
npm install --save-dev gh-pages

# Ajouter dans package.json (front-end)
"homepage": "https://mahkalix.github.io/Portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Déployer
npm run deploy
```

### Configuration post-déploiement

**1. Mettre à jour les URLs dans le frontend :**
```javascript
// Remplacer localhost par votre URL de production
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://votre-backend.railway.app' 
  : 'http://localhost:3001';
```

**2. Configurer CORS dans le backend :**
```javascript
// server.js - Ajouter votre domaine frontend
app.use(cors({
  origin: ['https://votre-frontend.netlify.app', 'http://localhost:3000']
}));
```

Le dossier `front-end/build/` est généré automatiquement par `npm run build` et n'est pas versionné.

## 🔧 Troubleshooting

### Problèmes courants

**1. Erreur "npm n'est pas reconnu"**
```bash
# Réinstaller Node.js depuis nodejs.org
# Ou via winget (Windows) :
winget install OpenJS.NodeJS
```

**2. Erreur politique d'exécution PowerShell**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```

**3. Erreur de dépendances**
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

**4. Problème de base de données Neon**
```bash
# Vérifier la connexion
npx prisma studio

# Régénérer le client Prisma
npx prisma generate

# Réappliquer le schéma
npx prisma db push

# En cas de problème majeur
npx prisma migrate reset --force
```

**5. Erreur CORS en production**
```javascript
// Dans server.js, ajoutez votre domaine frontend
app.use(cors({
  origin: [
    'https://votre-frontend.netlify.app',
    'https://votre-frontend.vercel.app',
    'http://localhost:3000'
  ]
}));
```

**6. Erreur "Cannot connect to database"**
```bash
# Vérifiez vos variables d'environnement
echo $DATABASE_URL  # Linux/Mac
echo $env:DATABASE_URL  # Windows PowerShell

# Testez la connexion directement
npx prisma validate
```

### Migration depuis Supabase

**1. Problèmes de migration des données :**
```sql
-- Utilisez le fichier neon-data-migration.sql
-- Ou créez manuellement via Prisma Studio
npx prisma studio
```

**3. Différences Supabase vs Neon :**
- Supabase : Auth intégrée → Neon : Auth personnalisée
- Supabase : Real-time → Neon : WebSockets manuels si nécessaire
- Supabase : Storage → Neon : Utiliser Cloudinary/AWS S3

### Vulnérabilités de sécurité

Le projet présente actuellement **9 vulnérabilités** (3 modérées, 6 élevées) liées à `react-scripts`. Pour les corriger :

```bash
cd front-end
npm audit fix --force  # ⚠️ Peut casser des fonctionnalités
```

### Rafraîchir l'environnement

Si les commandes `node` ou `npm` ne sont pas reconnues après installation :

```powershell
# Windows PowerShell
$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH","User")
```

### Réinitialisation complète

**Réinitialisation complète :**
```bash
# Nettoyer tout
cd back-end
rm -rf node_modules package-lock.json .env
cd ../front-end
rm -rf node_modules package-lock.json

# Réinstaller
cd ../back-end && npm install
cd ../front-end && npm install

# Reconfigurer la base
cd ../back-end
cp .env.example .env  # ou créez .env manuellement
npx prisma generate
npx prisma db push
```

## 📝 Historique des installations

### Dernière réinstallation (20/09/2025)
- ✅ Installation Node.js v24.8.0
- ✅ Configuration politique d'exécution PowerShell
- ✅ Suppression et réinstallation complète des dépendances
- ✅ Génération automatique du client Prisma
- ✅ Vérification du bon fonctionnement

---

## 👨‍💻 Développé par Mahkalix

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub !
