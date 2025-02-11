const express = require('express');
const cors = require('cors');
const { getProjects, addProject, updateProject, deleteProject } = require('./routes/projects'); // Importation des routes des projets
const login = require('./routes/login');  // Importation de la fonction login

const app = express();
const port = 4000;

// Middleware pour gérer le corps des requêtes
app.use(express.json());
app.use(cors());  // Enable cross-origin resource sharing

// Route de login
app.post('/login', login);

// Routes pour gérer les projets
app.get('/api/projects', getProjects);
app.post('/api/projects', addProject);
app.put('/api/projects/:id', updateProject);
app.delete('/api/projects/:id', deleteProject);

// Lancement du serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
