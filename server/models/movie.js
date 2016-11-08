var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieDetailsSchema = new Schema({
  Title: String,
  Year: Number,
  imdbID: String,
  Type: String,
  Poster: String,
  Review: String

  //: String
});

module.exports = mongoose.model('MovieDetails',movieDetailsSchema);
