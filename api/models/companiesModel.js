'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CompanySchema = new Schema({
  name:  String,
  email:String,
  city:String,
  catagory:String,
  field:String,
  discription:String
  
});

module.exports = mongoose.model('Company', CompanySchema);
