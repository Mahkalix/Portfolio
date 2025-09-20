#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 Configuration Neon Database pour Portfolio');
console.log('===============================================\n');

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

async function setupNeonDatabase() {
  try {
    console.log('📋 Collecte des informations de connexion Neon...\n');
    
    const databaseUrl = await question('Entrez votre DATABASE_URL Neon : ');
    const directUrl = databaseUrl; // Même URL pour Neon
    const port = await question('Port du serveur (défaut: 3001) : ') || '3001';
    const nodeEnv = await question('Environnement (development/production, défaut: development) : ') || 'development';
    
    // Créer le fichier .env
    const envContent = `# Configuration Neon Database
DATABASE_URL="${databaseUrl}"
DIRECT_URL="${directUrl}"

# Configuration serveur
PORT=${port}
NODE_ENV=${nodeEnv}

# Ajoutez d'autres variables si nécessaire
# JWT_SECRET="votre_secret_jwt"
`;

    const envPath = path.join(__dirname, '.env');
    fs.writeFileSync(envPath, envContent);
    
    console.log('\n✅ Fichier .env créé avec succès !');
    console.log(`📁 Emplacement : ${envPath}\n`);
    
    console.log('🔄 Prochaines étapes :');
    console.log('1. npx prisma generate');
    console.log('2. npx prisma db push');
    console.log('3. npm start\n');
    
    const runPrisma = await question('Voulez-vous exécuter les commandes Prisma maintenant ? (y/N) : ');
    
    if (runPrisma.toLowerCase() === 'y' || runPrisma.toLowerCase() === 'yes') {
      const { exec } = require('child_process');
      
      console.log('\n🔄 Génération du client Prisma...');
      exec('npx prisma generate', (error, stdout, stderr) => {
        if (error) {
          console.error('❌ Erreur lors de la génération:', error);
          return;
        }
        console.log('✅ Client Prisma généré');
        
        console.log('\n🔄 Application du schéma à la base de données...');
        exec('npx prisma db push', (error, stdout, stderr) => {
          if (error) {
            console.error('❌ Erreur lors du push:', error);
            return;
          }
          console.log('✅ Schéma appliqué à la base de données');
          console.log('\n🎉 Configuration terminée ! Vous pouvez maintenant démarrer le serveur avec "npm start"');
          rl.close();
        });
      });
    } else {
      console.log('\n📝 N\'oubliez pas d\'exécuter :');
      console.log('   npx prisma generate');
      console.log('   npx prisma db push');
      rl.close();
    }
    
  } catch (error) {
    console.error('❌ Erreur lors de la configuration:', error);
    rl.close();
  }
}

// Vérifier si .env existe déjà
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  question('⚠️  Un fichier .env existe déjà. Le remplacer ? (y/N) : ').then((answer) => {
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      setupNeonDatabase();
    } else {
      console.log('🚫 Configuration annulée');
      rl.close();
    }
  });
} else {
  setupNeonDatabase();
}
