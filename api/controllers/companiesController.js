'use strict';


var mongoose = require('mongoose'),
Company = mongoose.model('Company');

exports.list_all_companies = function(req, res) {
  Company.find({}, function(err, company) {
    if (err)
      res.send(err);
    res.json(company);
  });
};




exports.create_company = function(req, res) {
  var new_company = new Company(req.body);
  console.log(new_company.description)
  new_company.save(function(err, company) {
    if (err)
      res.send(err);
    res.json(company);
  });
};


exports.get_company = function(req, res) {
  Company.findById(req.params.companyId, function(err, company) {
    if (err)
      res.send(err);
    res.json(company);
  });
};


exports.update_company = function(req, res) {
  Company.findOneAndUpdate({_id: req.params.companyId}, req.body, {new: true}, function(err, company) {
    if (err)
      res.send(err);
    res.json(company);
  });
};


exports.delete_company = function(req, res) {


  Company.remove({
    _id: req.params.companyId
  }, function(err, company) {
    if (err)
      res.send(err);
    res.json({ message: 'Company successfully deleted' });
  });
};

