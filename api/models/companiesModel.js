'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CompanySchema = new Schema({
  name:  String,
  email:{type: String, required: true, unique: true},
  type:String,
  city:String,
  catagory:[String],
  field:String,
  description:String,
  LC:String,
  role: {type: String, required: true,  default: "Company"},
  myInternships:Array,
  appliedInterns:Array
});

module.exports = mongoose.model('Company', CompanySchema);


