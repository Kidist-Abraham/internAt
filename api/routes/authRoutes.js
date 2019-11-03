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
 * @apiSuccess {String} _id  The ID of the newly created User.
   @apiSuccess {String} name The name of the User.
 * @apiSuccess {String} username The email of the User.
  * @apiSuccess {String} role The role of the User. If not provided, it will set to intern by default. 
 * @apiSuccess {Date} date_created The date on which the User entry was created.
 * @apiSuccess {Date} date_modified The date on which the User entry was last updated.
   @apiSuccess {String} LC The license of the User. (For companies)
   @apiSuccess {String} salt The randomization hash
   @apiSuccess {String} hash The hashed password of the User.
 *
 * @apiSuccessExample {json} Success-Response:

 * 	{
    "success": true,
    "user": {
        "date_created": "2019-10-30T03:31:42.797Z",
        "date_modified": "2019-10-30T03:31:42.797Z",
        "LC": "dassd",
        "_id": "5db9041ecff7001fb7b1c5f2",
        "username": "kidist.abraham@internat.io",
        "role": "Company",
        "name": "Kidist",
        "salt": "a739f55140e16a13adc0d6c7c5fc83e6152637ebe396b0b7c1372351332f84cc",
        "hash": "dd4b700d175d334d4c0527a882a3530e5c648e9c6fa46606a4838241c77893b0e640ee7db9f68d492936fd3f90f7f3ffb61087fe6580663c92f38fda290a83b418fcce98c6ff5d2c7590e350f611e7472eef04579131aee1822a723ddd53f8aec2f63e66b1730f8b9800704f9025e75ea1deffca43f13f5c99addbb23c0bef625e8823d1dba610fcf7c5b1332123e7370ad74130ca79a8c9215745e0b39396b26f3c8025e8cb5a1f5757dd3fa56fa55f8d64dba652230407a489f411bacce1f8c8fe5eb04835e438f752e4ddfc52ef3160c1a9a7d30611c1dfd06be38b80b12a730afbde906b4dc8e832258953ebd469785f2167ec6d57ecfc5a6d93ea8983b6ab7d863a2f18192078176ac700276c475dbbbf2f1a00af723827054ef8ba736fbf9aaeb8ec3c68add3485ae1983de25ab5ea77e64b86ed9c9c383bf9faf0d708ea6ac871a5b81e366d2cec5a8ad426b5f821c8a3d86e7e6462cc5fe22081ab42bef6f868f78bbe549d85b2d8ba03ad76a1fb3d878c9d6921f10b43afe5e26a93c84f838fd29cb41f0ca329cc4e6fa3233a5d7bc2022af9475b0aeaddfce4eec175ac0d3f286e2be56c31f9ed8ede83130dcad2c9fb00bed6f9eb637380a373e9a4f5a3a485bacb597e2b6125b0fa2c041706c157f14081358f57bfe5cae7047c446b7cf6aa2a67f50603d1a1b6a84910f99773f1d1414f04dec0b44bbe056db9",
        "__v": 0
    }
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
 *
 * @apiSuccessExample {json} Success-Response:
 * 

{
    "success": true,
    "user": {
        "date_created": "2019-10-30T03:31:42.797Z",
        "date_modified": "2019-10-30T03:31:42.797Z",
        "LC": "dassd",
        "_id": "5db9041ecff7001fb7b1c5f2",
        "username": "kidist.abraham@internat.io",
        "role": "Company",
        "name": "Kidist",
        "salt": "a739f55140e16a13adc0d6c7c5fc83e6152637ebe396b0b7c1372351332f84cc",
        "hash": "dd4b700d175d334d4c0527a882a3530e5c648e9c6fa46606a4838241c77893b0e640ee7db9f68d492936fd3f90f7f3ffb61087fe6580663c92f38fda290a83b418fcce98c6ff5d2c7590e350f611e7472eef04579131aee1822a723ddd53f8aec2f63e66b1730f8b9800704f9025e75ea1deffca43f13f5c99addbb23c0bef625e8823d1dba610fcf7c5b1332123e7370ad74130ca79a8c9215745e0b39396b26f3c8025e8cb5a1f5757dd3fa56fa55f8d64dba652230407a489f411bacce1f8c8fe5eb04835e438f752e4ddfc52ef3160c1a9a7d30611c1dfd06be38b80b12a730afbde906b4dc8e832258953ebd469785f2167ec6d57ecfc5a6d93ea8983b6ab7d863a2f18192078176ac700276c475dbbbf2f1a00af723827054ef8ba736fbf9aaeb8ec3c68add3485ae1983de25ab5ea77e64b86ed9c9c383bf9faf0d708ea6ac871a5b81e366d2cec5a8ad426b5f821c8a3d86e7e6462cc5fe22081ab42bef6f868f78bbe549d85b2d8ba03ad76a1fb3d878c9d6921f10b43afe5e26a93c84f838fd29cb41f0ca329cc4e6fa3233a5d7bc2022af9475b0aeaddfce4eec175ac0d3f286e2be56c31f9ed8ede83130dcad2c9fb00bed6f9eb637380a373e9a4f5a3a485bacb597e2b6125b0fa2c041706c157f14081358f57bfe5cae7047c446b7cf6aa2a67f50603d1a1b6a84910f99773f1d1414f04dec0b44bbe056db9",
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

 * @apiDescription On a valid request, a recovery link will be send to the user's email.  
 * @apiParam {String} id The id of the User.
   @apiParam {String} token The password recovery token of the User.
 * 
 *
 *  
   @apiSuccess {Boolean} success The success status of the request
  
 *
 * @apiSuccessExample {json} Success-Response:
 * 
              { 
                  success:true,
                  message:"password recovery link has been send to user"}
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

app.route('/user/isLoggedin')
    .get(auth.isLogged);

app.route('/user/decline')
    .post(auth.declineUser);


};






