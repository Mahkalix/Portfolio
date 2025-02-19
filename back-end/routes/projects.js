const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Récupérer un projet par son ID
const getProjectById = async (req, res) => {
  const { id } = req.params;
  console.log("ID de la requête:", id); // Loguer pour vérifier la valeur de l'ID

  try {
    const project = await prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      return res.status(404).json({ error: "Projet non trouvé" });
    }

    res.json(project);
  } catch (error) {
    console.error("Erreur Prisma:", error);
    res.status(500).json({ error: "Erreur serveur lors de la récupération du projet" });
  }
};




// Récupérer tous les projets
const getProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Ajouter un projet
const addProject = async (req, res) => {
  const { title, description, year, use, visit, view, cover, tools, category} = req.body;
  
  try {
    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        year,
        use,
        visit,
        view,
        cover,
        tools, 
        category
      }
    });
    res.json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error adding project' });
  }
};

// Mettre à jour un projet
const updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description, year, use, visit, view, cover, tools, category } = req.body;
  
  try {
    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        title,
        description,
        year,
        use,
        visit,
        view,
        cover,
        tools, 
        category
      }
    });
    res.json(updatedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating project' });
  }
};

// Supprimer un projet
const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProject = await prisma.project.delete({
      where: { id }
    });
    res.json(deletedProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting project' });
  }
};

module.exports = { getProjects, addProject, updateProject, deleteProject, getProjectById };
