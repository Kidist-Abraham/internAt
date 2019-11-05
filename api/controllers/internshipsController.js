'use strict';


var mongoose = require('mongoose'),
Internships = mongoose.model('Internships');

exports.list_all_internships = function(req, res) {
  Internships.find({}, function(err, internships) {
    if (err) {
   return  res.json({success:false,
                    err:err}); }
   return  res.json({success:true,
            internships:internships});
  });
};




exports.create_internships = function(req, res) {
  var new_internships = new Internships(req.body);
  new_internships.save(function(err, internships) {
    if (err){
        return  res.json({success:false,
                    err:err}); }
      Company.findOne({email:internships.email}, function(err, company) {
    if (err){
       return  res.json({success:false,
                    err:err}); }
                   //  console.log(company)
      company.myInternships.push(internships)
     // console.log(company.myInternships.push(internships).length) 
      Company.findOneAndUpdate({email:internships.email}, company, {new: true}, function(err, company) {
        if (err){
          return  res.json({success:false,
                        err:err}); }
         return  res.json({success:true,
                        internships:internships,
                        company:company});
       
  });
});
      
 
  });
};


exports.get_internships = function(req, res) {
console.log(req.params.internshipsId)
Internships.findById(req.params.internshipsId, function(err, internships) {
    if (err){
       return  res.json({success:false,
                    err:err}); }
   return  res.json({success:true,
            internships:internships});
  });
};


exports.update_internships = function(req, res) {
    Internships.findOneAndUpdate({_id: req.params.internshipsId}, req.body, {new: true}, function(err, internships) {
    if (err){
      return  res.json({success:false,
                    err:err}); }

     Company.findOne({email:internships.email}, function(err, company) {
    if (err){
       return  res.json({success:false,
                    err:err}); }
       company.myInternships.map(int =>{if(int._id==internships._id) {internships} else int })
       //(company.myInternships.filter(a=>a.email==internships.email))[0]
        Company.findOneAndUpdate({email:internships.email}, company, {new: true}, function(err, company) {
        if (err){
          return  res.json({success:false,
                        err:err}); }
         return  res.json({success:true,
                        internships:internships});
       
   });
  });
  
  });
};

 
   

exports.delete_internships = function(req, res) {
  console.log("delete")
Internships.findById(req.params.internshipsId, function(err, internships) {
    if (err){
       return  res.json({success:false,
                    err:err}); }
    if(internships==null){
       return  res.json({success:false,
                    err:err,
                    message:"There is no such internship"}); }
//console.log(internships)
Company.findOne({email:internships.email}, function(err, company) {
        if (err){
           return  res.json({success:false,
                        err:err}); }
       if(company==null){
       return  res.json({success:false,
                    err:err,
                    message:"There is no such company"}); }
     console.log(company.myInternships.length)
 var index = company.myInternships.map(x=>x._id).indexOf(internships._id)
   
     
    if (index > -1) {
       company.myInternships.splice(index, 1);
     console.log(company.myInternships.length)
    }
  
                  
  Company.findOneAndUpdate({_id: company._id}, company, {new: true}, function(err, company) {

    if (err){
      return  res.json({success:false,
                    err:err}); }   
 Internships.remove({
    _id: req.params.internshipsId
  }, function(err, internships) {
    if (err){
       console.log(err)
       return  res.json({success:false,
                    err:err}); }
      return  res.json({success:true,
              message: 'Internships successfully deleted' });

  });
 
            
          })
          
      });
   
  });
 
};


exports.apply_internships = function(req, res) {
    console.log(req.params.internshipsId)
    Company.findOne({email:req.body.email}, function(err, company) {
        if (err){
           return  res.json({success:false,
                        err:err}); }
                     company.appliedInterns.push(req.body.intern)
  Company.findOneAndUpdate({_id: company._id}, company, {new: true}, function(err, company) {

    if (err){
      return  res.json({success:false,
                    err:err}); }   
          return  res.json({success:true,
                        company:company});   
          })
          
      });
    };

exports.myinterest = function(req, res) {
    console.log(req.body)
    var myinter = (req.body.interest)
   console.log(typeof(myinter))
Internships.find({}, function(err, internships) {
    if (err) {
   return  res.json({success:false,
                    err:err}); }
var newI= internships.filter(intern=>(myinter.some(x=>intern.catagory==x)))
 return  res.json({success:true,
                        internships:newI}); 

  });

   
    };


