import jwt from "jsonwebtoken";
import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import validator from "validator";

const generateToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECERET);
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      const err = new Error();
      err.msg = "all fields are required";
      throw err;
    }
    if (!validator.isEmail(email)) {
      const err = new Error();
      err.msg = "enter valid email";
      throw err;
    }
    if (password.length < 8) {
      const err = new Error();
      err.msg = "enter password of minium 8 chars";
      throw err;
    }
    const exists = await User.findOne({ email });
    if (exists) {
      const err = new Error();
      err.msg = "user already exixts";
      throw err;
    }
    const hashedPw = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      password: hashedPw,
      email,
    });
    await newUser.save();
    const token = await generateToken(newUser._id);

    res.json({ success: true, msg: "user created", token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.msg });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const reqUser = await User.findOne({ email });

    if (!reqUser) {
      const err = new Error();
      err.msg = "user not exists !!";
      throw err;
    }

    const ismatch = await bcrypt.compare(password, reqUser.password);

    if (!ismatch) {
      const err = new Error();
      err.msg = "in valid creditials !!";
      throw err;
    }

    const token = await generateToken(reqUser._id);
    res.json({ success: true, msg: "logged in", token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.msg });
  }
};
export { register, login };
