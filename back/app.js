require("express-async-errors");
require("./Globals");

const express = require("express");
const customResponse = require("./customResponse/customResponse");
const errorHandler = require("./errorHandler/errorHandler");
const upload = require("express-fileupload");
const cors = require("cors");

const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");
const app = express();
const userRouter = require("./routers/userRouter");
const songRouter = require("./routers/songsRouter");

app.set("trust proxy", 1);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(upload());
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 10000,
  })
);
app.use(helmet());
app.use(xss());
app.use(cors());

app.use("/user", userRouter);
app.use("/song", songRouter);

app.use(customResponse);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
