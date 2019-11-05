'use strict';


var passport=require("passport")

  var auth = require('../controllers/authController');


module.exports = function(app) {

  /**
 * @api {post} /user/  Create User
 * @apiName CreateUser
 * @apiGroup Auth
 * @apiVersion 0.0.1
 * 
   @apiDescription This will create a user, delete the user from the tobeApproved model and add the user to Intern or Company model depending on the role of the user. 
   @apiParam {String} name The name of the User.
 * @apiParam {String} username The email of the User.
 * @apiParam {String} password The password of the User.
   @apiParam {String} role The role of the User. 
   @apiParam {String} LC The license of the User. (For companies) 
 *
 * @apiParamExample {json} Request-Example:
 * 	 {
                "name": "Kidist"   
 * 		"username": "kidist.abraham@intern.io",
 * 		"password": "password",
                "role": "Company"
                "LC":"dassd"
 * 	 }
 *

 * @apiSuccess {Boolean} success The success status of the request
 * @apiSuccessExample {json} Success-Response:

 * 	{
    "success": true
}
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
 * @apiParam {String} username The email of the User.
 * @apiParam {String} password The password of the User.
 *
 * @apiParamExample {json} Request-Example:
 * 	 {
 * 		"username": "kidist.abraham@intern.io",
 * 		"password": "password",
 * 	 }
 *
 * 
 * 
   @apiSuccess {Boolean} success The success status of the request
   @apiSuccess {Object} user The user who just logged in
   @apiSuccess {String} token The generated token
   @apiSuccess {String} message A success message 'Auth Successfu'
 *
 * @apiSuccessExample {json} Success-Response:
 * 

{
    "success": true,
    "message": 'Auth Successfu',
     "token": token,
     "user": {
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
 *
 */

  app.route('/user/login')
        .post(passport.authenticate("local"),auth.loginUser);



/**
 * @api {post} /user/logout Logout User
 * @apiName LogoutUser
 * @apiGroup Auth
 * @apiVersion 0.0.1
 *
 * 
 *@apiSuccess {Boolean} success The success status of the request
   
 *
 * @apiSuccessExample {json} Success-Response:
 *
    {
    "success": true
         }
 *
 */
 app.route('/user/logout')
     .post(auth.logout);

/**
 * @api {post} /user/forgotPassword  Login User
 * @apiName ForgotPassword
 * @apiGroup Auth
 * @apiVersion 0.0.1

 * @apiDescription On a valid request, a recovery link will be send to the user's email.  
 * @apiParam {String} email The email of the User.
 * 
 *
 * @apiParamExample {json} Request-Example:
 * 	 {
 * 		"email": "kidist.abraham@intern.io",
 * 		
 * 	 }
 *
 * 
 * 
   @apiSuccess {Boolean} success The success status of the request
   @apiSuccess {String} message A success message "password recovery link has been send to user"
 *
 * @apiSuccessExample {json} Success-Response:
 * 
              { 
                  success:true,
                  message:"password recovery link has been send to user"}
                              }
 *
 */

/**
 * @api {post} /user/forgotPassword  analize a request to forget password.
 * @apiName ForgotPassword
 * @apiGroup Auth
 * @apiVersion 0.0.1

 * @apiDescription On a valid request, a recovery link will be send to the user's email.  
 * @apiParam {String} email The email of the User.
 * 
 *
 * @apiParamExample {json} Request-Example:
 * 	 {
 * 		"email": "kidist.abraham@intern.io",
 * 		
 * 	 }
 *
 * 
 * 
   @apiSuccess {Boolean} success The success status of the request
   @apiSuccess {String} message A success message "password recovery link has been send to user"
 *
 * @apiSuccessExample {json} Success-Response:
 * 
              { 
                  success:true,
                  message:"password recovery link has been send to user"}
                              }
 *
 */



/**
 * @api {post} /user/resetpassword/:id/:token  Authorize password recovery
 * @apiName AuthorizeResetPassword
 * @apiGroup Auth
 * @apiVersion 0.0.1

 * @apiDescription t=This is request can only be accessed in the users email. The password recovery link is going to go to this route and let the user enter a new password. 
 *
   
  @apiParam {String} password The new password .
  @apiParam {String} id The id of the user. this is hidden. The user do not need to enter this.
  @apiParam {String} token The token generated to recover the password. this is hidden. The user do not need to enter this.
 * 
 *
 *  
   @apiSuccess {Boolean} success The success status of the request
   @apiSuccess {String} message A success message "Your password has been changed successfuly"
  
 *
 * @apiSuccessExample {json} Success-Response:
 * 
             {
             "sucess": true,
            
             "message":"Your password has been changed successfuly"
             }
 *
 */




app.route('/user')
    .get(auth.list_all_users);

app.route('/user/:userId')
    .get(auth.get_user);

app.route('/user/forgotPassword')
    .post(auth.forgotPassword);


app.route('/user/resetpassword/:id/:token')
    .get(auth.resetPasswordGet);

app.route('/user/resetpassword')
    .post(auth.resetPasswordPost);

/**
 * @api {post} /user/isLoggedin  Check Session
 * @apiName CheckSession
 * @apiGroup Auth
 * @apiVersion 0.0.1

 * @apiDescription This will return true if a user is logged in
 *
   
  @apiParam {String} password The new password .
  @apiParam {String} id The id of the user. this is hidden. The user do not need to enter this.
  @apiParam {String} token The token generated to recover the password. this is hidden. The user do not need to enter this.
 * 
 *
 *  
   @apiSuccess {Boolean} success The success status of the request
   @apiSuccess {String} message A success message "Your password has been changed successfuly"
  
 *
 * @apiSuccessExample {json} Success-Response:
 * 
             {
             "sucess": true,
            
             "message":"Your password has been changed successfuly"
             }
 *
 */

app.route('/user/isLoggedin')
    .get(auth.isLogged);

app.route('/user/decline')
    .post(auth.declineUser);



};






