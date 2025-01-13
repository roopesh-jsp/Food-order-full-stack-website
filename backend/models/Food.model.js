import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

const Food = mongoose.model("food", foodSchema);
export { Food };
