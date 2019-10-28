'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TobeApprovedSchema = new Schema({
  name:  String,
  email:{type: String, required: true, unique: true},
  LC:String,
  role: {type: String, required: true,  default: "Company"}
});

module.exports = mongoose.model('TobeApproved', TobeApprovedSchema);



