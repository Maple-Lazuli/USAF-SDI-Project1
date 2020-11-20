var knex = require('./knex.js');

function Shows() {
  return knex('users');
}

// *** queries *** //

function getAll() {
  return Shows().select();
}


module.exports = {
  getAll: getAll
};