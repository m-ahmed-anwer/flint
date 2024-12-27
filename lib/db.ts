import { PrismaClient } from "@prisma/client";

declare global {
  // Ensure the PrismaClient is reused across hot reloads in development
  var prisma: PrismaClient | undefined;
}

const db =
  global.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "info", "warn", "error"]
        : ["error"],
  });

if (process.env.NODE_ENV === "development") {
  global.prisma = db;
}

export default db;
