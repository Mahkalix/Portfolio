const express = require('express');
const cors = require('cors');
const { getProjects, addProject, updateProject, deleteProject } = require('./routes/projects'); // Importation des routes des projets
const login = require('./routes/login');  // Importation de la fonction login
const { PrismaClient } = require('@prisma/client'); // Prisma client

// Initialize Prisma client
const prisma = new PrismaClient();

const app = express();
const port = 4000;

// Middleware pour gérer le corps des requêtes
app.use(express.json());
app.use(cors());  // Enable cross-origin resource sharing

app.get("/", (req, res) => {
  res.send("✅ Le serveur fonctionne !");
});


// Route de login
app.post('/login', (req, res) => login(req, res, prisma));  // Pass the prisma client to login route

// Routes pour gérer les projets
app.get('/api/projects', (req, res) => getProjects(req, res, prisma)); 
app.get('/api/projects/:id', (req, res) => getProject(req, res, prisma));
app.post('/api/projects', (req, res) => addProject(req, res, prisma));
app.put('/api/projects/:id', (req, res) => updateProject(req, res, prisma));
app.delete('/api/projects/:id', (req, res) => deleteProject(req, res, prisma));



// Lancement du serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
