const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function seedDatabase() {
  try {
    console.log('🌱 Début du seeding de la base de données...');
    console.log('🔗 Test de connexion à la base de données...');
    
    // Test de connexion
    await prisma.$connect();
    console.log('✅ Connexion à la base de données réussie !');

    // Vérifier les tables existantes
    const adminCount = await prisma.admin.count();
    const projectCount = await prisma.project.count();
    console.log(`📊 État actuel : ${adminCount} admin(s), ${projectCount} projet(s)`);

    // 1. Créer l'admin depuis le backup Supabase
    const existingAdmin = await prisma.admin.findUnique({
      where: { username: 'admin' }
    });

    if (!existingAdmin) {
      const newAdmin = await prisma.admin.create({
        data: {
          username: 'admin',
          password: '$2b$10$Ku9FedTif0YwIVlBt5Y0I.zGHdWfgJynfTdj2.pkT2r19dXnm1biG', // Password depuis le backup
          createdAt: new Date('2025-02-19T09:25:57.593Z')
        }
      });
      console.log('✅ Admin créé avec succès, ID:', newAdmin.id);
    } else {
      console.log('⚠️  Admin existe déjà, ID:', existingAdmin.id);
    }

    // 2. Créer des projets d'exemple (adaptés à votre portfolio)
    const projects = [
      {
        id: 'ckrandom1portfolio',
        title: 'Portfolio Personnel',
        description: 'Un portfolio moderne et responsive développé avec React.js, Node.js et PostgreSQL. Intègre une interface d\'administration pour la gestion dynamique des projets, un système d\'authentification sécurisé et une API RESTful. Design responsive avec animations CSS et support multi-thèmes.',
        year: 2025,
        use: 'Développement web full-stack avec React et Node.js',
        visit: 'https://mahkalix-portfolio.netlify.app',
        view: 'https://github.com/Mahkalix/Portfolio',
        cover: '/images/portfolio-cover.jpg',
        tools: JSON.stringify(['React.js', 'Node.js', 'PostgreSQL', 'Prisma', 'SCSS', 'Express']),
        category: 'Web Development'
      },
      {
        id: 'ckrandom2ecommerce',
        title: 'Plateforme E-commerce',
        description: 'Application e-commerce complète avec gestion des produits, panier d\'achat, système de paiement Stripe, gestion des utilisateurs et interface d\'administration. Architecture microservices avec API RESTful et base de données relationnelle.',
        year: 2024,
        use: 'Développement d\'une solution e-commerce complète',
        visit: 'https://demo-ecommerce-mahkalix.vercel.app',
        view: 'https://github.com/Mahkalix/ecommerce-app',
        cover: '/images/ecommerce-cover.jpg',
        tools: JSON.stringify(['React.js', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'JWT']),
        category: 'E-commerce'
      },
      {
        id: 'ckrandom3taskmanager',
        title: 'Gestionnaire de Tâches',
        description: 'Application de gestion de tâches collaborative avec fonctionnalités de drag & drop, notifications en temps réel, système de commentaires, gestion des équipes et tableaux de bord analytiques. Interface intuitive inspirée de Trello.',
        year: 2024,
        use: 'Application de productivité et collaboration d\'équipe',
        visit: 'https://taskmanager-demo.netlify.app',
        view: 'https://github.com/Mahkalix/task-manager',
        cover: '/images/taskmanager-cover.jpg',
        tools: JSON.stringify(['React.js', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redux', 'Tailwind CSS']),
        category: 'Productivity'
      },
      {
        id: 'ckrandom4weatherapp',
        title: 'Application Météo',
        description: 'Application météo moderne avec prévisions détaillées, géolocalisation, cartes interactives, alertes météo et interface responsive. Intégration d\'APIs externes pour données météorologiques en temps réel.',
        year: 2024,
        use: 'Application web pour consultation météorologique',
        visit: 'https://weather-mahkalix.netlify.app',
        view: 'https://github.com/Mahkalix/weather-app',
        cover: '/images/weather-cover.jpg',
        tools: JSON.stringify(['React.js', 'OpenWeather API', 'Leaflet', 'CSS3', 'Geolocation API']),
        category: 'Web App'
      },
      {
        id: 'ckrandom5chatapp',
        title: 'Application de Chat',
        description: 'Application de messagerie instantanée avec chat en temps réel, salles de discussion, partage de fichiers, émojis, statuts en ligne et notifications push. Architecture basée sur WebSockets pour une communication fluide.',
        year: 2023,
        use: 'Communication en temps réel et messagerie instantanée',
        visit: 'https://chat-realtime-mahkalix.herokuapp.com',
        view: 'https://github.com/Mahkalix/realtime-chat',
        cover: '/images/chat-cover.jpg',
        tools: JSON.stringify(['React.js', 'Socket.io', 'Node.js', 'MongoDB', 'Express', 'WebRTC']),
        category: 'Communication'
      },
      {
        id: 'ckrandom6blog',
        title: 'Blog Personnel',
        description: 'Blog moderne avec système de CMS, éditeur de contenu riche, système de commentaires, catégories, tags, SEO optimisé et interface d\'administration complète. Support du markdown et optimisation des performances.',
        year: 2023,
        use: 'Plateforme de publication et partage de contenu',
        visit: 'https://blog-mahkalix.vercel.app',
        view: 'https://github.com/Mahkalix/personal-blog',
        cover: '/images/blog-cover.jpg',
        tools: JSON.stringify(['Next.js', 'Markdown', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Vercel']),
        category: 'Content Management'
      }
    ];

    // Vérifier et créer les projets
    for (const project of projects) {
      const existingProject = await prisma.project.findUnique({
        where: { id: project.id }
      });

      if (!existingProject) {
        await prisma.project.create({ data: project });
        console.log(`✅ Projet "${project.title}" créé`);
      } else {
        console.log(`⚠️  Projet "${project.title}" existe déjà`);
      }
    }

    console.log('\n🎉 Seeding terminé avec succès !');
    console.log(`📊 Base de données peuplée avec :`);
    console.log(`   - 1 Admin`);
    console.log(`   - ${projects.length} Projets`);
    console.log('\n🌐 Vous pouvez maintenant :');
    console.log('   - Visiter http://localhost:3000 pour voir le portfolio');
    console.log('   - Visiter http://localhost:5555 pour Prisma Studio');
    console.log('   - Vous connecter en admin avec : admin / [votre mot de passe]');

  } catch (error) {
    console.error('❌ Erreur lors du seeding :', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Exécuter le seeding
seedDatabase();
