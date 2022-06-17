const { StatusCodes } = require("http-status-codes");
const { getAudioDurationInSeconds } = require("get-audio-duration");

const create = async (req, res) => {
  const { name, artist } = req.body;
  if (!req?.files) throw new BadRequestError("audio is required");
  const song = req?.data?.files.song;
  const ex = song.name.split(".")[song.name.split(".").length - 1];
  await song.mv("./public/songs/" + `${song.name}.${ex}`);

  const duration = await getAudioDurationInSeconds(
    `./public/songs/${"1"}.${ex}`
  );

  res.send("duration");
};
module.exports = { create };
