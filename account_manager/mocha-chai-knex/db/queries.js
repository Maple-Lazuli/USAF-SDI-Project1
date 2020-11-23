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

function getUserBySession(sessionID) {
    return Users().where('sessionid', parseInt(sessionID))
}

function addUser(user) {
    return Users().insert(user, 'userid')
}


function updateUser(userID, updates) {
        return Users().where('userid', parseInt(userID)).update(updates);
}

module.exports = {
    getAll: getAll,
    getUser: getUser,
    getUserBySession: getUserBySession,
    addUser: addUser,
    updateUser: updateUser
};