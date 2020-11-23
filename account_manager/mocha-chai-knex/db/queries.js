var knex = require('./knex.js');

function Users() {
    return knex('users');
}

function Supervisors() {
    return knex('supervisors');
}

// *** user queries *** //

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

function deleteUser(userID){
    return Users().where('userid', parseInt(userID)).del();
}


// *** supervisor queries *** //

function getRelations() {
    return Supervisors().select();
}

function getSupervisees(userID) {
    return Supervisors().where('supervisor', parseInt(userID)).select('user')
}
function getSupervisor(userID) {
    return Supervisors().where('user', parseInt(userID)).select('supervisor')
}

function addRelation(userID, supervisorID){
    return Supervisors().insert({'user': userID, 'supervisor':supervisorID})
}


module.exports = {
    getAll: getAll,
    getUser: getUser,
    getUserBySession: getUserBySession,
    addUser: addUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    getRelations:getRelations,
    getSupervisees:getSupervisees,
    getSupervisor:getSupervisor,
    addRelation:addRelation
};