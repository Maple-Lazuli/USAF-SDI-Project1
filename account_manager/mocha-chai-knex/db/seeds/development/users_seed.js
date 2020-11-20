exports.seed = function(knex, Promise) {
  return knex('users').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('users').insert({
        userID: "user1"
        Fname:"Philip"
        Lname:"Jim"
        
      });
    }).then(function () {
      return knex('shows').insert({
        name: 'Game of Thrones',
        channel: 'HBO',
        genre: 'Fantasy',
        rating: 5,
        explicit: true
      });
    }).then(function () {
      return knex('shows').insert({
        name: 'South Park',
        channel: 'Comedy Central',
        genre: 'Comedy',
        rating: 4,
        explicit: true
      });
    }).then(function () {
      return knex('shows').insert({
        name: 'Mad Men',
        channel: 'AMC',
        genre: 'Drama',
        rating: 3,
        explicit: false
      });
    });
};