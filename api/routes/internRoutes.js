'use strict';
module.exports = function(app) {
  var intern = require('../controllers/internsController');
  var auth = require('../controllers/authController');

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
 *"success": true,
    "interns": [
        {
            "interests": [],
            "skills": [],
            "role": "Intern",
            "_id": "5dc085b4b5c4c52c7ac69253",
            "first_name": "Kidist",
            "email": "kidisstabraham@gmail.com",
            "__v": 0
        },
        {
            "interests": [],
            "skills": [],
            "role": "Intern",
            "_id": "5dc087c3d0b4a62b835bf982",
            "first_name": "Kalkidan",
            "email": "kalkidan@gmail.com",
            "__v": 0
        } ]
}
 *
 */

/**
 * @api {post} /interns  Create Intern
 * @apiName CreateIntern
 * @apiGroup Intern
 * @apiVersion 0.0.1

 * @apiParam {String} first_name The first name of the Intern.
   @apiParam {String} last_name The last name of the Intern.
   @apiParam {String} department The departmnet of the Intern.
 * @apiParam {String} email The email of the Intern.
 * @apiParam {Array} interests Interests of the Interen 
 * @apiParam {String} bio The bio of the intern
   @apiParam {String} description a brief description of the Intern
   @apiParam {String} role the role (which should be 'Intern')
   @apiParam {String} level the education level of the intern
   @apiParam {Array} skills the skills the intern has.

 *
 * @apiParamExample {json} Request-Example:
 * 	{
            "role": "Intern",
            "first_name": "Yocabed",
            "email": "yo@mel",
            "interests": ["Law","Economics"]
            "department": "Law",
            "description": "I am GC class..."
           
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
            "first_name": "Yocabed",
            "email": "yo@mel",
            "interests": ["Law","Economics"]
            "department": "Law",
            "description": "I am GC class...",
            "__v": 0
    }
}
**/
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

/**
 * @api {post} /interns/approve  Approve Intern
 * @apiName ApproveIntern
 * @apiGroup Intern
 * @apiVersion 0.0.1


 * @apiParam {String} email The email of the intern

 * 
   @apiSuccess {Boolean} success  The success status of the request

 * */

 

app.route('/interns/approve')

    .post(auth.approve_intern)
};
