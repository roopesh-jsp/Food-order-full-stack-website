import express from "express";
import { login, register } from "../controllers/UserAuth.controller.js";

const Authroutes = express.Router();

Authroutes.post("/register", register);

Authroutes.post("/login", login);

export { Authroutes };
