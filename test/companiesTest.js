const assert = require('assert');
const chai = require('chai')
const request = require('supertest');
const app = require('../server')
const chaiHttp = require("chai-http");

var compid

const { expect } = chai;
chai.use(chaiHttp);

var new_company ={
  name:  "Test Name",
  email: "Test@email",
  city: "Test City",
  catagory: "Test Catagory",
  field:"Test field",
  discription:"Test Discription",
  LC:"LC",
  role: "Company"
}




var updated_company ={
  name:  "updated Name",
  email: "Test@email",
  city: "Test City",
  catagory: "Test Catagory",
  field:"Test field",
  discription:"Test Discription",
  LC:"Test LC",
  role: "Company"
}
describe('Unit testing the /companies route', function() {

   
    it('should create company', function(done) {
    chai
        .request(app)
        .post('/companies')
        .send(new_company)
        .end((err, res) => {
        expect(res).to.have.status(200);
        //expect(res.body.status).to.equals("success");
        //console.log(res.body)
        expect(res.body.company).to.have.property('name',"Test Name",'email',"Test@email",'city',"Test City",'catagory',"Test Catagory",'field',"Test field",'discription',"Test Discription",'LC',"Test LC",'role', "Company");
        compid=res.body.company._id
         done();
});
     
    });

    it('should list the companies', function(done) {
      chai
        .request(app)
        .get('/companies')
         .end((err, res) => {
          expect('Content-Type', /json/)
         done()
});
    });

it('should get the company by id', function(done) {
     console.log(compid)
      chai
        .request(app)
        .get('/companies/'+compid)
         .end((err, res) => {
          expect('Content-Type', /json/)
          expect(res.body.company).to.have.property('_id',compid,'name',"Test Name",'email',"Test@email",'city',"Test City",'catagory',"Test Catagory",'field',"Test field",'discription',"Test Discription",'LC',"Test LC",'role', "Company");
         done()
});
    });

it('should update the company by id', function(done) {
      chai
        .request(app)
        .put('/companies/'+compid)
        .send(updated_company)
         .end((err, res) => {
          expect('Content-Type', /json/)
          expect(res.body.company).to.have.property('_id',compid,'name',  "updated Name",'email',"Test@email",'city',"Test City",'catagory',"Test Catagory",'field',"Test field",'discription',"Test Discription",'LC',"Test LC",'role', "Company");
         done()
});
    });



it('should delete the company by id', function(done) {
      
      chai
        .request(app)
        .delete('/companies/'+compid)
         .end((err, res) => {
          expect('Content-Type', /json/)
          expect(res.body.message).to.equals('Company successfully deleted')
         done()
});
    });

});
