const mongoose = require('mongoose');

// Define User attributes
const UserSchema = mongoose.Schema({
  name : {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password:  {type: String, required: true},
  role:  {type: String, required: true},
  date_created: {type: Date, required: true,  default: new Date()},
  date_modified: {type: Date, required: true, default: new Date()},
  LC:{type:String,default:"none"}
});

// Export User model
module.exports = mongoose.model('User', UserSchema);
