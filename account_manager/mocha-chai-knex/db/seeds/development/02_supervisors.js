
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('supervisors').del()
    .then(function () {
      // Inserts seed entries
      return knex('supervisors').insert({
        user: 1,
        supervisor: 2
      })
    }).then(function () {
      return knex('supervisors').insert({
        user: 3,
        supervisor: 4
      })
    });
};
