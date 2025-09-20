const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function testAndSetupDatabase() {
  try {
    console.log('🔧 Test de connexion à Neon Database...');
    
    // Test de connexion
    await prisma.$connect();
    console.log('✅ Connexion réussie !');
    
    // Créer les tables si elles n'existent pas
    console.log('📋 Vérification des tables...');
    
    // Test d'une requête simple
    const result = await prisma.$queryRaw`SELECT current_database(), current_user;`;
    console.log('📊 Base de données :', result);
    
    // Compter les enregistrements existants
    try {
      const adminCount = await prisma.admin.count();
      const projectCount = await prisma.project.count();
      console.log(`📈 Tables trouvées - Admins: ${adminCount}, Projets: ${projectCount}`);
      
      if (adminCount === 0 && projectCount === 0) {
        console.log('🌱 Base de données vide, prêt pour le seeding !');
        await seedData();
      } else {
        console.log('📦 Données existantes trouvées');
      }
    } catch (error) {
      console.log('⚠️ Erreur tables :', error.message);
      console.log('💡 Il faut probablement faire "npx prisma db push" d\'abord');
    }
    
  } catch (error) {
    console.error('❌ Erreur de connexion :', error.message);
    console.log('💡 Vérifiez votre DATABASE_URL dans le fichier .env');
  } finally {
    await prisma.$disconnect();
  }
}

async function seedData() {
  console.log('🌱 Insertion des données...');
  
  // Créer l'admin
  const admin = await prisma.admin.create({
    data: {
      username: 'admin',
      password: '$2b$10$Ku9FedTif0YwIVlBt5Y0I.zGHdWfgJynfTdj2.pkT2r19dXnm1biG',
      createdAt: new Date()
    }
  });
  console.log('✅ Admin créé :', admin.username);
  
  // Créer un projet de test
  const project = await prisma.project.create({
    data: {
      id: 'test-portfolio-2025',
      title: 'Portfolio Personnel',
      description: 'Un portfolio moderne développé avec React.js, Node.js et PostgreSQL.',
      year: 2025,
      use: 'Développement web full-stack',
      visit: 'https://mahkalix-portfolio.netlify.app',
      view: 'https://github.com/Mahkalix/Portfolio',
      cover: '/images/portfolio-cover.jpg',
      tools: JSON.stringify(['React.js', 'Node.js', 'PostgreSQL', 'Prisma']),
      category: 'Web Development'
    }
  });
  console.log('✅ Projet créé :', project.title);
  
  console.log('🎉 Seeding terminé !');
}

testAndSetupDatabase();
