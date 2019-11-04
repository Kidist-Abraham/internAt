'use strict';
module.exports = function(app) {
  var internships = require('../controllers/internshipsController');

 app.route('/internships')


    .get(internships.list_all_internships)
    .post(internships.create_internships)

app.route('/internships/:internshipsId')

    .get(internships.get_internships)
    .put(internships.update_internships)
    .delete(internships.delete_internships)

app.route('/internships/apply')

    .post(internships.apply_internships)

app.route('/internships/myinterest')

    .post(internships.myinterest)




}
