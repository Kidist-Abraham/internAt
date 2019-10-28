// Load Module Dependencies
const events = require('events');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Get User DAL
const UserDal = require('../dal/authdal');

// Get Config file
const config = require('../config');

const Company = require("../models/companiesModel");
const Intern = require("../models/internsModel");


/*
* Create User
*
*  1. Create User
*  2. Respond
*/
exports.createUser = function createUser(req, res, next) {
  let workflow = new events.EventEmitter();
  console.log(req.body)

  workflow.on('validateData', function validateData() {
    // Validate User Data
    req.checkBody({
      email: {
        notEmpty: true,
        errorMessage: 'Invalid email'
      },
      password: {
        notEmpty: true,
        errorMessage: 'Invalid password'
      },
    });

    let validationErrors = req.validationErrors();

    if(validationErrors) {
      
      res.status(400);
      res.json(validationErrors);
    } else {
      // On success emit the createUser event
      workflow.emit('createUser');
    }
  });

  workflow.on('createUser', function createUser() {
    UserDal.create(req.body, function callback(err, user) {
      if (err) {
        return next(err);
      }

      // On Success respond with new user
      workflow.emit('respond', user);
    });
  });

  workflow.on('respond', function respond(user) {
  let intern = {
                name:user.name,
                email:user.email,
                role:"Intern"
                                } ,
      company = {
                name:user.name,
                email:user.email,
                LC:user.LC,
                role:"Company" 
                              };
let internModel= new Intern(intern);
  let  companyModel= new Company(company);
  if(user.role==="Company"){
 companyModel.save(function(err, company) {
    if (err)
      return (err);
  });
}
else{

 internModel.save(function(err, intern) {
    if (err)
      return (err);
  });
}
    res.status(201);
    res.json(user);
  });

  workflow.emit('validateData');
};

/*
* Login User
*
*  1. Find User by email
*  2. Check User password match
*  3. Respond
*/
exports.loginUser = function loginUser(req, res, next) {
  let workflow = new events.EventEmitter();

  workflow.on('checkUser', function checkUser() {
    UserDal.get({ email: req.body.email }, function(err, user) {
      if (err) {
        return res.status(401).json({
          success: false,
          message: 'Auth Failed1'
        });
      }

      workflow.emit('checkPassword', user);
    })
  });

  workflow.on('checkPassword', function checkPassword(user) {
     bcrypt.compare(req.body.password, user.password, (err, result) => {
      console.log(err)
      console.log(result)
        if(err) {
        console.log(err)
        return res.status(401).json({
          success: false,
          message: 'Auth Failed2'
        });
      }

      if(result) {
        workflow.emit('respond', user);
      }
 /*  return res.status(401).json({
          success: false,
          message: 'Auth Failed3'
        }); */
     
    });
  });

  workflow.on('respond', function respond(user) {
    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id
      },
      config.JWT_KEY,
      {
        expiresIn: "1m"
      }
    );
  //  res.status(200);
if (user.role==="Company"){
Company.findOne({email:user.email}, function(err, company) {
  console.log("I am HEREEEEEEE")
return res.status(200).json({
      success: true,
      message: 'Auth successful',
      token: token,
      user:company
    });
    
 });
}


else {
Intern.findOne({email:user.email}, function(err, intern) {
 if(err){
    return res.send(err)
}
 return res.status(200).json({
      success: true,
      message: 'Auth successful',
      token: token,
      user:intern
    });

 });
}
  });

  workflow.emit('checkUser');
};



exports.getUser = function getUser(req, res, next) {

  UserDal.get({email: req.params.userId}, function(err, user) {
   // console.log(req.params.userId)
      if (err) {
        return res.status(401).json({
          success: false,
          message: 'Request Failed'
        });
      }
 
    res.json(user);
  });
};
