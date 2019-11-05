'use strict';
module.exports = function(app) {
  var intern = require('../controllers/internsController');

  // intern Routes
/**
 * @api {get} /interns  Get all interns
 * @apiName GetAllInterns
 * @apiGroup Intern
 * @apiVersion 0.0.1
 *
 * @apiSuccess {Boolean} success  The success status of the request
 * @apiSuccess {Array} interns The list of all the interns.
 *

 * @apiSuccessExample {json} Success-Response:
 *{
    "success": true,
    "interns": [
        {
            "role": "Intern",
            "_id": "5db442eedabe471c620daeb6",
            "name": "Melat",
            "email": "M@mel",
            "Interest": ["Health","Agriculture"]
            "field": "Mining engineering",
            "discription": "I am a 3rd year..."
            "__v": 0
        },
        {
             "role": "Intern",
            "_id": "7d542e54r4f32e471c620aei9",
            "name": "Yocabed",
            "email": "yo@mel",
            "interests": ["Law","Economics"]
            "field": "Law",
            "discription": "I am GC class..."
            "__v": 0
        }, ]
}
 *
 */


/**
 * @api {post} /interns  Create Intern
 * @apiName CreateIntern
 * @apiGroup Intern
 * @apiVersion 0.0.1

 * @apiParam {String} name The name of the Intern.
 * @apiParam {String} email The email of the Intern.
 * @apiParam {Array} interests Interests of the Interen 
 * @apiParam {String} field The field of study of the intern
   @apiParam {String} description a brief description of the Intern
   @apiParam {String} role the role (which should be 'Intern')

 *
 * @apiParamExample {json} Request-Example:
 * 	{
            "role": "Intern",
            "name": "Yocabed",
            "email": "yo@mel",
            "interests": ["Law","Economics"]
            "field": "Law",
            "discription": "I am GC class..."
           
        }

   @apiSuccess {Boolean} success  The success status of the request
 * @apiSuccess {Object} intern The intern just created.

 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * {
    "success": true,
    "intern": {
            "_id": "5db44378dabe471c620daeb7",
            "role": "Intern",
            "name": "Yocabed",
            "email": "yo@mel",
            "interests": ["Law","Economics"]
            "field": "Law",
            "discription": "I am GC class...",
            "__v": 0
    }
}
**/d
  app.route('/interns')
    .get(intern.list_all_interns)
    .post(intern.create_intern);


/**
 * @api {get} /interns/:internId  Get Intern
 * @apiName GetIntern
 * @apiGroup Intern
 * @apiVersion 0.0.1


 * @apiParam {String} internId  The ID of the Intern.
 
   @apiSuccess {Boolean} success  The success status of the request
 * @apiSuccess {Object} intern The intern of the stated ID.
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * {
    "success": true,
    "intern": {
            "_id": "5db44378dabe471c620daeb7",
            "role": "Intern",
            "name": "Yocabed",
            "email": "yo@mel",
            "interests": ["Law","Economics"]
            "field": "Law",
            "discription": "I am GC class...",
            "__v": 0
    }
}
**/

/**
 * @api {put} /interns/:internId  Update Intern
 * @apiName UpdateIntern
 * @apiGroup Intern
 * @apiVersion 0.0.1


 * @apiParam {String} internId The ID of the Intern to be updated.
*  @apiParam {String} name The name of the Intern.
 * @apiParam {String} email The email of the Intern.
 * @apiParam {Array} interests Interests of the Interen 
 * @apiParam {String} field The field of study of the intern
   @apiParam {String} description a brief description of the Intern
   @apiParam {String} role the role (which should be 'Intern')

 * @apiParamExample {json} Request-Example:
 * 	{
            "role": "Intern",
            "name": "Yocabed",
            "email": "yo@mel",
            "interests": ["Law","Economics"]
            "field": "Law",
            "discription": "I am GC class..."
           
        }
 
@apiSuccess {Boolean} success  The success status of the request
 * @apiSuccess {Object} intern The intern just updated.

 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 *  {
    "success": true,
    "intern": {
            "_id": "5db44378dabe471c620daeb7",
            "role": "Intern",
            "name": "Yocabed",
            "email": "yo@mel",
            "interests": ["Law","Economics"]
            "field": "Law",
            "discription": "I am GC class...",
            "__v": 0
    }
}
**/

/**
 * @api {delete} /interns/:internId  Delete Intern
 * @apiName DeleteIntern
 * @apiGroup Intern
 * @apiVersion 0.0.1


 * @apiParam {String} internId The ID of the Intern to be deleted.

 * @apiSuccess {String} message A message confirming success of intern deletion
   @apiSuccess {Boolean} success  The success status of the request

 * @apiSuccessExample {json} Success-Response (The updated intern):

 * {"success": true,
    "message": "Intern successfully deleted"
  }
**/

  app.route('/interns/:internId')
    .get(intern.get_intern)
    .put(intern.update_intern)
    .delete(intern.delete_intern);
};
