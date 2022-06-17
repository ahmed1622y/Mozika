const { Sequelize } = require("../models");
class Repo {
  constructor(model) {
    this.model = model;
    this.op = Sequelize.Op;
  }
  static initialPagination = { pageNo: 0, limit: 10 };

  async findOneByProperty(query, modelsIncluded = [], options) {
    // const include = [];
    // modelsIncluded.forEach((model) => include.push( model ));
    const user = await this.model.findOne({
      where: query,
      include: modelsIncluded,
      ...options,
    });
    if (!user) throw new NotFoundError("user not found");
    return user;
  }
  async update(query = {}, updatedInstance = {}) {
    const data = await this.model.update(updatedInstance, { where: query });
    if (data[0] === 0) throw new NotFoundError("User not found");
    return data;
  }

  findAll(pagination = Repo.initialPagination, query = {}) {
    const { pageNo, limit } = pagination;
    return this.model.findAll({ where: query, limit, offset: limit * pageNo });
  }
  search(pagination = Repo.initialPagination, query = {}, fields = []) {
    const { pageNo, limit } = pagination;
    const attrs = {};
    fields.forEach((key) => (attrs[key] = { [op.like]: `%${key}%` }));
    where = { [op.or]: attrs, ...query };
    return this.model.findAll({ where, limit, offset: pageNo * limit });
  }
  async delete(query) {
    const data = await this.model.destroy({ where: query });
    if (data === 0) throw new NotFoundError("user not found");
    return data;
  }
  create(instance) {
    return this.model.create(instance);
  }
}
module.exports = Repo;
