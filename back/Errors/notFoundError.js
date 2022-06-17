const { StatusCodes } = require("http-status-codes");
const MainError = require("./Error");
class NotFoundError extends MainError {
  constructor(msg = "not found") {
    super(msg, StatusCodes.NOT_FOUND);
  }
}
module.exports = NotFoundError;
