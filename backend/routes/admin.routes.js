import express from "express";
import {
  addFoddItem,
  adminLogin,
  getAllItems,
  getItem,
  removeItem,
  updateItem,
} from "../controllers/admin.controller.js";
import multer from "multer";
import adminCheck from "../middleware/adminCheck.js";
const routes = express.Router();

// add fooditem
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
routes.post("/add", adminCheck, upload.single("image"), addFoddItem);

// get food items all

routes.get("/all", getAllItems);

// remove items

routes.delete("/delete/:id", adminCheck, removeItem);

routes.post("/update", adminCheck, updateItem);

routes.get("/item/:id", adminCheck, getItem);

routes.post("/login", adminLogin);

export { routes };
