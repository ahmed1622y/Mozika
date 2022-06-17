const express = require("express");
const router = express.Router();
const { create } = require("../controllers/songsController");

router.route("/").post(create);
module.exports = router;
