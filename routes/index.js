var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/add', function(req, res) {
	res.render('add');
});

module.exports = router;
