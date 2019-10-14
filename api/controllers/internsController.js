'use strict';


var mongoose = require('mongoose'),
Intern = mongoose.model('Intern');

exports.list_all_interns = function(req, res) {
  Intern.find({}, function(err, intern) {
    if (err)
      res.send(err);
    res.json(intern);
  });
};




exports.create_intern = function(req, res) {
  var new_intern = new Intern(req.body);
  new_intern.save(function(err, intern) {
    if (err)
      res.send(err);
    res.json(intern);
  });
};


exports.get_intern = function(req, res) {
  Intern.findById(req.params.internId, function(err, intern) {
    if (err)
      res.send(err);
    res.json(intern);
  });
};


exports.update_intern = function(req, res) {
  Intern.findOneAndUpdate({_id: req.params.internId}, req.body, {new: true}, function(err, intern) {
    if (err)
      res.send(err);
    res.json(intern);
  });
};


exports.delete_intern = function(req, res) {


  Intern.remove({
    _id: req.params.internId
  }, function(err, intern) {
    if (err)
      res.send(err);
    res.json({ message: 'Intern successfully deleted' });
  });
};

