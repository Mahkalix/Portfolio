const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function addMoreProjects() {
  try {
    console.log('📝 Ajout de projets supplémentaires...');
    
    const projects = [
      {
        id: 'ecommerce-platform-2024',
        title: 'Plateforme E-commerce',
        description: 'Application e-commerce complète avec gestion des produits, panier d\'achat, système de paiement Stripe, gestion des utilisateurs et interface d\'administration. Architecture microservices avec API RESTful.',
        year: 2024,
        use: 'Développement d\'une solution e-commerce complète',
        visit: 'https://demo-ecommerce.netlify.app',
        view: 'https://github.com/Mahkalix/ecommerce-app',
        cover: '/images/ecommerce-cover.jpg',
        tools: JSON.stringify(['React.js', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'JWT']),
        category: 'E-commerce'
      },
      {
        id: 'task-manager-2024',
        title: 'Gestionnaire de Tâches',
        description: 'Application de gestion de tâches collaborative avec fonctionnalités de drag & drop, notifications en temps réel, système de commentaires et tableaux de bord analytiques. Interface intuitive inspirée de Trello.',
        year: 2024,
        use: 'Application de productivité et collaboration d\'équipe',
        visit: 'https://taskmanager-demo.netlify.app',
        view: 'https://github.com/Mahkalix/task-manager',
        cover: '/images/taskmanager-cover.jpg',
        tools: JSON.stringify(['React.js', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redux']),
        category: 'Productivity'
      },
      {
        id: 'weather-app-2024',
        title: 'Application Météo',
        description: 'Application météo moderne avec prévisions détaillées, géolocalisation, cartes interactives et alertes météo. Interface responsive avec animations CSS et intégration d\'APIs externes.',
        year: 2024,
        use: 'Application web pour consultation météorologique',
        visit: 'https://weather-app-demo.netlify.app',
        view: 'https://github.com/Mahkalix/weather-app',
        cover: '/images/weather-cover.jpg',
        tools: JSON.stringify(['React.js', 'OpenWeather API', 'Leaflet', 'CSS3', 'Geolocation']),
        category: 'Web App'
      },
      {
        id: 'chat-realtime-2023',
        title: 'Application de Chat',
        description: 'Application de messagerie instantanée avec chat en temps réel, salles de discussion, partage de fichiers, émojis et notifications push. Architecture basée sur WebSockets.',
        year: 2023,
        use: 'Communication en temps réel et messagerie instantanée',
        visit: 'https://chat-realtime.herokuapp.com',
        view: 'https://github.com/Mahkalix/realtime-chat',
        cover: '/images/chat-cover.jpg',
        tools: JSON.stringify(['React.js', 'Socket.io', 'Node.js', 'MongoDB', 'Express']),
        category: 'Communication'
      },
      {
        id: 'blog-cms-2023',
        title: 'Blog avec CMS',
        description: 'Blog personnel avec système de CMS, éditeur de contenu riche, système de commentaires, catégories, tags et interface d\'administration. SEO optimisé et support du markdown.',
        year: 2023,
        use: 'Plateforme de publication et partage de contenu',
        visit: 'https://blog-mahkalix.vercel.app',
        view: 'https://github.com/Mahkalix/personal-blog',
        cover: '/images/blog-cover.jpg',
        tools: JSON.stringify(['Next.js', 'Markdown', 'Prisma', 'PostgreSQL', 'Tailwind CSS']),
        category: 'Content Management'
      }
    ];

    for (const projectData of projects) {
      try {
        const project = await prisma.project.create({
          data: projectData
        });
        console.log(`✅ Projet ajouté : ${project.title}`);
      } catch (error) {
        if (error.code === 'P2002') {
          console.log(`⚠️ Projet "${projectData.title}" existe déjà`);
        } else {
          console.error(`❌ Erreur pour "${projectData.title}":`, error.message);
        }
      }
    }

    // Vérifier le nombre total de projets
    const totalProjects = await prisma.project.count();
    console.log(`\n📊 Total de projets dans la base : ${totalProjects}`);
    
    console.log('\n🎉 Votre portfolio est maintenant rempli !');
    console.log('🌐 Visitez http://localhost:3000 pour voir le résultat');

  } catch (error) {
    console.error('❌ Erreur :', error);
  } finally {
    await prisma.$disconnect();
  }
}

addMoreProjects();
