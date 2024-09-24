import express from "express";
import checkAuth from "../middleware/authCheck.middleware.js";
import { placeOrder } from "../controllers/orders.controller.js";

const orderRoutes = express.Router();

orderRoutes.post("/place", checkAuth, placeOrder);

export default orderRoutes;
