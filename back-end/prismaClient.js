process.stdout.write("=== PRISMA CLIENT LOADING ===\n");
require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });

const { PrismaClient } = require("@prisma/client");
const { PrismaNeon } = require("@prisma/adapter-neon");
const { Pool, neonConfig } = require("@neondatabase/serverless");
const ws = require("ws");

neonConfig.webSocketConstructor = ws;

process.stdout.write("DATABASE_URL: " + process.env.DATABASE_URL + "\n");

let prisma;

function getPrisma() {
  if (!prisma) {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const adapter = new PrismaNeon(pool);
    prisma = new PrismaClient({ adapter });
  }
  return prisma;
}

module.exports = getPrisma();