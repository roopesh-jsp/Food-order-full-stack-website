import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: {
    type: Array,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  status: {
    type: String,
    default: "Food processing",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Orders = mongoose.models.orders || mongoose.model("orders", ordersSchema);
export default Orders;
