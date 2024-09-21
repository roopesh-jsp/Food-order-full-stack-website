import express from "express";
import {
  addFoddItem,
  getAllItems,
  removeItem,
} from "../controllers/admin.controller.js";
import multer from "multer";
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
routes.post("/add", upload.single("image"), addFoddItem);

// get food items all

routes.get("/all", getAllItems);

// remove items

routes.delete("/delete/:id", removeItem);

export { routes };
