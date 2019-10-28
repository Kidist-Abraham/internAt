'use strict';


var mongoose = require('mongoose'),
Company = mongoose.model('Company');

exports.list_all_companies = function(req, res) {
  Company.find({}, function(err, company) {
    if (err) {
   return  res.send({success:false,
                    err:err}); }
   return  res.json({success:true,
            companies:company});
  });
};




exports.create_company = function(req, res) {
  var new_company = new Company(req.body);
  console.log(new_company.description)
  new_company.save(function(err, company) {
    if (err){
        return  res.send({success:false,
                    err:err}); }
   return  res.json({success:true,
            company:company});
  });
};


exports.get_company = function(req, res) {
console.log(req.params.companyId)
  Company.findById(req.params.companyId, function(err, company) {
    if (err){
       return  res.send({success:false,
                    err:err}); }
   return  res.json({success:true,
            company:company});
  });
};


exports.update_company = function(req, res) {
  Company.findOneAndUpdate({_id: req.params.companyId}, req.body, {new: true}, function(err, company) {
    if (err){
      return  res.send({success:false,
                    err:err}); }
   return  res.json({success:true,
            company:company});
  });
};


exports.delete_company = function(req, res) {


  Company.remove({
    _id: req.params.companyId
  }, function(err, company) {
    if (err){
       console.log(err)
       return  res.send({success:false,
                    err:err}); }
    res.json({success:true,
              message: 'Company successfully deleted' });
  });
};

