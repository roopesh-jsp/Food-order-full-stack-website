import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://rupzkumar5:1234@cluster0.kex6p.mongodb.net/food-items?"
    );
    console.log("conneted db");
  } catch (err) {
    console.log(err);
  }
};

export { connectDb };
