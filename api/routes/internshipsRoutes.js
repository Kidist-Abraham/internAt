'use strict';
module.exports = function(app) {
  var internships = require('../controllers/internshipsController');

 /**
 * @api {get} /internships  Get all Internships
 * @apiName GetAllInternships
 * @apiGroup Internships
 * @apiVersion 0.0.1
 *
 * @apiSuccess {Boolean} success  The success status of the request
 * @apiSuccess {Array} Internships The list of all the Internships.
 *

 * @apiSuccessExample {json} Success-Response:
 *{
    "success": true,
    "internships": [
        {
            "location": [
                "51.678418",
                " 7.809007"
            ],
            "_id": "5dc14252c834910024f2ea11",
            "name": "gfg",
            "email": "fg",
            "bio": "fgf",
            "website": "gf",
            "history": "fgdf",
            "title": "dfd",
            "description": "dfd",
            "responsibility": "dfd",
            "working_hour": "fd",
            "wage": "sdd",
            "city": "Addis Ababa",
            "catagory": "Health",
            "__v": 0
        },
        {
            "location": [
                "51.678418",
                " 7.809007"
            ],
            "_id": "5dc14de4f095170024a403bb",
            "name": "Tobedeleted",
            "email": "honeyfuf12@gmail.com",
            "bio": "work harf $$$$$4rnfj",
            "website": "www.google.com",
            "history": "sds",
            "title": "sds",
            "description": "sds",
            "responsibility": "sds",
            "working_hour": "sds",
            "wage": "sd",
            "city": "AA",
            "catagory": "Health",
            "__v": 0
        },
        {
            "location": [
                "51.678418",
                " 7.809007"
            ],
            "_id": "5dc153acf095170024a403bc",
            "name": "fgdfgdffd",
            "email": "honeyfuf12@gmail.com",
            "bio": "gd",
            "website": "gh",
            "history": "dgh",
            "title": "dg",
            "description": "df",
            "responsibility": "dfg",
            "working_hour": "f",
            "wage": "sf",
            "typeofIntern": "private",
            "city": "Addis Ababa",
            "catagory": "Health",
            "__v": 0
        },
 *
 */


/**
 * @api {post} /internships  Create Intrnship
 * @apiName CreateInternship
 * @apiGroup Internship
 * @apiVersion 0.0.1

 * @apiParam {String} name The name of the internship.
 * @apiParam {String} email The email of the internship.
 * @apiParam {String} bio The Bio of the Internships. 
 * @apiParam {String} catagory The catagory of the internship.
 * @apiParam {String} website The website of the internship.
   @apiParam {String} title the title of the internship.
   @apiParam {String} histoy The history of the internship.
   @apiParam {String} description the description of the internship.
    @apiParam {String} responsibility the responsibility of the internship.
     @apiParam {String} working hour the working hour of internship.
      @apiParam {String} wage the wage of the internship.
       @apiParam {String} typeofIntern the type of Intern needed for the internship.
        @apiParam {String} location the langitude and longutiude location of the internship.
         @apiParam {String} city the city of the internship.
         @apiParam {String} type the type of the internship.
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


 app.route('/internships')
    .get(internships.list_all_internships)
    .post(internships.create_internships)

app.route('/internships/:internshipsId')

    .get(internships.get_internships)
    .put(internships.update_internships)
    .delete(internships.delete_internships)



app.route('/internships/myinterest')

    .post(internships.myinterest)

}


