import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });
}

export const prisma = globalForPrisma.prisma;
