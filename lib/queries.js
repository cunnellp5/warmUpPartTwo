var knex = require('../db/knex');

module.exports = {
  create: function (human) {
    return knex.raw(`INSERT INTO human values(default,
      '${human.email}',
      '${human.password}')`);
  },
  findUserByEmail: function(email){
    return knex('human').where('email', email).first();
  },
  getAll: function()  {
    return knex('human')
  }
};
