import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient().apartments;

//handle database queries

export const findAllApartments = async () => prismaClient.findMany();

export const findApartmentById = async (id) =>
  prismaClient.findUnique({
    where: {
      id: Number(id),
    },
  });
