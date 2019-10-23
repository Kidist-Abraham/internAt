'use strict';
module.exports = function(app) {

  var auth = require('../controllers/authController');
  
  app.route('/user')
     .post(auth.createUser);

  app.route('/user/login')
     .post(auth.loginUser);


  app.route('/user/:userId')
    .get(auth.getUser)
   // .put(auth.update_user)
   // .delete(auth.delete_user);
};

