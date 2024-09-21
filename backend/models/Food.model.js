import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  catogery: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // required: true,
  },
});

const Food = mongoose.models.food || mongoose.model("food", foodSchema);
export { Food };
