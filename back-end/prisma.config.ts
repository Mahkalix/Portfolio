import "dotenv/config";
import { defineConfig } from "prisma/config";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool } from "@neondatabase/serverless";

export default defineConfig({
  schema: "prisma/schema.prisma",
  experimental: {
    adapter: true,
  },
  adapter: async () => {
    const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error("DIRECT_URL or DATABASE_URL must be set.");
    }

    return new PrismaNeon(new Pool({ connectionString }));
  },
});
