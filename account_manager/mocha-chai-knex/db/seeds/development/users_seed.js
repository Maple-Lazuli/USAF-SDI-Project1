exports.seed = function(knex, Promise) {
  return knex('users').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('users').insert({
        "firstName": "Stevens",
        "lastName": "Mitchel",
        "userid": "24",
        "sessionid": "24",
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
        "userid": "26",
        "sessionid": "26",
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
        "userid": "user22",
        "sessionid": "user22",
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
        "userid": "user21",
        "sessionid": "user21",
        "paygrade": "E-3",
        "rank": "A1C",
        "gender": "Female",
        "rankInt": 3,
        "AFSC": "1Q251A",
        "unit": "4070th Support Wing",
        "DOR": "1-15-2008"
      });
    });
};