const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function deleteAllAdmins() {
  try {
    const result = await prisma.admin.deleteMany({});
    console.log(`Deleted ${result.count} admin(s)`);
  } catch (error) {
    console.error("Error deleting admins:", error);
  } finally {
    await prisma.$disconnect();
  }
}

deleteAllAdmins();
