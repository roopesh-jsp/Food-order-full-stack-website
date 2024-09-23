import { log } from "console";
import { Food } from "../models/Food.model.js";
import fs from "fs";

// addfood item

const addFoddItem = async (req, res) => {
  const { name, price, discription, catogery } = req.body;

  try {
    const imageName = `${req.file.filename}`;
    if (!name || !price || !discription || !catogery) {
      console.log(name);
      const err = new Error();
      err.message = "enter all fields";
      throw err;
    }

    const foodItem = new Food({
      name,
      price,
      discription,
      catogery,
      image: imageName,
    });
    const result = await foodItem.save();
    console.log(result);
    res.json({ sucess: true, data: result });
  } catch (err) {
    res.json({ sucess: false, err });
  }
};

// get all food item

const getAllItems = async (req, res) => {
  try {
    const items = await Food.find({});
    res.json({ sucess: true, items });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, error });
  }
};

//remove food

const removeItem = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  try {
    const item = await Food.findById(id);
    fs.unlink(`uploads/${item.image}`, () => {});
    const delItem = await Food.findByIdAndDelete(id);
    res.json({ sucess: true, msg: "deleted" });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, msg: error });
  }
};

export { addFoddItem, getAllItems, removeItem };
