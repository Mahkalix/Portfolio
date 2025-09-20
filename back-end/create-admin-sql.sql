-- Script SQL pour créer un admin dans Neon
-- À exécuter directement dans la console SQL de Neon

-- Vérifier s'il y a déjà des admins
SELECT * FROM "Admin";

-- Si aucun admin n'existe, créer un admin avec le bon hash bcryptjs
-- Hash pour "mmiteachers" généré avec bcryptjs
INSERT INTO "Admin" (username, password, "createdAt") 
VALUES (
  'admin', 
  '$2a$10$MQXM3lLhCVTxs92RPZOUxufMYcPKvm6rSKX8LWvUre8jdLIYaqsqS',
  NOW()
)
ON CONFLICT (username) 
DO UPDATE SET 
  password = '$2a$10$MQXM3lLhCVTxs92RPZOUxufMYcPKvm6rSKX8LWvUre8jdLIYaqsqS',
  "createdAt" = NOW();

-- Vérifier que l'admin a été créé
SELECT id, username, "createdAt" FROM "Admin";
