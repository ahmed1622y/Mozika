const { StatusCodes } = require("http-status-codes");
const { User } = require("../models");
const { UserRepo } = require("../repositories/UserRepo");
const { comparePassword, makeToken } = require("../services/authServices");
const repo = new UserRepo(User);

const signUp = async (req, res) => {
  const { data: userData } = req.body;

  if (!userData) throw new BadRequestError("some user data are required");

  const user = await repo.create(userData);
  const token = await makeToken(user.dataValues.id, user.dataValues.email);

  const { password: unWanted, ...filtered } = user.dataValues;

  return res
    .status(StatusCodes.CREATED)
    .json({ data: filtered, token, msg: "signed up" });
};
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    throw new BadRequestError("email and password are required");

  const user = await repo.findByEmail(email);

  const hashedPassword = user.password;
  await comparePassword(password, hashedPassword);

  const token = await makeToken(user.dataValues.id, user.dataValues.email);
  const { password: unWanted, ...filtered } = user.dataValues;

  res.status(StatusCodes.OK).json({ msg: "logged in", data: filtered, token });
};
const checkLogin = async (req, res) => {
  if (!req.id) throw new InternalServerError();

  const user = await repo.findById(req.id);

  const { password, ...filtered } = user.dataValues;
  res.status(StatusCodes.OK).send({ msg: "logged in", data: filtered });
};
const findUser = async (req, res) => {
  const user = await repo.findById(req.params.id);
  return res.status(StatusCodes.OK).json({ data: user });
};
const findUserSongs = async (req, res) => {
  const user = await repo.findById(req.params.id, (includeSongs = true));
  res.status(StatusCodes.OK).json({ data: user });
};
const findUsers = async (req, res) => {
  const users = await repo.findAll();
  res.status(StatusCodes.OK).json({ data: users });
};
const profilePicture = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  if (!password || !req.files)
    throw new BadRequestError("image and password and required");

  const user = await repo.findById(id);

  await comparePassword(password, user.dataValues.password);

  const image = req.files.image;

  image.mv("./public/" + `${id}.jpg`);

  await repo.updateOneById(id, { profilePicture: true });

  res.status(StatusCodes.OK).json({ msg: "profile picture updated" });
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  if (!password) throw new BadRequestError("password is required");

  const user = await repo.findById(id);

  await comparePassword(password, user.dataValues.password);

  await repo.deleteById(id);

  res.status(StatusCodes.OK).json({ msg: "user deleted" });
};

module.exports = {
  signUp,
  findUsers,
  login,
  findUser,
  findUserSongs,
  checkLogin,
  profilePicture,
  deleteUser,
};
