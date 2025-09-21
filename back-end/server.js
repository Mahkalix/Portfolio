const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Charger les variables d'environnement
const { getProjects, addProject, updateProject, deleteProject, getProjectById } = require('./routes/projects'); // Importation des routes des projets
const login = require('./routes/login');  // Importation de la fonction login
const createAdminAPI = require('./routes/createAdminAPI');  // Importation de la fonction createAdmin
const { PrismaClient } = require('@prisma/client'); // Prisma client

// Initialize Prisma client
const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3001; // Utilise PORT depuis .env ou 3001 par défaut

// Middleware pour gérer le corps des requêtes
app.use(express.json({ limit: '10mb' })); 

// Configuration CORS pour autoriser votre frontend
const corsOptions = {
  origin: [
    'http://localhost:3000',        // Pour le développement local
    'https://your-frontend-url.netlify.app',  // Remplacez par votre URL frontend
    'https://your-frontend-url.vercel.app',   // Ou autres services
    'https://mahkalix.github.io',             // Si vous utilisez GitHub Pages
    '*'  // Temporaire pour tester - À ENLEVER en production
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));  // Enable cross-origin resource sharing

app.get("/", (req, res) => {
  res.send("✅ Le serveur fonctionne !");
});

// Route de test API
app.get("/api/test", (req, res) => {
  res.json({ 
    message: "✅ API Backend fonctionne correctement !",
    timestamp: new Date().toISOString(),
    port: port
  });
});


// Route de login
app.post('/login', (req, res) => login(req, res, prisma));  // Pass the prisma client to login route

// Route pour créer un admin (temporaire)
app.post('/api/create-admin', (req, res) => createAdminAPI(req, res, prisma));

// Routes pour gérer les projets
app.get('/api/projects', (req, res) => getProjects(req, res, prisma)); 
app.get('/api/projects/:id', (req, res) => getProjectById(req, res, prisma));
app.post('/api/projects', (req, res) => addProject(req, res, prisma));
app.put('/api/projects/:id', (req, res) => updateProject(req, res, prisma));
app.delete('/api/projects/:id', (req, res) => deleteProject(req, res, prisma));



// Lancement du serveur (uniquement en développement local)
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

// Export de l'app pour Vercel
module.exports = app;
