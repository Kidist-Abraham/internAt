'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var InternSchema = new Schema({
  first_name:  String,
  last_name: String,  
  email:{type: String, required: true, unique: true},
  bio:String,
  website:String,
  department:String,
  level:String,
  interests:[String],
  discription:String,
  skills:[String],
  role: {type: String, required: true,  default: "Intern"} 
  
});

module.exports = mongoose.model('Intern', InternSchema);



