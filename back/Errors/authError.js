const { StatusCodes } = require("http-status-codes");
const MainError = require("./Error");
class AuthError extends MainError {
  constructor(msg = "Not authorized") {
    super(msg, StatusCodes.UNAUTHORIZED);
  }
}
module.exports = AuthError;
