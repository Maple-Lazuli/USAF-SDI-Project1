var knex = require('./knex.js');

function Users() {
    return knex('users');
}

// *** queries *** //

function getAll() {
    return Users().select();
}

function getUser(userID) {
    return Users().where('userid', parseInt(userID))
}

module.exports = {
    getAll: getAll,
    getUser: getUser
};