const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());  // Enable cross-origin resource sharing

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

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

  // If login is successful, generate a JWT token
  const token = jwt.sign({ id: user.id, username: user.username }, 'your-secret-key', {
    expiresIn: '1h',
  });

  return res.status(200).json({ token });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
