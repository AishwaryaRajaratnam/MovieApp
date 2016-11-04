var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Express started");
  res.send('<h1>HELLOOO WORLD</h1>');
});

module.exports = router;
