'use strict';
module.exports = function(app) {
  var admin = require('../controllers/adminController');

 app.route('/admin/:adminId')
    .get(admin.get_admin)
    .put(admin.update_admin)

 

}
