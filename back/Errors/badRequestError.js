const { StatusCodes } = require("http-status-codes");
const MainError = require("./Error");
class BadRequestError extends MainError {
  constructor(msg = "Bad request") {
    super(msg, StatusCodes.BAD_REQUEST);
  }
}
module.exports = BadRequestError;
