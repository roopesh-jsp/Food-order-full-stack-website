import { log } from "console";
import { Food } from "../models/Food.model.js";
import fs from "fs";

// addfood item

const addFoddItem = async (req, res) => {
  const { name, price, discription, catogery } = req.body;
  console.log(req.file);
  const imageName = `${req.file.filename}`;

  const foodItem = new Food({
    name,
    price,
    discription,
    catogery,
    image: imageName,
  });
  try {
    const result = await foodItem.save();
    console.log(result);
    res.json({ data: result });
  } catch (err) {
    console.log(err);
    res.json({ error: err });
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
