const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function testLogin() {
  const username = 'admin';
  const password = 'mmiteachers';

  try {
    console.log('Testing login with:');
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('---');

    // Trouver l'utilisateur
    const user = await prisma.admin.findUnique({
      where: { username },
    });

    if (!user) {
      console.log('❌ User not found');
      return;
    }

    console.log('✅ User found:', user.username);
    console.log('User ID:', user.id);
    console.log('Password hash:', user.password);

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (isPasswordValid) {
      console.log('✅ Password is valid - Login successful!');
    } else {
      console.log('❌ Password is invalid');
    }

  } catch (error) {
    console.error('❌ Error during login test:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testLogin();
