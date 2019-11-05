'use strict';
module.exports = function(app) {
  var company = require('../controllers/companiesController');
/**
 * @api {get} /companies  Get all companies
 * @apiName GetAllCompanies
 * @apiGroup Company
 * @apiVersion 0.0.1
 *
 * @apiSuccess {Boolean} success  The success status of the request
 * @apiSuccess {Array} companies The list of all the companies.
 *

 * @apiSuccessExample {json} Success-Response:
 *{
    "success": true,
    "companies": [
        {
            "role": "Company",
            "_id": "5db442eedabe471c620daeb6",
            "name": "kine",
            "email": "@ki",
            "city": "AA",
            "catagory": "ab",
            "field": "abc",
            "LC": "1234"
            "__v": 0
        },
        {
            "role": "Company",
            "_id": "5db44378dabe471c620daeb7",
            "name": "Qene",
            "email": "qene@gm",
            "city": "AA",
            "catagory": "Tech",
            "field": "Game ",
            "LC": "1234"
            "__v": 0
        }, ]
}
 *
 */


/**
 * @api {post} /companies  Create Company
 * @apiName CreateCompany
 * @apiGroup Company
 * @apiVersion 0.0.1

 * @apiParam {String} name The name of the Company.
 * @apiParam {String} email The email of the Company.
 * @apiParam {String} city The city of the Company. 
 * @apiParam {String} catagory The catagory of the company's PLC
 * @apiParam {String} field The specific area of the company 
   @apiParam {String} description a brief description of the company
   @apiParam {String} LC The license of the company
   @apiParam {String} role the role (which should be 'Company')

 *
 * @apiParamExample {json} Request-Example:
 * 	{
    "name": "Qene",
    "email": "qene@gm",
    "city": "AA",
    "catagory": "Tech",
    "field": "Gaming  ",
    "description": "A Gaming Company ....."
    "role": "Company",
    "LC": "1234"
 }

   @apiSuccess {Boolean} success  The success status of the request
 * @apiSuccess {Object} company The company just created.

 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * {
    "success": true,
    "company": {
        "_id": "5db44378dabe471c620daeb7",
    "name": "Qene",
    "email": "qene@gm",
    "city": "AA",
    "catagory": "Tech",
    "field": "Gaming  ",
    "description": "A Gaming Company .....",
    "role": "Company",
    "LC": "1234",
    "__v": 0
    }
}
**/
  app.route('/companies')
    .get(company.list_all_companies)
    .post(company.create_company);



/**
 * @api {get} /companies/:companyId  Get Company
 * @apiName GetCompany
 * @apiGroup Company
 * @apiVersion 0.0.1


 * @apiParam {String} companyId  The ID of the Company .
 
  @apiSuccess {Boolean} success  The success status of the request
 * @apiSuccess {Object} company The company of the stated ID.
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 *  {
    "success": true,
    "company": {
    "_id": "5db44378dabe471c620daeb7",
    "name": "Qene",
    "email": "qene@gm",
    "city": "AA",
    "catagory": "Tech",
    "field": "Gaming  ",
    "description": "A Gaming Company .....",
    "role": "Company",
    "LC": "1234",
    "__v": 0
    }
}
**/

/**
 * @api {put} /companies/:companyId  Update Company
 * @apiName UpdateCompany
 * @apiGroup Company
 * @apiVersion 0.0.1


 * @apiParam {String} companyId The ID of the Company to be updated.
 * @apiParam {String} name The name of the Company.
 * @apiParam {String} email The email of the Company.
 * @apiParam {String} city The city of the Company. 
 * @apiParam {String} catagory The catagory of the company's PLC
 * @apiParam {String} field The specific area of the company 
   @apiParam {String} description a brief description of the company
   @apiParam {String} LC The license of the company
   @apiParam {String} role the role (which should be 'Company')

 * @apiParamExample {json} Request-Example:
 * 	{
    "name": "Updated Qene",
    "email": "qene@gm",
    "city": "AA and Silicon Valley",
    "catagory": "Tech",
    "field": "Gaming  ",
    "description": "A Gaming Company .....",
    "role": "Company",
    "LC": "PL12",
 }
 
@apiSuccess {Boolean} success  The success status of the request
 * @apiSuccess {Object} company The company just updated.

 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * {
    "success": true,
    "company":{
       "_id": "5db44378dabe471c620daeb7",
       "name": "Updated Qene",
       "email": "qene@gm",
       "city": "AA",
       "catagory": "Tech",
       "field": "Gaming  ",
       "description": "A Gaming Company .....",
       "role": "Company",
       "LC": "PL12",
       "__v": 0 
              }
 }
**/

/**
 * @api {delete} /companies/:companyId  Delete Company
 * @apiName DeleteCompany
 * @apiGroup Company
 * @apiVersion 0.0.1


 * @apiParam {String} companyId The ID of the Company to be deleted.

 * @apiSuccess {String} message A message confirming success of comapny deletion
   @apiSuccess {Boolean} success  The success status of the request

 * @apiSuccessExample {json} Success-Response (The updated company):

 * {"success": true,
    "message": "Company successfully deleted"
  }
**/


  app.route('/companies/:companyId')
    .get(company.get_company)
    .put(company.update_company)
    .delete(company.delete_company);


// email,internId,
app.route('/companies/apply')

    .post(company.apply_internships)
};
