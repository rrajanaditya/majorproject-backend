import { Router } from "express";
import { filterData, getAllData } from "../controllers/refurbishedLaptops.js";

export const refurbishedLaptopRouter = Router();

refurbishedLaptopRouter.get("/all", getAllData)
refurbishedLaptopRouter.post("/filter", filterData)
