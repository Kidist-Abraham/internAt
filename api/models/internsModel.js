'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var InternSchema = new Schema({
  name:  String,
  email:{type: String, required: true, unique: true},
  field:String,
  interests:[String],
  discription:String,
  role: {type: String, required: true,  default: "Intern"} 
  
});

module.exports = mongoose.model('Intern', InternSchema);
