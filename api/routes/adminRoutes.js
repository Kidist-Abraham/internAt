'use strict';
module.exports = function(app) {
  var admin = require('../controllers/adminController');

 

/*
* @api {get} /admin/:adminId  Get Admin
* @apiName GetAdmin
* @apiGroup Admin
* @apiVersion 0.0.1

  @apiDescription This will get the admin profile
* @apiParam {String} adminId  The ID of the Admin.

  @apiSuccess {Boolean} success  The success status of the request
* @apiSuccess {Object} admin The admin of the stated ID.
*
* @apiSuccessExample {json} Success-Response:
* 	
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

* @api {put} /admin/:adminId  Update Admin
* @apiName UpdateAdmin
* @apiGroup Admin
* @apiVersion 0.0.1

  @apiDescription This is to update the admin profile
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
 @apiSuccess {Object} admin The admin just updated.
@apiSuccessExample {json} Success-Response:
 {
    "success": true,
    "admin": {
        "role": "Admin",
        "_id": "5dc04e9a8a006703363502e3",
        "first_name": "Hena",
        "email": "intern.at.tech@gmail.com",
        "__v": 0
    }
}

*

**/
 app.route('/admin/:adminId')
    .get(admin.get_admin)
    .put(admin.update_admin)

 

}
