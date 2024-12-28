import { Router } from "express";

import {
  getAllApartments,
  createApartment,
} from "../controllers/apartmentController";

const apartmentRouter = Router();
apartmentRouter.get("/", getAllApartments);
apartmentRouter.post("/", createApartment);

export default apartmentRouter;
