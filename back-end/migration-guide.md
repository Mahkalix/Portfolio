# 🔄 Guide de Migration Supabase vers Neon Database

## 📋 Étapes détaillées

### 1. Préparation Neon Database

1. **Créer un compte Neon :**
   - Allez sur [https://console.neon.tech/](https://console.neon.tech/)
   - Créez un compte gratuit
   - Créez un nouveau projet "Portfolio"

2. **Récupérer les URLs de connexion :**
   ```env
   # Dans votre tableau de bord Neon, section "Connection Details"
   DATABASE_URL="postgresql://username:password@ep-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require"
   DIRECT_URL="postgresql://username:password@ep-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require"
   ```

### 2. Configuration du projet

1. **Créer le fichier .env :**
   ```bash
   cd back-end
   echo 'DATABASE_URL="VOTRE_URL_NEON"' > .env
   echo 'DIRECT_URL="VOTRE_URL_NEON"' >> .env
   echo 'PORT=3001' >> .env
   echo 'NODE_ENV=development' >> .env
   ```

2. **Tester la connexion :**
   ```bash
   npx prisma db push
   ```

### 3. Migration des données depuis Supabase

#### Option A : Migration automatique (Recommandée)
```bash
# 1. Appliquer le schéma sur Neon
npx prisma db push

# 2. Utiliser Prisma Studio pour insérer manuellement les données critiques
npx prisma studio
```

#### Option B : Import depuis le backup Supabase
```bash
# 1. Installer PostgreSQL client (si pas déjà fait)
winget install PostgreSQL.PostgreSQL

# 2. Extraire les données du backup (seulement les tables du projet)
# Utilisez pgAdmin ou un autre outil pour :
# - Ouvrir le fichier db_cluster-04-04-2025@05-20-26.backup
# - Exporter seulement les tables "Admin" et "Project"
# - Importer dans Neon
```

### 4. Vérification post-migration

```bash
# 1. Générer le client Prisma
npx prisma generate

# 2. Tester les routes
npm start

# 3. Vérifier dans le navigateur
# http://localhost:3001/api/test
```

### 5. Déploiement

#### Variables d'environnement pour la production :
```env
DATABASE_URL="postgresql://username:password@ep-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require"
DIRECT_URL="postgresql://username:password@ep-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require"
PORT=3001
NODE_ENV=production
```

#### Plateformes recommandées :
- **Backend** : Railway, Render, ou Vercel
- **Frontend** : Netlify, Vercel, ou GitHub Pages

### 6. Scripts utiles

#### Réinitialiser complètement la base :
```bash
npx prisma migrate reset --force
npx prisma db push
```

#### Créer un admin de test :
```javascript
// Utiliser Prisma Studio ou créer un script :
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function createAdmin() {
  const hashedPassword = await bcrypt.hash('votre_mot_de_passe', 10);
  
  await prisma.admin.create({
    data: {
      username: 'admin',
      password: hashedPassword
    }
  });
}
```

## 🚨 Points d'attention

1. **Sauvegarde** : Assurez-vous d'avoir une sauvegarde de vos données Supabase
2. **Variables d'environnement** : Ne jamais commiter le fichier .env
3. **Sécurité** : Changez tous les mots de passe après migration
4. **Testing** : Testez toutes les fonctionnalités après migration

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifiez les logs avec `npm start`
2. Testez la connexion DB avec `npx prisma studio`
3. Consultez la documentation Neon : [https://neon.tech/docs](https://neon.tech/docs)
