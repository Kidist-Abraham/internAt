		var passport= require('passport'),
	    User = require("../models/authModel"),
	    nodemailer = require('nodemailer');

	const Company = require("../models/companiesModel");
	const Intern = require("../models/internsModel");
	const TobeApproved = require("../models/approvalModel");

	var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: 'kidistabraham@gmail.com',
	    pass: 'japanisjapanis2'
	  }
	});



	exports.createUser = function createUser(req, res) {
        // console.log(req.body)
	 req.checkBody({
	      username: {
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
	   let now = new Date();

	 User.register(new User({username :req.body.username,LC:req.body.LC,role:req.body.role,date_created: now.toISOString(),date_modified : now.toISOString(),name:req.body.name}), req.body.password,function(err,user){
	    if(err){
            console.log("I am heree")
            console.log(err)
	    return res.json({success:false,
	                    err:err});
	       }
           
	 passport.authenticate("local")(req,res,function(){
          
           console.log("I finished")
           let intern = {
	                name:user.name,
	                email:user.username,
	                role:"Intern"
	                                } ,
	      company = {
	                name:user.name,
	                email:user.username,
	                LC:user.LC,
	                role:"Company" 
	                              };
	   let internModel= new Intern(intern),
	    companyModel= new Company(company);
	   if(user.role==="Company"){
           console.log("I am com")
	 companyModel.save(function(err, company) {
	    if (err)
              console.log(err);
	      return (err);
	       });
           console.log(company);
	   }
	else{

	 internModel.save(function(err, intern) {
	    if (err)
	      return (err);
	  });
	} 

	var mailOptions = {
	  from: 'kidistabraham@gmail.com',
	  to: user.username,
	  subject: 'Your InternAt Account is created successfully. ',
	  text: 'Dear '+user.name +', Welcome to InternAt, Your account has been approved. You can know start editing your profile by following the link below '
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	}); 

	TobeApproved.remove({email: user.username}, function(err, tobeApproved) {
	    if (err)
	       console.log(err)
	  console.log('TobeApproved successfully deleted') 
	  });     

	      res.status(201);
	      res.json({success:true,
	                 user:user});
            console.log(user)
            

	});
	  
	});

	}
      
	};

	exports.loginUser=  function(req, res) {
             console.log("fdsads")
	       res.json({success:true,
	                 user:req.user});
	  };


	exports.logout = function(req, res) {
	       req.logout();
	       res.json({success:true});
	  };

  /*  exports.getUser=  function(req, res) {

	       res.json({success:true,
	                 user:req.user});
	  }; */
