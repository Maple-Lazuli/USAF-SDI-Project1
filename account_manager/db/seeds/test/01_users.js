exports.seed = function (knex, Promise) {
  return  knex('users').del() // Deletes ALL existing entries
    .then(function () { // Inserts seed entries one by one in series
      return knex('users').insert({
        "firstName": "Stevens",
        "lastName": "Mitchel",
        "sessionid": 24,
        "paygrade": "E-2",
        "rank": "Amn",
        "gender": "Female",
        "rankInt": 2,
        "AFSC": "1Q251A",
        "unit": "6101st Air Base Wing",
        "DOR": "1-5-1998"
      });
    }).then(function () {
      return knex('users').insert({
        "firstName": "Athanasios",
        "lastName": "Peloquin",
        "sessionid": 26,
        "paygrade": "E-9",
        "rank": "CMSgt",
        "gender": "Male",
        "rankInt": 9,
        "AFSC": "1Q251A",
        "unit": "5900th Wing 5900th Composite Wing",
        "DOR": "7-1-2017"
      });
    }).then(function () {
      return knex('users').insert({
        "firstName": "Jeffrie",
        "lastName": "Caesar",
        "sessionid": 22,
        "paygrade": "E-4",
        "rank": "SrA",
        "gender": "Female",
        "rankInt": 4,
        "AFSC": "1Q251A",
        "unit": "4950th Test Wing",
        "DOR": "2-7-2020"
      });
    }).then(function () {
      return knex('users').insert({
        "firstName": "Vida",
        "lastName": "Romain",
        "sessionid": 23,
        "paygrade": "E-3",
        "rank": "A1C",
        "gender": "Female",
        "rankInt": 3,
        "AFSC": "1Q251A",
        "unit": "4070th Support Wing",
        "DOR": "1-15-2008"
      });
    }).then(function () {
      knex('supervisors').del()
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
        }).then(function () {
          return knex('supervisors').insert({
            user: 2,
            supervisor: 4
          })
        })
        .then(function () {
          return knex('supervisors').insert({
            user: 1,
            supervisor: 4
          })
        })
    });
};