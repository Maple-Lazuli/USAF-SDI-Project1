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

router.get('/supervisee/:id', function (req, res, next) {
    queries.getSupervisees(req.params.id)
        .then(function (rels) {
            res.status(200).json(rels);
        })
        .catch(function (error) {
            next(error);
        });
});

router.get('/supervisor/:id', function (req, res, next) {
    queries.getSupervisor(req.params.id)
        .then(function (rels) {
            res.status(200).json(rels);
        })
        .catch(function (error) {
            next(error);
        });
});

router.get('/add/:userID&:supervisorID', function (req, res, next) {
    queries.addRelation(req.params.userID, req.params.supervisorID)
        .then(function (rels) {
            res.status(200).json(rels);
        })
        .catch(function (error) {
            next(error);
        });
});




module.exports = router
