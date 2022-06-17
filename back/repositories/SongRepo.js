const Repo = require("./Repo");
class SongRepo extends Repo {
  constructor(songModel) {
    super(songModel);
    this.songModel = songModel;
  }
  findById(id, includeUser) {
    const songs = includeUser
      ? super.findOneByProperty({ id }, ["Users"])
      : super.findOneByProperty({ id });
    return songs;
  }
  findByName(name) {
    return super.findOneByProperty({ name });
  }
  findAll(pagination = Repo.initialPagination) {
    super.findAll(pagination);
  }
  search(pagination = Repo.initialPagination, fields = ["name"]) {
    return super.search(pagination, fields);
  }
  create = (songInstance) => Super.create({ songInstance });

  deleteById = (id) => Super.destroy({ id });
}
module.exports = { SongRepo };
