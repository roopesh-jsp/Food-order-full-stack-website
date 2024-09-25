import express from "express";
import checkAuth from "../middleware/authCheck.middleware.js";
import { getOrders, placeOrder } from "../controllers/orders.controller.js";

const orderRoutes = express.Router();

orderRoutes.post("/place", checkAuth, placeOrder);

orderRoutes.post("/myorders", checkAuth, getOrders);

export default orderRoutes;
