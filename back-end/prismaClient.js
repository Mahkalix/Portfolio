require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const { PrismaNeon } = require("@prisma/adapter-neon");
const { Pool } = require("@neondatabase/serverless");

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL must be set.");
}

const adapter = new PrismaNeon(new Pool({ connectionString }));
const prisma = new PrismaClient({ adapter });

module.exports = prisma;