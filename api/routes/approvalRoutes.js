'use strict';
module.exports = function(app) {
  var approve = require('../controllers/approvalController');

  // approve Routes
/**
 * @api {get} /tobeApproved  Get all tobeApproved 
 * @apiName GetAllTobeApproved
 * @apiGroup TobeApproved
 * @apiVersion 0.0.1
 * 
   @apiDescription This will get the tobeapproved by id
 * @apiSuccess {Boolean} success  The success status of the request
 * @apiSuccess {Array} tobeApproved The list of all the tobeApproved.
 *

 * @apiSuccessExample {json} Success-Response:
 *{
    "success": true,
    "tobeApproved": [
        {
            "role": "Intern",
            "_id": "5dc1dc112d9e110024fef00d",
            "username": "kdist.abrham@iohk.io",
            "name": "kidist",
            "password": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6InBhc3N3b3JkIn0.dzybCytMSABOXW-04YizdcKVJbQ21OSkZ3k9LjvyRpk",
            "__v": 0
        },
        {
            "role": "Company",
            "_id": "5db44378dabe471c620daeb7",
            "name": "Qene",
            "username": "qene@gm",
            "password": "b3JkIn0dzybCytMSAB21OSkZ3.k9LjvyRpkey29yZCI6InBhc3N3b3JkIn0.ytMSABMSABOXW-04YizdcKVJbQnBhc3N3",
            "LC": "134",
            "__v": 0
        }
    ]
}
       
 *
 */


/**
 * @api {post} /tobeApproved  Create TobeApproved
 * @apiName CreateTobeApproved
 * @apiGroup TobeApproved
 * @apiVersion 0.0.1
   @apiDescription This will create a tobeApproved user.  
 * @apiParam {String} name The name of the tobeApproved/Company.
 * @apiParam {String} username The email of the tobeApproved/Company.
   @apiParam {String} LC The license of the tobeApproved/Company
   @apiParam {String} role the role (which should be 'Company')
   @apiParam {String} password the password which will be used to login

 *
 * @apiParamExample {json} Request-Example:
 * 	{
    "name": "Qene",
    "username": "qene@gm",
    "role": "Company",
    "LC": "1234"
    "password": "password"
 }

   @apiSuccess {Boolean} success  The success status of the request
 * 

 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * {
    "success": true,
    }
   **/
  app.route('/tobeApproved')
    .get(approve.list_all_tobeApproved)
    .post(approve.create_tobeApproved);

/**
 * @api {get} /tobeApproved/:tobeApprovedId  Get TobeApproved
 * @apiName GetTobeApproved
 * @apiGroup TobeApproved
 * @apiVersion 0.0.1

   @apiDescription This will get the tobeApproved by id. 
 * @apiParam {String} tobeApprovedId  The ID of the tobeApproved .
 
   @apiSuccess {Boolean} success  The success status of the request
 * @apiSuccess {Object} tobeApproved The tobeApproved of the stated ID.
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 *  {
    "success": true,
    "tobeApproved":  {
            "role": "Company",
            "_id": "5db44378dabe471c620daeb7",
            "name": "Qene",
            "username": "qene@gm",
            "password": "b3JkIn0dzybCytMSAB21OSkZ3.k9LjvyRpkey29yZCI6InBhc3N3b3JkIn0.ytMSABMSABOXW-04YizdcKVJbQnBhc3N3",
            "LC": "134",
            "__v": 0
        }
   }

**/

/**
 * @api {put} /tobeApproved/:tobeApprovedId  Update TobeApproved
 * @apiName UpdateTobeApproved
 * @apiGroup TobeApproved
 * @apiVersion 0.0.1

 @apiDescription This is to update the information in the tobeApproved model
 * @apiParam {String} tobeApprovedId The ID of the tobeApproved to be updated.
 * @apiParam {String} name The name of the tobeApproved/Company.
 * @apiParam {String} email The email of the tobeApproved/Company.
   @apiParam {String} LC The license of the tobeApproved/Company
   @apiParam {String} role the role (which should be 'Company')

 * @apiParamExample {json} Request-Example:
 * 	{
    "name": "Updated Qene",
    "email": "qene@gm",
    "role": "Company",
    "LC": "PL12",
    "password":"newpassword"
 }
 
@apiSuccess {Boolean} success  The success status of the request
 * @apiSuccess {Object} tobeApproved The tobeApproved just updated.

 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * {
    "success": true,
    "tobeApproved":{
       "_id": "5db44378dabe471c620daeb7",
       "name": "Updated Qene",
       "email": "qene@gm",
       "role": "Company",
       "LC": "PL12",
       "password":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6InBhc3N3b3JkIn0.dzybCytMSABOXW-04YizdcKVJbQ21OSkZ3k9LjvyRpk"
       "__v": 0 
              }
 }
**/

/**
 * @api {delete} /tobeApproved/:tobeApprovedId  Delete TobeApproved
 * @apiName DeleteTobeApproved
 * @apiGroup TobeApproved
 * @apiVersion 0.0.1

  @apiDescription This is to delete the tobeApproved user
 * @apiParam {String} tobeApprovedId The ID of the TobeApproved to be deleted.

 * @apiSuccess {String} message A message confirming success of tobeApproved deletion
   @apiSuccess {Boolean} success  The success status of the request

 * @apiSuccessExample {json} Success-Response (The updated tobeApproved):

 * {"success": true,
    "message": "TobeApproved successfully deleted"
  }
**/


  app.route('/tobeApproved/:tobeApprovedId')
    .get(approve.get_tobeApproved)
    .put(approve.update_tobeApproved)
    .delete(approve.delete_tobeApproved);
};

