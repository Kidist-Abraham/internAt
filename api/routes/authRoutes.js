'use strict';
module.exports = function(app) {

  var auth = require('../controllers/authController');
  /**
 * @api {post} /user/  Create User
 * @apiName CreateUser
 * @apiGroup Auth
 * @apiVersion 0.0.1
 *
   @apiParam {String} name The name of the User.
 * @apiParam {String} email The email of the User.
 * @apiParam {String} password The password of the User.
   @apiParam {String} role The role of the User. 
   @apiParam {String} LC The license of the User. (For companies) 
 *
 * @apiParamExample {json} Request-Example:
 * 	 {
                "name": "John"   
 * 		"email": "john.doe@example.com",
 * 		"password": "plain-text-password",
                "role": "Company"
                "LC":"MIT"
 * 	 }
 *
 * @apiSuccess {String} _id  The ID of the newly created User.
   @apiSuccess {String} name The name of the User.
 * @apiSuccess {String} email The email of the User.
 * @apiSuccess {String} password The hashed password of the User.
 * @apiSuccess {String} role The role of the User. If not provided, it will set to intern by default. 
 * @apiSuccess {Date} date_created The date on which the User entry was created.
 * @apiSuccess {Date} date_modified The date on which the User entry was last updated.
   @apiSuccess {String} LC The license of the User. (For companies)
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * 	 {        
                
 * 		_id: '58a1ea8b36dfb71d975384af',
               "name": "John" , 
 *              "role": "Company",
 * 		email: "john.doe@example.com",
 *             	password: "$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy",
 * 		date_created: 2017-02-13T17:19:08.404Z,
 * 		date_modified: 2017-02-13T17:19:08.404Z,
                "LC":"MIT"
 * 	 }
 *
 */
  app.route('/user')
     .post(auth.createUser);

/**
 * @api {post} /user/login  Login User
 * @apiName LoginUser
 * @apiGroup Auth
 * @apiVersion 0.0.1
 *
 * @apiParam {String} email The email of the User.
 * @apiParam {String} password The password of the User.
 *
 * @apiParamExample {json} Request-Example:
 * 	 {
 * 		"email": "john.doe@example.com",
 * 		"password": "plain-text-password",
 * 	 }
 *
 * @apiSuccess {String} message  Message confirming success of Authentication.
 * @apiSuccess {String} token The JWT token for the logged in user.
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * 	 {
 * 		 success: true,
 *  	 token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJ1c2VySWQiOiI1YmQ2ZjRjZTFlMWZmOTUwNzg2Y2Y4MmEiLCJpYXQiOjE1NDA4MTc1MzcsImV4cCI6MTU0MDgyMTEzN30"
 * 	 }
 *
 */

  app.route('/user/login')
     .post(auth.loginUser);

/**
 * @api {get} /user/:userId  Get User
 * @apiName GetUser
 * @apiGroup Auth
 * @apiVersion 0.0.1
 *
 * @apiParam {String} Id The email of the User.
 *
 * @apiSuccess {String} _id  The ID of the newly created User.
 * @apiSuccess {String} email The email of the User.
 * @apiSuccess {String} password The hashed password of the User.
 * @apiSuccess {String} role The role of the User. 
 * @apiSuccess {Date} date_created The date on which the User entry was created.
 * @apiSuccess {Date} date_modified The date on which the User entry was last updated.
 *
 * @apiSuccessExample {json} Success-Response:
 * 	 HTTP/1.1 201 Created
 * 	{
 *   "role": "intern",
 *   "date_created": "2019-10-23T17:54:34.858Z",
 *   "date_modified": "2019-10-23T17:54:34.858Z",
 *   "_id": "5db093dabbe68636db4af54c",
 *   "email": "cb@dd",
 *   "password": "$2b$10$s4yvt4V0h0M8NbBe5UJjsOYMUFPK1NK3GmC4m/81FwA.6z2aZGX5u",
 *   "__v": 0
 *   }
 *
 */
  app.route('/user/:userId')
    .get(auth.getUser)
   // .put(auth.update_user)
   // .delete(auth.delete_user);
};

