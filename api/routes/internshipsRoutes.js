'use strict';
module.exports = function(app) {
  var internships = require('../controllers/internshipsController');

 /**
 * @api {get} /internships  Get all Internships
 * @apiName GetAllInternships
 * @apiGroup Internship
 * @apiVersion 0.0.1
 *
   @apiDescription This will list all internships posted by all companies
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
            "name": "Tikur Anbesa",
            "email": "tikuranbesa@gmail.com",
            "website": "www.tikuranbesa.org",
            "title": "Tikur Anbesa Hospital Summer program",
            "responsibility": "Full hour",
            "working_hour": "8 hours per day",
            "wage": "4000 birr/month",
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
            "name": "MOCL",
            "email": "honeyfuf12@gmail.com",
            "website": "www.MOCL.com",
            "title": "Blockchain training",
            "description": "A blockchain Company intended to provide blockchain infrastructure for government offices ",
            "working_hour": "5 hours a day",
            "wage": "6000 birr/month",
            "city": "Addis Ababa",
            "catagory": "Tech",
            "__v": 0
        }
       ]
}
 *
 */


/**
 * @api {post} /internships  Create Intrnship
 * @apiName CreateInternship
 * @apiGroup Internship
 * @apiVersion 0.0.1

 @apiDescription This will create a new internship and it will also add the internship to the myinternships array in the company's profile. Intended to use by the companies.

 * @apiParam {String} name The name of the Company.
 * @apiParam {String} email The email of the internship.
 * @apiParam {String} bio The Bio of the Company. 
 * @apiParam {String} catagory The catagory of the internship.
 * @apiParam {String} website The website of the Company.
   @apiParam {String} title the title of the internship.
   @apiParam {String} histoy The history of the Company.
   @apiParam {String} description the description of the internship.
    @apiParam {String} responsibility the responsibility of the internship.
     @apiParam {String} working hour the working hour of internship.
      @apiParam {String} wage the wage of the internship.
       @apiParam {String} typeofIntern the type of Intern needed for the internship.
        @apiParam {Array} location the langitude and longutiude location of the internship place.
         @apiParam {String} city the city of the internship.
         @apiParam {String} type the type of the internship.
 *
 * @apiParamExample {json} Request-Example:
 * 	{
            "name": "Tikur Anbesa",
            "email": "tikuranbesa@gmail.com",
            "website": "www.tikuranbesa.org",
            "title": "Tikur Anbesa Hospital Summer program",
            "responsibility": "Full hour",
            "working_hour": "8 hours per day",
            "wage": "4000 birr/month",
            "city": "Addis Ababa",
            "catagory": "Health",
   }


   @apiSuccess {Boolean} success  The success status of the request
 * @apiSuccess {Object} internships The internship just created.
   @apiSuccess {Object} company The company that created the internship.

 *
 * @apiSuccessExample {json} Success-Response:
 * {
    "success": true,
    "internships": {
        "location": [],
        "_id": "5dc1bf6ea28c6a0024f36537",
        "name": "Tikur Anbesa",
        "email": "tikuranbesa@gmail.com",
        "catagory": "Health",
        "website": "www.tikuranbesa.org",
        "title": "Tikur Anbesa Hospital Summer program",
        "working_hour": "8 hours per day",
        "city": "Addis Ababa",
        "wage": "4000birr / month",
        "__v": 0
    },
    "company": {
        "catagory": [],
        "role": "Company",
        "myInternships": [
           
            {
                "location": [],
                "_id": "5dc1b994a28c6a0024f36536",
                "name": "Internship5",
                "email": "tikuranbesa@gmail.com",
                "catagory": "Health",
                "__v": 0
            },
            {
                "location": [],
                "_id": "5dc1bf6ea28c6a0024f36537",
                "name": "Tikur Anbesa",
                "email": "tikuranbesa@gmail.com",
                "catagory": "Health",
                "website": "www.tikuranbesa.org",
                "title": "Tikur Anbesa Hospital Summer program",
                "working_hour": "8 hours per day",
                "city": "Addis Ababa",
                "wage": "4000birr / month",
                "__v": 0
            }
        ],
        "appliedInterns": [],
        "_id": "5dc1b3d1a28c6a0024f3652f",
        "name": "Tikur Anbesa",
        "email": "tikuranbesa@gmail.com",
        "LC": "243A",
        "__v": 0
    }
}
**/


 app.route('/internships')
    .get(internships.list_all_internships)
    .post(internships.create_internships)


/**
 * @api {get} /internships/:internshipsId  Get Internship
 * @apiName GetInternship
 * @apiGroup Internship
 * @apiVersion 0.0.1

   @apiDescription This will get internship by id
 * @apiParam {String} internId  The ID of the Intern.
 
   @apiSuccess {Boolean} success  The success status of the request
 * @apiSuccess {Object} intern The intern of the stated ID.
 *
 * @apiSuccessExample {json} Success-Response:

   {
    "success": true,
    "internships":
 *  {
            "location": [
                "51.678418",
                " 7.809007"
            ],
            "_id": "5dc14de4f095170024a403bb",
            "name": "MOCL",
            "email": "mocL.tech@mocl.com",
            "website": "www.MOCL.com",
            "title": "Blockchain training",
            "description": "A blockchain Company intended to provide blockchain infrastructure for government offices ",
            "working_hour": "5 hours a day",
            "wage": "6000 birr/month",
            "city": "Addis Ababa",
            "catagory": "Tech",
            "__v": 0
        }
}
**/
/**
 * @api {delete} /internships/:internshipsId  Delete Internship
 * @apiName DeleteInternship
 * @apiGroup Internship
 * @apiVersion 0.0.1

   @apiDescription This will delete the internship and also delete the internship from myinternship array of the Company
 * @apiParam {String} internshipId The ID of the Internship to be deleted.

 * @apiSuccess {String} message A message confirming success of intern deletion
   @apiSuccess {Boolean} success  The success status of the request

 * @apiSuccessExample {json} Success-Response (The updated intern):

 * {"success": true,
    "message": "Internship successfully deleted"
  }
**/

app.route('/internships/:internshipsId')

    .get(internships.get_internships)
  //  .put(internships.update_internships)
    .delete(internships.delete_internships)


/**
 * @api {post} /internships/myinterest  Filter Internship
 * @apiName FilterInternship
 * @apiGroup Internship
 * @apiVersion 0.0.1

   @apiDescription This will filter the internship by the intern's interest 
 * @apiParam {Array} interest The intertst of the internship

 * @apiSuccess {status} message The success status of the request
   @apiSuccess {Array} success  The array of the filtered internships

 * @apiSuccessExample {json} Success-Response (The updated intern):

 * {   "success": true,
    "internships": [
        
        {
            "location": [],
            "_id": "5dc1b97ba28c6a0024f36534",
            "name": "Internship3",
            "email": "honeyfuf12@gmail.com",
            "catagory": "Health",
            "__v": 0
        },
        {
            "location": [],
            "_id": "5dc1b994a28c6a0024f36536",
            "name": "Internship5",
            "email": "honeyfuf12@gmail.com",
            "catagory": "Health",
            "__v": 0
        },
        {
            "location": [],
            "_id": "5dc1bf6ea28c6a0024f36537",
            "name": "Tikur Anbesa",
            "email": "honeyfuf12@gmail.com",
            "catagory": "Health",
            "website": "www.tikuranbesa.org",
            "title": "Tikur Anbesa Hospital Summer program",
            "working_hour": "8 hours per day",
            "city": "Addis Ababa",
            "wage": "4000birr / month",
            "__v": 0
        }
    ]
}
**/


app.route('/internships/myinterest')

    .post(internships.myinterest)

}



