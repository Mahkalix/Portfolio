const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function createAdmin() {
  const hashedPassword = await bcrypt.hash("mmiteachers", 10); 

  try {
    const admin = await prisma.admin.create({
      data: {
        username: "admin", 
        password: hashedPassword, 
      },
    });

    console.log("Admin user created:", admin);
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();
