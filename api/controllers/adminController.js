'use strict';


var mongoose = require('mongoose'),
Admin = mongoose.model('Admin');



exports.get_admin = function(req, res) {

  Admin.findById(req.params.adminId, function(err, admin) {
    if (err){
       return  res.json({success:false,
                    err:err}); }
   return  res.json({success:true,
            admin:admin});
  });
};


exports.update_admin = function(req, res) {
  Admin.findOneAndUpdate({_id: req.params.adminId}, req.body, function(err, admin) {
    if (err){
      return  res.json({success:false,
                    err:err}); }
   return  res.json({success:true,
            admin:admin});
  });
};




