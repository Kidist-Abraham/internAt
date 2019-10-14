'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var InternSchema = new Schema({
  name:  String,
  email:String,
  field:String,
  interests:[String],
  discription:String  
  
});

module.exports = mongoose.model('Intern', InternSchema);
