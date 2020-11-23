var express = require('express');
var router = express.Router();

var queries = require('../db/queries');


// *** GET all relations *** //
router.get('/all/', function (req, res, next) {
  queries.getRelations()
    .then(function (rels) {
      res.status(200).json(rels);
    })
    .catch(function (error) {
      next(error);
    });
});

module.exports = router
