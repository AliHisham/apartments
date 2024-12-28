import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient().apartments;

export const getAllApartments = async (req, res) => {
  try {
    const all = await prismaClient.findMany();
    res.status(200).json({ data: all });
  } catch (error) {
    console.log(error);
  }
};

export const createApartment = async (req, res) => {
  console.log(req, "ali is just checking");
  try {
    const apartmentData = req.body;
    const apartment = await prismaClient.create({
      data: apartmentData,
    });
    res.status(201).json({ data: apartment });
  } catch (error) {
    console.log(error);
  }
};
