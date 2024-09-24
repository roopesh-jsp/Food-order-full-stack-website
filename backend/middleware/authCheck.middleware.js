import jwt from "jsonwebtoken";

const checkAuth = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, msg: "no token" });
  }
  try {
    const decode_token = await jwt.verify(token, process.env.JWT_SECERET);
    req.body.userId = decode_token.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "error" });
  }
};

export default checkAuth;
