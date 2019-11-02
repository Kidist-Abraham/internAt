var passport= require('passport'),
    jwt = require('jwt-simple'),
    User = require("../models/authModel"),
    nodemailer = require('nodemailer'),
   // secret=require("./../../secret");

	const Company = require("../models/companiesModel");
	const Intern = require("../models/internsModel");
	const TobeApproved = require("../models/approvalModel");

	var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: 'intern.at.tech@gmail.com',
	    pass: "internat123"
	  }
	});



	exports.createUser = function createUser(req, res) {
        console.log(req.body.username)
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
 //sendEmail(user.username,"Your InternAt Account is created successfully",'Dear '+user.name +", Welcome to InternAt, Your account has been approved. You can know start editing your profile by following the link below");
	

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


 exports.forgotPassword = function (req, res) {
  User.findOne({username:req.body.email}, function(err, user) {
    if (err){
       return  res.json({success:false,
                    err:err}); }

        var payload = {
            id: user._id,        
            username:req.body.email
        };
        var secret = user.hash + '-' + user.date_created.getTime();
        var token = jwt.encode(payload, secret);
        var link = 'https://internat2.herokuapp.com/user/resetpassword/' + payload.id + '/' + token
      

        
       sendEmail(user.username,"Your password recovery link","To recover your password click the following link " + link)
       res.json({ success:true,
                  message:"password recovery link has been send to user"})
 
  });

  
};

 exports.resetPasswordGet= function(req, res) {

    User.findById(req.params.id, function(err, user) {
    if (err){
       return  res.json({success:false,
                    err:err}); }

      var secret = user.hash + '-' + user.date_created.getTime();
 try{
       var payload = jwt.decode(req.params.token, secret);       
    }catch(error){
          return  res.json({success:false,
                    err:error}); 
    }  
    
      
      res.send('<form action="/user/resetpassword" method="POST">' +
        '<input type="hidden" name="id" value="' + payload.id + '" />' +
        '<input type="hidden" name="token" value="' + req.params.token + '" />' +
        '<input type="password" name="password" value="" placeholder="Enter your new password..." />' +
        '<input type="submit" value="Reset Password" />' +
    '</form>');
   
  });

 
};





 exports.resetPasswordPost= function (req,res){

 User.findById(req.body.id, function(err, user) {
    if (err){
       return  res.json({success:false,
                    err:err}); }

      var secret = user.hash + '-' + user.date_created.getTime();

  try{
        var payload = jwt.decode(req.body.token, secret);         
    }catch(error){
          return  res.json({success:false,
                    err:error}); 
    }  
      
      if (payload.id===req.body.id){
 user.setPassword(req.body.password, function(err,user){
                     if (err)
                          return res.json({success:false,
                                          err:err})
                         let now = new Date();
                       user.date_created = now.toISOString();
                       user.date_modified = now.toISOString()
                       user.save()
                       return res.json({sucess: true,
                                        user: user})
                });
     }
   else {
       return  res.json({success:false,
                    message:"Something went wrong"}); }
 
 });


         }

exports.isLogged =  function (req,res){
 if(req.isAuthenticated()) {
 return res.json({success:true})
}
 return res.json({success:false})
}



sendEmail = function (to,subject,text){

var mailOptions = {
	  from: 'kidistabraham@gmail.com',
	  to: to,
	  subject: subject,
	  text: text
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	}); 




}       
             
  /*  exports.getUser=  function(req, res) {

	       res.json({success:true,
	                 user:req.user});
	  }; */


