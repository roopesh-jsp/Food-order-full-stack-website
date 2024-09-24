import express from "express";
import cors from "cors";
import { routes } from "./routes/admin.routes.js";
import { connectDb } from "./config/db.js";
import { Authroutes } from "./routes/userAuth.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import orderRoutes from "./routes/order.routes.js";
import "dotenv/config";

//app config
const app = express();

// middle Ware
app.use(express.json());
app.use(cors());

// api endpoints

app.use("/admin", routes);
app.use("/images", express.static("uploads"));

app.use("/users", Authroutes);

app.use("/cart", cartRoutes);

app.use("/orders", orderRoutes);

app.listen(3000, () => {
  connectDb();
  console.log("app created");
});
