import express from "express";
import { addFoddItem, sample } from "../controllers/admin.controller.js";

const routes = express.Router();

routes.get("/", sample);
routes.post("/add", addFoddItem);

export { routes };
