var express = require('express');
var router = express.Router();

// *** GET all users *** //
router.get('/alldeusers', function(req, res, next) {
  res.send('send users back');
});


module.exports = router;
