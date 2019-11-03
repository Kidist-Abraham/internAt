'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TobeApprovedSchema = new Schema({
  name:  String,
  username:{type: String, required: true, unique: true},
  LC:String,
  role: {type: String, required: true,  default: "Company"},
  password: String
  
});

module.exports = mongoose.model('TobeApproved', TobeApprovedSchema);



