const { PrismaClient } = require('@prisma/client');
const dataProjects = require('../../front-end/src/data/projects.json');

const prisma = new PrismaClient();

async function main() {
  for (const project of dataProjects) {
    console.log('Traitement du projet:', project.title);

    // Convertir 'year' en entier (si ce n'est pas déjà un entier)
    const year = parseInt(project.year, 10);

    // Vérifier si un projet avec le même id existe déjà
    const existingProject = await prisma.project.findUnique({
      where: { id: project.id },
    });

    if (existingProject) {
      // Si le projet existe déjà, on le met à jour
      await prisma.project.update({
        where: { id: project.id },
        data: {
          title: project.title,
          description: project.description,
          year: year, // Utilisation de l'entier
          use: project.use,
          visit: project.visit,
          view: project.view,
          cover: project.cover,
          tools: JSON.stringify(project.tools), // Convertion de l'objet tools en chaîne JSON
          category: project.category,
        },
      });
      console.log(`Le projet ${project.title} a été mis à jour.`);
    } else {
      // Si le projet n'existe pas, on l'insère
      await prisma.project.create({
        data: {
          id: project.id,
          title: project.title,
          description: project.description,
          year: year, // Utilisation de l'entier
          use: project.use,
          visit: project.visit,
          view: project.view,
          cover: project.cover,
          tools: JSON.stringify(project.tools), // Convertion de l'objet tools en chaîne JSON
          category: project.category,
        },
      });
      console.log(`Le projet ${project.title} a été inséré.`);
    }
  }

  console.log('Données traitées avec succès');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
