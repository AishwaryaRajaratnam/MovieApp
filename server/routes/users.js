var express = require('express');
var router = express.Router();
var User = require('../models/users');


router.route("/add")
.post(function(req, res){
  if(req.body){
    var userVar = new User(req.body);
    /*----alternativly
    var userVar = new User();
    userVar.username=req.body.username;
    userVar.password=req.body.password;
    */userVar.save(function(err){
      if(err)
      {
        res.send(err);
      }
      else {
        console.log("User inserted in Mongo")
        res.send("User inserted");
      }
    })
  }
});

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/msg/:name', function(req, res, next) {
  res.send('Hello '+req.params.name);
});

router.post('/:fullname', function(req, res, next) {
  res.send('Hello '+ req.query.fn + ' '+ req.query.ln);
});
*/
module.exports = router;
