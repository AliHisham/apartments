import {
  findAllApartments,
  findApartmentById,
} from "../repositories/ApartmentRepositry";

export const getAllApartments = async () => {
  const apartments = await findAllApartments();
  return apartments;
};

export const getApartmentById = async (id) => {
  const apartment = await findApartmentById(id);
  return apartment;
};
