'use strict';
module.exports = function(app) {
  var company = require('../controllers/companiesController');
/**
 * @api {get} /companies  Get all companies
 * @apiName GetAllCompanies
 * @apiGroup Company
 * @apiVersion 0.0.1
 *
 * @apiSuccess {String} _id  The ID of the newly created Company.
 * @apiSuccess {String} name The name of the Company.
 * @apiSuccess {String} email The email of the Company.
 * @apiSuccess {String} city The city of the Company. 
 * @apiSuccess {String} catagory The catagory of the company's PLC
 * @apiSuccess {String} field The specific area of the company 
   @apiSuccess {String} description a brief description of the company

 * @apiSuccessExample {json} Success-Response:
 *[ {
        "_id": "5db44378dabe471c620daeb7",
        "name": "Qene",
        "email": "qene@gm",
        "city": "AA",
        "catagory": "Tech",
        "field": "Game ",
        "description": "A Gaming Company .....",
        "__v": 0
    },
    {
        "_id": "5db443d2dabe471c620daeb8",
        "name": "Tikur Ambesa",
        "email": "tikur@gm",
        "city": "AA",
        "catagory": "Health",
        "field": "General hospital",
        "description": "A .....",
        "__v": 0
    }
]
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

 *
 * @apiParamExample {json} Request-Example:
 * 	{
    "name": "Qene",
    "email": "qene@gm",
    "city": "AA",
    "catagory": "Tech",
    "field": "Gaming  ",
    "description": "A Gaming Company ....."
 }

 * @apiSuccess {String} _id  The ID of the newly created Company.
 * @apiSuccess {String} name The name of the Company.
 * @apiSuccess {String} email The email of the Company.
 * @apiSuccess {String} city The city of the Company. 
 * @apiSuccess {String} catagory The catagory of the company's PLC
 * @apiSuccess {String} field The specific area of the company 
 * @apiSuccess {String} description a brief description of the company

 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * 	{
    "_id": "5db44378dabe471c620daeb7",
    "name": "Qene",
    "email": "qene@gm",
    "city": "AA",
    "catagory": "Tech",
    "field": "Gaming  ",
    "description": "A Gaming Company ....."
    "__v": 0
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


 * @apiParam {String} companyId  The ID of the Company to be .
 
 * @apiSuccess {String} _id  The ID of the Company.
 * @apiSuccess {String} name The name of the Company.
 * @apiSuccess {String} email The email of the Company.
 * @apiSuccess {String} city The city of the Company. 
 * @apiSuccess {String} catagory The catagory of the company's PLC
 * @apiSuccess {String} field The specific area of the company 4
 * @apiSuccess {String} description a brief description of the company
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * 	{
    "_id": "5db44378dabe471c620daeb7",
    "name": "Qene",
    "email": "qene@gm",
    "city": "AA",
    "catagory": "Tech",
    "field": "Gaming  ",
    "__v": 0
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
 * @apiParam {String} description a brief description of the company

 * @apiParamExample {json} Request-Example:
 * 	{
    "name": "Qene",
    "email": "qene@gm",
    "city": "AA and Silicon Valley
",
    "catagory": "Tech",
    "field": "Gaming  ",
    "description": "A Gaming Company ....."
 }
 
 * @apiSuccess {String} _id  The ID of the Company.
   @apiSuccess {String} name The name of the Company.
 * @apiSuccess {String} email The email of the Company.
 * @apiSuccess {String} city The city of the Company. 
 * @apiSuccess {String} catagory The catagory of the company's PLC
 * @apiSuccess {String} field The specific area of the company 4
 * @apiSuccess {String} description a brief description of the company
 *
 * @apiSuccessExample {json} Success-Response (The updated company):
 * 	 HTTP/1.1 201 Created
 * 	{
    "_id": "5db44378dabe471c620daeb7",
    "name": "Qene",
    "email": "qene@gm",
    "city": "AA",
    "catagory": "Tech",
    "field": "Gaming  ",
    "__v": 0
 }
**/

/**
 * @api {delete} /companies/:companyId  Delete Company
 * @apiName DeleteCompany
 * @apiGroup Company
 * @apiVersion 0.0.1


 * @apiParam {String} companyId The ID of the Company to be deleted.

 * @apiSuccess {String} message A message confirming success of comapny deletion

 * @apiSuccessExample {json} Success-Response (The updated company):

 * {
    "message": "Company successfully deleted"
  }
**/


  app.route('/companies/:companyId')
    .get(company.get_company)
    .put(company.update_company)
    .delete(company.delete_company);
};
