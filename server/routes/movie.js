var express = require('express');
var router = express.Router();
var Movie = require('../models/movie');

router.route("/add")
.post(function(req, res){
  if(req.body){
    var movieVar = new Movie(req.body);

    movieVar.save(function(err){
      if(err)
      {
        res.send(err);
      }
      else {
        console.log("Movie inserted in Mongo");
        res.send("Movie added successfully");
      }
    })
  }
});

router.route("/remove/:movieId")
.delete(function(req, res){
  if(req.params.movieId){
    Movie.remove({imdbID:req.params.movieId},function(err){
      if(err)
      {
        res.send(err);
      }
      else {
        console.log("Movie deleted from Mongo");
        res.send("Movie deleted");
      }
    })
  }
});

router.route("/update")
.put(function(req, res){
  console.log("put req called " +req.body.imdbID+"    "+req.body.Review);
  if(req.body){

    Movie.update({ imdbID: req.body.imdbID }, { Review: req.body.Review },function(err){
      if(err)
      {
        res.send(err);
      }
      else {
        console.log("Updated the movie")
        res.send("Updated movie");
      }
    })
  }
});
//MyModel.update({ age: { $gt: 18 } }, { oldEnough: true }, fn);

router.route("/")
.get(function(req, res){

  // var movieVar = new Movie();
  //  movieVar.imdbID = req.params.movieId;
    Movie.find({}, function(err,allMovies){
      if(err)
      {
        res.send(err);
      }
      else {
        console.log("All movies in MongoDB fetched res ");
        var movieMap = {};
        allMovies.forEach(function(mov) {
          movieMap[mov._id] = mov;
        });

        res.send(movieMap);
      }
    })

});

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('inside movie route');
});


router.post('/search/:name', function(req, res, next) {

var arrayOfObjects=[{title:'sultan',year:2016},{title:'remo',year:2016},{title:'premam',year:2015}];
var ob=arrayOfObjects.filter(function(a){
  if(a.title === req.params.name)
  {
  return a;
  }
});
res.json(ob);
});

router.post('/add', function(req, res, next) {
  console.log(req.body);
  res.send("Hellooo");
});

*/
module.exports = router;
