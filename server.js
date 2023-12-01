import express from "express";
import cors from "cors"

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors());

import { newLaptopRouter } from "./routes/newLaptops.js";
import { refurbishedLaptopRouter } from "./routes/refurbishedLaptops.js";

app.use("/newlaptop", newLaptopRouter)
app.use("/refurbishedlaptop", refurbishedLaptopRouter)
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})