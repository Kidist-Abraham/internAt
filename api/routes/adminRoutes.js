'use strict';
module.exports = function(app) {
  var admin = require('../controllers/adminController');

  // admin Routes
  /**
 * @api {get} /admin/:adminId  Get all admin
 * @api {put} /admin/:adminId Update admin
 * @apiName UpdateAdmin
 * @apiGroup Admin
 * @apiVersion 0.0.1
 *
 * @apiSuccess {Boolean} success  The success status of the request
 * @apiSuccess {Array} admin The list of all the admin
 *

 * @apiSuccessExample {json} Success-Response:
*/

/*
* @api {get} /admin/:adminId  Get Admin
* @apiName Getadmin
* @apiGroup Admin
* @apiVersion 0.0.1


* @apiParam {String} adminId  The ID of the Admin.

  @apiSuccess {Boolean} success  The success status of the request
* @apiSuccess {Object} admin The admin of the stated ID.
*
* @apiSuccessExample {json} Success-Response:
* 	 HTTP/1.1 201 Created
* {
    "success": true,
    "admin": {
        "role": "Admin",
        "_id": "5dc04e9a8a006703363502e3",
        "first_name": "Hena",
        "email": "intern.at.tech@gmail.com",
        "__v": 0
    }
}
**/

/**
* @api {put} /admin/:adminId  Update Admin
* @apiName Updateadmin
* @apiGroup Admin
* @apiVersion 0.0.1


* @apiParam {String} adminId The ID of the admin to be updated.
* @apiParam {String}  first_name The name of the Admin.
* @apiParam {String} last_name The name of the Admin.
* @apiParam {Array} bio The bio of the Admin.
* @apiParam {String} background The background of the Admin.
 

* @apiParamExample {json} Request-Example:
* 	{
           "first_name": "fetiya",
           "last_name": "dino",
           "bio": "greate job",
           "background": "Economics",
          
          
       }

@apiSuccess {Boolean} success  The success status of the request
* @apiSuccess {Object} admin The admin just updated.

*

**/
 app.route('/admin/:adminId')
    .get(admin.get_admin)
    .put(admin.update_admin)

 

}
