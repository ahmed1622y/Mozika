const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const hashing = async (password) => {
  const salt = await bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hashSync(password, salt);
  return hashedPassword;
};
const comparePassword = async (password, hashedPassword) => {
  const result = await bcrypt.compare(password, hashedPassword);
  if (!result) throw new ForbiddenError("password mismatch");
};
const makeToken = async (id, email) => {
  const token = await jwt.sign({ id, email }, process.env.JWT_SECRET);
  return token;
};
module.exports = { hashing, comparePassword, makeToken };
