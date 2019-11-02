'use strict';


var mongoose = require('mongoose'),
Internships = mongoose.model('Internships');

exports.list_all_internships = function(req, res) {
  Internships.find({}, function(err, internships) {
    if (err) {
   return  res.json({success:false,
                    err:err}); }
   return  res.json({success:true,
            internships:internships});
  });
};




exports.create_internships = function(req, res) {
  var new_internships = new Internships(req.body);
  new_internships.save(function(err, internships) {
    if (err){
        return  res.json({success:false,
                    err:err}); }
      Company.findOne(({email:internships.email}), function(err, company) {
    if (err){
       return  res.json({success:false,
                    err:err}); }
       company.myInternships == company.myInternships.push(internships)
  });
      
   return  res.json({success:true,
            internships:internships});
  });
};


exports.get_internships = function(req, res) {
console.log(req.params.internshipsId)
  Company.findById(req.params.internshipsId, function(err, internships) {
    if (err){
       return  res.json({success:false,
                    err:err}); }
   return  res.json({success:true,
            internships:internships});
  });
};


exports.update_internships = function(req, res) {
  Company.findOneAndUpdate({_id: req.params.internshipsId}, req.body, {new: true}, function(err, internships) {
    if (err){
      return  res.json({success:false,
                    err:err}); }
   return  res.json({success:true,
            internships:internships});
  });
};


exports.delete_internships = function(req, res) {


  Internships.remove({
    _id: req.params.internshipsId
  }, function(err, internships) {
    if (err){
       console.log(err)
       return  res.json({success:false,
                    err:err}); }
    res.json({success:true,
              message: 'Internships successfully deleted' });
  });
};

