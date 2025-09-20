-- Script SQL pour extraire et recréer les données essentielles du backup Supabase
-- Exécutez ce script dans votre nouvelle base Neon après avoir appliqué le schéma Prisma

-- ===================================
-- INSTRUCTIONS D'UTILISATION
-- ===================================
-- 1. Connectez-vous à votre base Neon via pgAdmin ou psql
-- 2. Assurez-vous que le schéma Prisma a été appliqué (npx prisma db push)
-- 3. Exécutez les sections ci-dessous selon vos besoins

-- ===================================
-- SECTION 1: Création manuelle d'un admin
-- ===================================
-- Remplacez 'votre_username' et 'votre_mot_de_passe_hashe' par vos valeurs
-- Pour hasher un mot de passe, utilisez bcrypt avec 10 rounds

-- INSERT INTO "Admin" (username, password, "createdAt") VALUES 
-- ('admin', '$2b$10$VOTRE_MOT_DE_PASSE_HASHE', NOW());

-- ===================================
-- SECTION 2: Insertion de projets d'exemple
-- ===================================
-- Adaptez ces données selon vos vrais projets

INSERT INTO "Project" (
    id, title, description, year, use, visit, view, cover, tools, category
) VALUES 
(
    'proj_' || generate_random_uuid()::text,
    'Portfolio Personnel',
    'Un portfolio moderne développé avec React et Node.js',
    2025,
    'Développement web full-stack',
    'https://monportfolio.com',
    'https://github.com/mahkalix/portfolio',
    '/images/portfolio-cover.jpg',
    '["React", "Node.js", "PostgreSQL", "Prisma"]'::json,
    'Web Development'
),
(
    'proj_' || generate_random_uuid()::text,
    'Application E-commerce',
    'Plateforme de vente en ligne avec panier et paiement',
    2024,
    'Développement web',
    'https://mon-ecommerce.com',
    'https://github.com/mahkalix/ecommerce',
    '/images/ecommerce-cover.jpg',
    '["React", "Express", "Stripe", "MongoDB"]'::json,
    'E-commerce'
);

-- ===================================
-- SECTION 3: Fonctions utiles
-- ===================================
-- Fonction pour générer un CUID simple (si generate_random_uuid ne fonctionne pas)
-- Remplacez generate_random_uuid() par cette valeur dans les INSERT ci-dessus

-- Génération manuelle d'ID :
-- 'c' || substr(md5(random()::text), 1, 24)

-- ===================================
-- SECTION 4: Vérification des données
-- ===================================
-- Commandes pour vérifier que tout s'est bien passé

-- SELECT * FROM "Admin";
-- SELECT * FROM "Project";
-- SELECT COUNT(*) as total_projects FROM "Project";

-- ===================================
-- SECTION 5: Cleanup (si nécessaire)
-- ===================================
-- En cas d'erreur, utilisez ces commandes pour nettoyer

-- DELETE FROM "Project" WHERE title LIKE '%exemple%';
-- DELETE FROM "Admin" WHERE username = 'test';

-- ===================================
-- NOTES IMPORTANTES
-- ===================================
-- 1. Les ID de Project utilisent le format CUID (c + 24 caractères)
-- 2. Les mots de passe Admin doivent être hashés avec bcrypt
-- 3. Le champ 'tools' est de type JSON, utilisez la syntaxe PostgreSQL appropriée
-- 4. Adaptez les URLs et chemins d'images selon votre configuration
