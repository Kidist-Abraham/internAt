const mongoose = require('mongoose');
const passportLocalMongoose =require("passport-local-mongoose")


const UserSchema = mongoose.Schema({
  name : String,
  username: String,
  role: String,
  date_created: {type: Date, required: true,  default: new Date()},
  date_modified: {type: Date, required: true, default: new Date()},
  LC:{type:String,default:"none"}
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
