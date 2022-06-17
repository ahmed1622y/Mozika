const Repo = require("./Repo");
class UserRepo extends Repo {
  constructor(userModel) {
    super(userModel);
    this.userModel = userModel;
  }

  findById = async (id, includeSongs = false) => {
    const user = includeSongs
      ? await super.findOneByProperty({ id }, ["Songs"])
      : await super.findOneByProperty({ id });
    return user;
  };
  findByEmail(email) {
    return super.findOneByProperty({ email });
  }
  findAll(pagination = Repo.initialPagination, query = {}) {
    return super.findAll(pagination, query);
  }
  search(
    pagination = Repo.initialPagination,
    fields = ["email", "firstName", "lastName"]
  ) {
    return super.search(pagination, fields);
  }
  updateOneById(id, updatedInstance) {
    return super.update({ id }, updatedInstance);
  }
  deleteById(id) {
    return super.delete({ id });
  }
  create(instance) {
    return super.create(instance);
  }
}
module.exports = { UserRepo };
