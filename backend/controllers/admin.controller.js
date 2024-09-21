import { Food } from "../models/Food.model.js";

const sample = async (req, res) => {
  res.send("done!!");
};

const addFoddItem = async (req, res) => {
  const { name, price, discription, catogery } = req.body;
  const foodItem = new Food({
    name,
    price,
    discription,
    catogery,
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

export { sample, addFoddItem };
