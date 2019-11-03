'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AdminSchema = new Schema({
  first_name:  String,
  last_name:  String,
  email:{type: String, required: true, unique: true},
  Bio:String,
  Background:String,
  role: {type: String, required: true,  default: "Admin"},
  
});

module.exports = mongoose.model('Admin', AdminSchema);




