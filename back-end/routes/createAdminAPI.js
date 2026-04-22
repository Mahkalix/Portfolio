const bcrypt = require('bcryptjs');

const createAdmin = async (req, res, prisma) => {
  try {
    // Vérifier si un admin existe déjà
    const existingAdmin = await prisma.admin.findFirst();
    
    if (existingAdmin) {
      return res.status(400).json({ 
        error: 'Admin already exists',
        admin: { username: existingAdmin.username, id: existingAdmin.id }
      });
    }

    // Créer un nouvel admin
    const hashedPassword = await bcrypt.hash("mmiteachers", 10);
    
    const admin = await prisma.admin.create({
      data: {
        username: "admin",
        password: hashedPassword,
      },
    });

    res.status(201).json({ 
      message: 'Admin created successfully', 
      admin: { username: admin.username, id: admin.id, createdAt: admin.createdAt }
    });

  } catch (error) {
    console.error('Error creating admin:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = createAdmin;
