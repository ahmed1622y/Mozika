const AuthError = require("./Errors/authError");
const BadRequestError = require("./Errors/badRequestError");
const ForbiddenError = require("./Errors/forbiddenError");
const InternalServerError = require("./Errors/internalServerError");
const NotFoundError = require("./Errors/notFoundError");

global.AuthError = AuthError;
global.BadRequestError = BadRequestError;
global.ForbiddenError = ForbiddenError;
global.InternalServerError = InternalServerError;
global.NotFoundError = NotFoundError;
