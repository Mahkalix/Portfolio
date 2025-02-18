const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function test() {
  try {
    const project = await prisma.project.findUnique({
      where: { id: "argentbank" },
    });

    console.log(project);
  } catch (error) {
    console.error("Erreur Prisma :", error);
  } finally {
    await prisma.$disconnect();
  }
}

test();
