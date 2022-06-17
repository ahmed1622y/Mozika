const express = require("express");
const authMiddleware = require("../middleWares/authMiddleWare");
const {
  signUp,
  findUsers,
  login,
  findUser,
  findUserSongs,
  checkLogin,
  profilePicture,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

router.route("/").get(findUsers).post(signUp);
router.route("/change/picture/:id").post(profilePicture);
router.route("/login").post(login);
router.route("/login/check").get(authMiddleware, checkLogin);
router.route("/:id").get(findUser).delete(deleteUser);
router.route("/:id/songs").get(findUserSongs);

module.exports = router;
