const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const authorize = async (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
    throw new AuthError();
  }
  var token = bearerToken.split(" ")[1];
  try {
    token = await jwt.verify(token, process.env.JWT_SECRET);
    const { id, email } = token;
    req.id = id;
    req.email = email;
    next();
  } catch (error) {
    throw new BadRequestError("invalid token");
  }
};
module.exports = authorize;
