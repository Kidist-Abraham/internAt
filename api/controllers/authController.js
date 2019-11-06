var passport= require('passport'),
    jwt = require('jwt-simple'),
    User = require("../models/authModel"),
    nodemailer = require('nodemailer'),
    jwtN = require('jsonwebtoken'),
    config = require('../config');
   // secret=require("./../../secret");

	const Company = require("../models/companiesModel");
	const Intern = require("../models/internsModel");
        const Admin = require("../models/adminModel");
	const TobeApproved = require("../models/approvalModel");

	var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: 'intern.at.tech@gmail.com',
	    pass: "internat123"
	  }
	});

exports.declineUser = function(req, res) {
 sendEmail(req.body.email,"Your InternAt Account is not Approved",req.body.text);

TobeApproved.remove({username: req.body.email}, function(err, tobeApproved) {
            console.log(req.body.email)
	    if (err)
	       console.log(err)
          else{ console.log(tobeApproved)
	  console.log('TobeApproved successfully deleted')
           res.json({status:true}) }
	  });  


}

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
          var secret = "thisisthesecret234e3rwhohooof4wvdfxer3454";
     console.log(req.body.password)
 try{
        var payload = jwt.decode(req.body.password, secret);         
    }catch(error){
          return  res.json({success:false,
                    err:error}); 
    }  

   
	    let validationErrors = req.validationErrors();

	    if(validationErrors) {
	      
	      res.status(400);
	      res.json(validationErrors);
	    } else {
	   let now = new Date();
       console.log(payload.password)
	 User.register(new User({username :req.body.username,LC:req.body.LC,role:req.body.role,date_created: now.toISOString(),date_modified : now.toISOString(),name:req.body.name}),payload.password,function(err,user){
	    if(err){
            console.log("I am heree")
            console.log(err)
	    return res.json({success:false,
	                    err:err});
	       }
           
//	 passport.authenticate("local")(req,res,function(){
          
           console.log("I finished")
           let intern = {
	                first_name:user.name,
	                email:user.username,
	                role:"Intern"
	                                } ,
	      company = {
	                name:user.name,
	                email:user.username,
	                LC:user.LC,
	                role:"Company" 
	                              };
              admin = {
	                first_name:user.name,
	                email:user.username,
	                role:"Admin" 
	                              };
	   let internModel= new Intern(intern),
	    companyModel= new Company(company),
            adminModel= new Admin(admin);
	   if(user.role==="Company"){
           console.log("I am com")
	 companyModel.save(function(err, company) {
	    if (err)
              console.log(err);
	      return (err);
	       });
           console.log(company);
	   }
	else if (user.role==="Intern"){

	 internModel.save(function(err, intern) {
	    if (err)
	      return (err);
	  });
	} 
        else{
        console.log("admin is about to be created");
         adminModel.save(function(err, admin) {
	    if (err){
              console.log(err)
	      return (err);
            
           }
          console.log(admin)
	  });

      }
 sendEmail(user.username,"Your InternAt Account is created successfully",'Dear '+user.name +", Welcome to InternAt, Your account has been approved. You can now start editing your profile by following the link below" + "http://localhost:4200/login");
	
         console.log("I am HEre");
	TobeApproved.remove({username: user.username}, function(err, tobeApproved) {
	    if (err)
	       console.log(err)
	  console.log('TobeApproved successfully deleted') 
	  });     

	      res.status(201);
	      res.json({success:true});
            
            
              
	  });
        }
      };

 exports.loginUser=  function(req, res) {
           const token = jwtN.sign(
      {
        email: req.body.username
      },
      config.JWT_KEY,
      {
        expiresIn: "1h"
      }
    );
     User.findOne({username:req.body.username}, function(err, user) {
    if (err){
       return  res.json({success:false,
                    err:err}); }

    if(user.role=="Company"){
      Company.findOne({email:req.body.username}, function(err, company) {
    if (err){
       return  res.json({success:false,
                    err:err}); }
   res.status(200);
   res.json({
      success:true,
      message: 'Auth Successful',
      token: token,
      user:company
    });
  });
}

  if(user.role=="Intern"){
      Intern.findOne({email:req.body.username}, function(err, intern) {
    if (err){
       return  res.json({success:false,
                    err:err}); }
   res.status(200);
     res.json({
      success:true,
      message: 'Auth Successful',
      token: token,
      user:intern
    });
  });
}

 if(user.role=="Admin"){
   console.log("Here")
   console.log(req.body.username) 
      Admin.findOne({email:req.body.username}, function(err, admin) {
    console.log(admin)
    if (err){
       return  res.json({success:false,
                    err:err}); }
   res.status(200);
   res.json({
      success:true,
      message: 'Auth Successful',
      token: token,
      user:admin
    });
  });
}
  
  });
  
	  }


 exports.logout = function(req, res) {
	       req.logout();
	       res.json({success:true});
	  };

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err) {
   return  res.json({success:false,
                    err:err}); }
   return  res.json({success:true,
            users:user});
  });
};

exports.get_user = function(req, res) {
  console.log(req.param._id)
  User.findById(req.params.userId, function(err, user) {
    if (err){
       return  res.json({success:false,
                    err:err}); }
   return  res.json({success:true,
            user:user});
  });
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
     //https://internat2.herokuapp.com
      //  http://localhost:3000
        
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
       console.log(payload)
      
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
    console.log(payload)
      
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
                                        message:"Your password has been changed successfuly"})
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

exports.approve_intern = function(req, res) {


  Intern.findOne({email: req.body.email}, function(err, intern) {
    if (err){
       return  res.send({success:false,
                    err:err}); }
  sendEmail(req.body.email,"Your InternAt Account is not Approved",req.body.text);
    res.json({ success:true,
               message: 'Intern is approved. Email will be sent.' });
  });
};

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


