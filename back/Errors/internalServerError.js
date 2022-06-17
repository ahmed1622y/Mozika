const { StatusCodes } = require("http-status-codes");
const MainError = require("./Error");
class InternalServerError extends MainError {
  constructor() {
    super("Internal server error", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
module.exports = InternalServerError;
