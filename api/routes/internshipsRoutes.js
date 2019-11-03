'use strict';
module.exports = function(app) {
  var internships = require('../controllers/internshipsController');

 app.route('/internships')


    .get(internships.list_all_internships)
    .post(internships.create_internships)

app.route('/internships:internshipsId')

    .put(internships.update_internships)
    .delete(internships.delete_internships)

}
