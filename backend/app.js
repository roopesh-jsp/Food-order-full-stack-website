import express from "express";
import cors from "cors";
import { routes } from "./routes/admin.routes.js";
import { connectDb } from "./config/db.js";

//app config
const app = express();

// middle Ware
app.use(express.json());
app.use(cors());

// api endpoints

app.use("/admin", routes);

app.listen(3000, () => {
  connectDb();
  console.log("app created");
});
