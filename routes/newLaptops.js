import { Router } from "express";
import { filterData, getAllData } from "../controllers/newLaptops.js";

export const newLaptopRouter = Router();

newLaptopRouter.get("/all", getAllData)
newLaptopRouter.post("/filter", filterData)
