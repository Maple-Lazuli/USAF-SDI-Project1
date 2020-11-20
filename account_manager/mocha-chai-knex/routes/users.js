var express = require('express');
var router = express.Router();

var queries = require('../db/queries');


// *** GET all users *** //
router.get('/all', function(req, res, next) {
  queries.getAll()
  .then(function(users) {
    res.status(200).json(users);
  })
  .catch(function(error) {
    next(error);
  });
});

// ***Get one user *** //
router.get('/users/:id', function(req, res, next) {
  queries.getUser(req.params.id)
  .then(function(users) {
    res.status(200).json(users);
  })
  .catch(function(error) {
    next(error);
  });
});

module.exports = router;