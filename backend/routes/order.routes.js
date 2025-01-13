import express from "express";
import checkAuth from "../middleware/authCheck.middleware.js";
import {
  getallOrders,
  getOrders,
  placeOrder,
  updateOrder,
} from "../controllers/orders.controller.js";

const orderRoutes = express.Router();

orderRoutes.post("/place", checkAuth, placeOrder);

orderRoutes.post("/myorders", checkAuth, getOrders);

orderRoutes.get("/allorders", getallOrders);

orderRoutes.post("/update", updateOrder);

export default orderRoutes;
