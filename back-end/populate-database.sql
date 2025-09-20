-- Script SQL pour peupler la base de données Portfolio
-- Exécutez ce script dans Prisma Studio ou votre interface de base de données

-- ===================================
-- Création de l'admin (depuis backup Supabase)
-- ===================================
INSERT INTO "Admin" (username, password, "createdAt") 
VALUES ('admin', '$2b$10$Ku9FedTif0YwIVlBt5Y0I.zGHdWfgJynfTdj2.pkT2r19dXnm1biG', '2025-02-19 09:25:57.593')
ON CONFLICT (username) DO NOTHING;

-- ===================================
-- Insertion des projets portfolio
-- ===================================

-- Projet 1: Portfolio Personnel
INSERT INTO "Project" (id, title, description, year, use, visit, view, cover, tools, category) 
VALUES (
    'ckrandom1portfolio',
    'Portfolio Personnel',
    'Un portfolio moderne et responsive développé avec React.js, Node.js et PostgreSQL. Intègre une interface d''administration pour la gestion dynamique des projets, un système d''authentification sécurisé et une API RESTful. Design responsive avec animations CSS et support multi-thèmes.',
    2025,
    'Développement web full-stack avec React et Node.js',
    'https://mahkalix-portfolio.netlify.app',
    'https://github.com/Mahkalix/Portfolio',
    '/images/portfolio-cover.jpg',
    '["React.js", "Node.js", "PostgreSQL", "Prisma", "SCSS", "Express"]',
    'Web Development'
);

-- Projet 2: Plateforme E-commerce
INSERT INTO "Project" (id, title, description, year, use, visit, view, cover, tools, category) 
VALUES (
    'ckrandom2ecommerce',
    'Plateforme E-commerce',
    'Application e-commerce complète avec gestion des produits, panier d''achat, système de paiement Stripe, gestion des utilisateurs et interface d''administration. Architecture microservices avec API RESTful et base de données relationnelle.',
    2024,
    'Développement d''une solution e-commerce complète',
    'https://demo-ecommerce-mahkalix.vercel.app',
    'https://github.com/Mahkalix/ecommerce-app',
    '/images/ecommerce-cover.jpg',
    '["React.js", "Node.js", "MongoDB", "Stripe", "Express", "JWT"]',
    'E-commerce'
);

-- Projet 3: Gestionnaire de Tâches
INSERT INTO "Project" (id, title, description, year, use, visit, view, cover, tools, category) 
VALUES (
    'ckrandom3taskmanager',
    'Gestionnaire de Tâches',
    'Application de gestion de tâches collaborative avec fonctionnalités de drag & drop, notifications en temps réel, système de commentaires, gestion des équipes et tableaux de bord analytiques. Interface intuitive inspirée de Trello.',
    2024,
    'Application de productivité et collaboration d''équipe',
    'https://taskmanager-demo.netlify.app',
    'https://github.com/Mahkalix/task-manager',
    '/images/taskmanager-cover.jpg',
    '["React.js", "Node.js", "Socket.io", "PostgreSQL", "Redux", "Tailwind CSS"]',
    'Productivity'
);

-- Projet 4: Application Météo
INSERT INTO "Project" (id, title, description, year, use, visit, view, cover, tools, category) 
VALUES (
    'ckrandom4weatherapp',
    'Application Météo',
    'Application météo moderne avec prévisions détaillées, géolocalisation, cartes interactives, alertes météo et interface responsive. Intégration d''APIs externes pour données météorologiques en temps réel.',
    2024,
    'Application web pour consultation météorologique',
    'https://weather-mahkalix.netlify.app',
    'https://github.com/Mahkalix/weather-app',
    '/images/weather-cover.jpg',
    '["React.js", "OpenWeather API", "Leaflet", "CSS3", "Geolocation API"]',
    'Web App'
);

-- Projet 5: Application de Chat
INSERT INTO "Project" (id, title, description, year, use, visit, view, cover, tools, category) 
VALUES (
    'ckrandom5chatapp',
    'Application de Chat',
    'Application de messagerie instantanée avec chat en temps réel, salles de discussion, partage de fichiers, émojis, statuts en ligne et notifications push. Architecture basée sur WebSockets pour une communication fluide.',
    2023,
    'Communication en temps réel et messagerie instantanée',
    'https://chat-realtime-mahkalix.herokuapp.com',
    'https://github.com/Mahkalix/realtime-chat',
    '/images/chat-cover.jpg',
    '["React.js", "Socket.io", "Node.js", "MongoDB", "Express", "WebRTC"]',
    'Communication'
);

-- Projet 6: Blog Personnel
INSERT INTO "Project" (id, title, description, year, use, visit, view, cover, tools, category) 
VALUES (
    'ckrandom6blog',
    'Blog Personnel',
    'Blog moderne avec système de CMS, éditeur de contenu riche, système de commentaires, catégories, tags, SEO optimisé et interface d''administration complète. Support du markdown et optimisation des performances.',
    2023,
    'Plateforme de publication et partage de contenu',
    'https://blog-mahkalix.vercel.app',
    'https://github.com/Mahkalix/personal-blog',
    '/images/blog-cover.jpg',
    '["Next.js", "Markdown", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel"]',
    'Content Management'
);

-- ===================================
-- Vérification des données insérées
-- ===================================
SELECT 'Admins:' as table_name, COUNT(*) as count FROM "Admin"
UNION ALL
SELECT 'Projects:' as table_name, COUNT(*) as count FROM "Project";

-- Afficher tous les projets
SELECT id, title, category, year FROM "Project" ORDER BY year DESC, title;

-- ===================================
-- INSTRUCTIONS
-- ===================================
-- 1. Ouvrez Prisma Studio: http://localhost:5555
-- 2. Allez dans l'onglet "Admin" et ajoutez l'admin si pas déjà fait
-- 3. Allez dans l'onglet "Project" et ajoutez les projets un par un
-- 
-- Ou utilisez directement ce script dans un client PostgreSQL
-- avec la DATABASE_URL de votre fichier .env
