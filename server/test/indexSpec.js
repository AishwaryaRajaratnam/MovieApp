var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,

supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing the first route", function(err){
  it("should handle the request", function(done){
    url
        .get("/movie/")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          if (err) {

				        throw err;
			    }
          //expect(res.text).to.be.equal("Hello!");
          var myObj = JSON.parse(res.text);
          var vals = Object.keys(myObj).map(function(key) {
            return myObj[key];
          });
          vals[0].imdbID.should.be.equal("tt2218988");
  //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

describe("Testing the second route", function(err){
  it("should handle the post request", function(done){
    var mov= {"Title":"Roja","Year":"1992","imdbID":"tt0105271","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNzA2Yjg0ZmQtZWZmOC00YWZmLWIzNTktZDgyMjhjNjUyNzQ5XkEyXkFqcGdeQXVyMjAzMjcxNTE@._V1_SX300.jpg"};
    url
        .post("/movie/add")
        .send(mov)
        .expect(200)

        .end(function(err,res){
          if (err) {

				        throw err;
			    }
          res.text.should.be.equal("Movie added successfully");
          //expect(res.text).to.be.equal("Hello!");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

describe("Testing the third route", function(err){
  it("should handle the delete request", function(done){
    url
        .del("/movie/remove/tt0105271")
        .expect(200)
        .end(function(err,res){
          if (err) {

				        throw err;
			    }
          res.text.should.be.equal("Movie deleted");
          //expect(res.text).to.be.equal("Hello!");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

describe("Testing the fourth route", function(err){
  it("should handle the update request", function(done){
    var obj={"imdbID": "tt6126294","Review":"Remo is a 2016 Indian Tamil comedy film"};
    url
        .put("/movie/update")
        .expect(200)
        .send(obj)
        .end(function(err,res){
          if (err) {

				        throw err;
			    }
          res.text.should.be.equal("Updated movie");
          //expect(res.text).to.be.equal("Hello!");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});
