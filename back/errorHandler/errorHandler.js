const { StatusCodes } = require("http-status-codes");
// ERROR HANDLER MIDDLEWARE
const errorHandler = async (err, req, res, next) => {
  console.log(err.message);
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong try again later",
  };

  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(" ");
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  if (err.name === "SequelizeUniqueConstraintError") {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(" ");
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  if (err.name === "SequelizeValidationError") {
    customError.msg = Object.values(err.errors)
      .map((item, index) => {
        if (index + 1 === Object.values(err.errors).length) {
          var edited = item.message.split(".")[1];
          return edited;
        }
        var edited = item.message.split(".")[1] + ",";
        return edited;
      })
      .join(" ");
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  if (err.name === "CastError") {
    customError.msg = `No item found with id : ${err.value}`;
    customError.statusCode = StatusCodes.NOT_FOUND;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandler;
