var express = require('express');
var router = express.Router();

/* GET custumer page. */
router.get('/', function(req, res, next) {
  res.render('custumer', { title: 'Express' });
});

module.exports = router;