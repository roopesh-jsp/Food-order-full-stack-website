import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "../controllers/cart.controller.js";
import checkAuth from "../middleware/authCheck.middleware.js";

const cartRoutes = express.Router();

cartRoutes.post("/add", checkAuth, addToCart);

cartRoutes.post("/remove", checkAuth, removeFromCart);

cartRoutes.post("/", checkAuth, getCart);

export default cartRoutes;
