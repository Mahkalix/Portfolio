const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
require('dotenv').config(); // Charger les variables d'environnement

const prisma = new PrismaClient();

async function createAdminNeon() {
  console.log('🚀 Création de l\'admin dans la base de données Neon...');
  console.log('🔗 Connexion à:', process.env.DATABASE_URL.replace(/\/\/.*@/, '//***@')); // Masquer les credentials
  console.log('');

  try {
    // Vérifier si un admin existe déjà
    const existingAdmin = await prisma.admin.findFirst();
    
    if (existingAdmin) {
      console.log('⚠️  Un admin existe déjà dans la base Neon :');
      console.log('   ID:', existingAdmin.id);
      console.log('   Username:', existingAdmin.username);
      console.log('   Créé le:', existingAdmin.createdAt);
      console.log('');
      console.log('🔑 Identifiants existants :');
      console.log('   Username: admin');
      console.log('   Password: mmiteachers');
      return;
    }

    // Créer un nouvel admin
    const hashedPassword = await bcrypt.hash("mmiteachers", 10);
    
    const admin = await prisma.admin.create({
      data: {
        username: "admin",
        password: hashedPassword,
      },
    });

    console.log('✅ Admin créé avec succès dans Neon !');
    console.log('📋 Détails :');
    console.log('   ID:', admin.id);
    console.log('   Username:', admin.username);
    console.log('   Hash du mot de passe:', admin.password);
    console.log('   Créé le:', admin.createdAt);
    console.log('');
    console.log('🔑 Identifiants de connexion :');
    console.log('   Username: admin');
    console.log('   Password: mmiteachers');

  } catch (error) {
    console.error('❌ Erreur lors de la création de l\'admin:', error);
    
    if (error.code === 'P2002') {
      console.log('💡 Erreur : Un admin avec ce nom d\'utilisateur existe déjà');
    } else if (error.code === 'P1001') {
      console.log('💡 Erreur : Impossible de se connecter à la base de données');
      console.log('   Vérifiez votre connexion internet et les credentials Neon');
    } else {
      console.log('💡 Erreur inconnue, vérifiez votre configuration');
    }
  } finally {
    await prisma.$disconnect();
    console.log('');
    console.log('🔌 Connexion à la base fermée');
  }
}

// Test de connexion d'abord
async function testNeonConnection() {
  console.log('🔍 Test de connexion à Neon...');
  try {
    await prisma.$connect();
    console.log('✅ Connexion à Neon réussie !');
    return true;
  } catch (error) {
    console.error('❌ Impossible de se connecter à Neon:', error.message);
    return false;
  }
}

async function main() {
  console.log('=== CRÉATION ADMIN DANS NEON DATABASE ===');
  console.log('');
  
  const isConnected = await testNeonConnection();
  console.log('');
  
  if (isConnected) {
    await createAdminNeon();
  } else {
    console.log('❌ Impossible de continuer sans connexion à Neon');
  }
}

main();
