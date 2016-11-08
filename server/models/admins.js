var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminsDetailsSchema = new Schema({
  Id:String,
  Name:String

  //: String
});

module.exports = mongoose.model('AdminDetails',adminsDetailsSchema);
