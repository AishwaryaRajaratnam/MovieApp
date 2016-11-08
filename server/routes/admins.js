var express = require('express');
var router = express.Router();
var Admins = require('../models/admins');


router.route("/add")
.post(function(req, res){
  if(req.body){
    var adminVar = new Admins();
    /*----alternativly
    var userVar = new User();*/
    adminVar.Id=req.body.Id;
      adminVar.Name=req.body.Name;
    adminVar.save(function(err){
      if(err)
      {
        res.send(err);
      }
      else {
        console.log("User inserted in Mongo")
        res.send("Admin inserted");
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
