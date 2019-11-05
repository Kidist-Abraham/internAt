'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var InternshipsSchema = new Schema({
  name:  String,
  email:{type: String, required: true},
  bio:{type: String},
  website: {type: String},
  history: {type: String},
  title: {type: String},
  description: {type: String},
  responsibility: {type: String},
  working_hour: {type: String},
  wage: {type: String},
  typeofIntern: {type: String},
  location: {type: [String]},
  city:String,
  type:String,
  catagory:{type: String, required: true}

});

module.exports = mongoose.model('Internships', InternshipsSchema);



