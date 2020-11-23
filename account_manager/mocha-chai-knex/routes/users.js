var express = require('express');
var router = express.Router();

var queries = require('../db/queries');


// *** GET all users *** //
router.get('/all/', function (req, res, next) {
  queries.getAll()
    .then(function (users) {
      res.status(200).json(users);
    })
    .catch(function (error) {
      next(error);
    });
});



// ***Get one user *** //
router.get('/user/:id', function (req, res, next) {
  queries.getUser(req.params.id)
    .then(function (users) {
      if (users.length == 1)
        res.status(200).json(users);
      else
        res.status(400).send("User Not Found")
    })
    .catch(function (error) {
      next(error);
    });
});


router.get('/userSession/:sessionId', function (req, res, next) {
  queries.getUserBySession(req.params.sessionId)
    .then(function (users) {
      if (users.length == 1)
        res.status(200).json(users);
      else
        res.status(400).send("User Session Not Found")
    })
    .catch(function (error) {
      next(error);
    });
});

router.post('/user', function (req, res, next) {
    //Add cases for non-existent columns here
    //Add cases for empty post
  queries.addUser(req.body)
    .then(function (userid) {
      return queries.getUser(userid)
    })
    .then(function (user) {
      res.status(200).json(user);
    })
    .catch(function (error) {
      next(error);
    });
});

router.put('/user/:id', function (req, res, next) {
  //Add cases for non-existent columns here
  //add cases for 

  queries.updateUser(req.params.id, req.body)
    .then(function () {
      return queries.getUser(req.params.id);
    })
    .then(function (user) {
      if (user.length == 1)
        res.status(200).json(user);
      else
        res.status(400).send("User Not Found")
    })
    .catch(function (error) {
      next(error);
    });
});


module.exports = router;