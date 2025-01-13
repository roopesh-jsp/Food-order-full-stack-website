import User from "../models/User.model.js";

const addToCart = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    if (!user) {
      const err = new Error();
      err.msg = "token not authorized";
      throw err;
    }
    const cartData = await user.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await User.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, msg: "added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.msg });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    if (!user) {
      const err = new Error();
      err.msg = "token not authorized";
      throw err;
    }
    const cartData = await user.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    } else {
      const err = new Error();
      err.msg = "no such items in your cart";
      throw err;
    }
    await User.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, msg: "removed from cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.msg });
  }
};

const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    if (!user) {
      const err = new Error();
      err.msg = "token not authorized";
      throw err;
    }
    const cartData = await user.cartData;

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.msg });
  }
};

export { addToCart, removeFromCart, getCart };
