'use strict';
module.exports = function(app) {
  var company = require('../controllers/companiesController');

  app.route('/companies')
    .get(company.list_all_companies)
    .post(company.create_company);


  app.route('/companies/:companyId')
    .get(company.get_company)
    .put(company.update_company)
    .delete(company.delete_company);
};
