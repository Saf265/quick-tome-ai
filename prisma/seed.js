"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const main = async () => {};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
