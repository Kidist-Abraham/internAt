'use strict';
module.exports = function(app) {
  var approve = require('../controllers/approvalController');

  // approve Routes
  app.route('/tobeApproved')
    .get(approve.list_all_tobeApproved)
    .post(approve.create_tobeApproved);


  app.route('/tobeApproved/:tobeApprovedId')
    .get(approve.get_tobeApproved)
    .put(approve.update_tobeApproved)
    .delete(approve.delete_tobeApproved);
};
