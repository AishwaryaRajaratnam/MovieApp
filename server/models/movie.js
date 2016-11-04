var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieDetailsSchema = new Schema({
  title: String,
  year: Number,
  imdbID: String,
  poster: String

  //: String
});

module.exports = mongoose.model('MovieDetails',movieDetailsSchema);
