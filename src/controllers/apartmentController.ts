import {
  getAllApartments,
  getApartmentById,
} from "../services/apartmentService";

export const getAllApartmentsHandler = async (req, res, next) => {
  try {
    const apartments = await getAllApartments();
    res.status(200).json({ data: apartments });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getApartmentByIdHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id, "ali is just checking");
    const apartment = await getApartmentById(id);
    res.status(200).json({ data: apartment });
  } catch (error) {
    next(error);
  }
};
