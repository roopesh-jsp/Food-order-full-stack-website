import Orders from "../models/orders.model.js";
import User from "../models/User.model.js";

const placeOrder = async (req, res) => {
  console.log(req.body);

  const { items, address, amount } = req.body;
  try {
    const newOrder = new Orders({
      userId: req.body.userId,
      address,
      items,
      amount,
    });
    await newOrder.save();
    await User.findByIdAndUpdate(req.body.userId, { cartData: {} });
    res.json({ success: true, msg: "order placed" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, msg: "error" });
  }
};

export { placeOrder };
