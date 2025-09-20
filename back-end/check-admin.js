const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function checkAdmin() {
  try {
    const admins = await prisma.admin.findMany();
    console.log("All admins in database:", admins);
    
    if (admins.length === 0) {
      console.log("No admins found in database");
    } else {
      console.log(`Found ${admins.length} admin(s)`);
    }
  } catch (error) {
    console.error("Error checking admins:", error);
  } finally {
    await prisma.$disconnect();
  }
}

checkAdmin();
