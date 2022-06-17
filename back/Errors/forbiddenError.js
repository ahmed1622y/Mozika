const { StatusCodes } = require("http-status-codes");
const MainError = require("./Error");

class ForbiddenError extends MainError {
  constructor(msg = "Forbidden request") {
    super(msg, StatusCodes.FORBIDDEN);
  }
}
module.exports = ForbiddenError;
