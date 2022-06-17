// CUSTOM RESPONSE MIDDLEWARE
const { StatusCodes } = require("http-status-codes");
const moment = require("moment");

const custom = (req, res) => {
  // SEND THD FOLLOWING MESSAGE IF THE USER ASKED FOR WRONG PATH OR METHOD
  res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
    msg: `Can't Do ${req.method} method on ${req.url} path`,
    method: req.method,
    status: StatusCodes.METHOD_NOT_ALLOWED,
    date: moment().format("YYYY-MM-DD HH:mm:ss"),
  });
};

module.exports = custom;
