'use strict';
module.exports = function(app) {
  var intern = require('../controllers/internsController');

  // intern Routes
  app.route('/interns')
    .get(intern.list_all_interns)
    .post(intern.create_intern);


  app.route('/interns/:internId')
    .get(intern.get_intern)
    .put(intern.update_intern)
    .delete(intern.delete_intern);
};
