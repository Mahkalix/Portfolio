const bcrypt = require("bcrypt");

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.admin.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred. Please try again." });
  }
});
