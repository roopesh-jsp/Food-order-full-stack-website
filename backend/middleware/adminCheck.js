import jwt from "jsonwebtoken";

const adminCheck = async (req, res, next) => {
  const { atoken } = req.headers;
  if (!atoken) {
    return res.json({ success: false, msg: "no token" });
  }
  try {
    const decode_token = await jwt.verify(atoken, process.env.JWT_SECERET);
    if (!decode_token) {
      return res.json({ success: false, msg: "no token" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "error" });
  }
};

export default adminCheck;
