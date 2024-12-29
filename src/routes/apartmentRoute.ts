import { Router } from "express";

import {
  getAllApartmentsHandler,
  getApartmentByIdHandler,
} from "../controllers/apartmentController";

const apartmentRouter = Router();
apartmentRouter.get("/", getAllApartmentsHandler);
apartmentRouter.get("/:id", getApartmentByIdHandler);

export default apartmentRouter;
