const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.admin.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    // Générer le token JWT si la connexion est réussie
    const token = jwt.sign({ id: user.id, username: user.username }, 'your-secret-key', {
      expiresIn: '1h',
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = login;
