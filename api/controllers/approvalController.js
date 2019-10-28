'use strict';


var mongoose = require('mongoose'),
TobeApproved = mongoose.model('TobeApproved');

exports.list_all_tobeApproved = function(req, res) {
  TobeApproved.find({}, function(err, tobeApproved) {
    if (err){
   return  res.send({success:false,
                    err:err}); }
   return  res.json({success:true,
            tobeApproved:tobeApproved});
  });
};




exports.create_tobeApproved = function(req, res) {
  var new_tobeApproved = new TobeApproved(req.body);
  new_tobeApproved.save(function(err, tobeApproved) {
    if (err){
   return  res.send({success:false,
                    err:err}); }
   return  res.json({success:true,
            tobeApproved:tobeApproved});
  });
};


exports.get_tobeApproved = function(req, res) {
  TobeApproved.findById(req.params.tobeApprovedId, function(err, tobeApproved) {
    if (err){
   return  res.send({success:false,
                    err:err}); }
   return  res.json({success:true,
            tobeApproved:tobeApproved});
  });
};


exports.update_tobeApproved = function(req, res) {
  TobeApproved.findOneAndUpdate({_id: req.params.tobeApprovedId}, req.body, {new: true}, function(err, tobeApproved) {
    if (err){
   return  res.send({success:false,
                    err:err}); }
   return  res.json({success:true,
            tobeApproved:tobeApproved});
  });
};


exports.delete_tobeApproved = function(req, res) {


 TobeApproved.remove({
    _id: req.params.tobeApprovedId
  }, function(err, tobeApproved) {
    if (err){
   return  res.send({success:false,
                    err:err}); }
    return res.json({ success:true,
               message: 'TobeApproved successfully deleted' });
  });
};

