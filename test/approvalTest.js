const assert = require('assert');
const chai = require('chai')
const request = require('supertest');
const app = require('../server')
const chaiHttp = require("chai-http");

var tobeApprovedid

const { expect } = chai;
chai.use(chaiHttp);

var new_tobeApproved ={
  name:  "Test Name",
  email: "Test@email",
  role: "Company",
  LC: "Test LC"
}

var updated_tobeApproved ={
  name:  "updated Name",
  email: "Test@email",
  role: "Company",
  LC: "Test LC"
}
describe('Unit testing the /tobeApproved route', function() {

   
    it('should create tobeApproved', function(done) {
    chai
        .request(app)
        .post('/tobeApproved')
        .send(new_tobeApproved)
        .end((err, res) => {
        expect(res).to.have.status(200);
        //expect(res.body.status).to.equals("success");
        //console.log(res.body)
        expect(res.body.tobeApproved).to.have.property('name',"Test Name",'email',"Test@email",'role',"Company",'LC',"Test LC");
        tobeApprovedid=res.body.tobeApproved._id
         done();
});
     
    });

    it('should list the companies', function(done) {
      chai
        .request(app)
        .get('/tobeApproved')
         .end((err, res) => {
          expect('Content-Type', /json/)
         done()
});
    });

it('should get the tobeApproved by id', function(done) {
      chai
        .request(app)
        .get('/tobeApproved/'+tobeApprovedid)
         .end((err, res) => {
          expect('Content-Type', /json/)
          expect(res.body.tobeApproved).to.have.property('_id',tobeApprovedid,'name',"Test Name",'email',"Test@email",'role',"Company",'LC',"Test LC");
         done()
});
    });

it('should update the tobeApproved by id', function(done) {
      chai
        .request(app)
        .put('/tobeApproved/'+tobeApprovedid)
        .send(updated_tobeApproved)
         .end((err, res) => {
          expect('Content-Type', /json/)
          expect(res.body.tobeApproved).to.have.property('_id',tobeApprovedid,'name',  "updated Name",'email',"Test@email",'role',"Company",'LC',"Test LC");
         done()
});
    });



it('should delete the tobeApproved by id', function(done) {
      
      chai
        .request(app)
        .delete('/tobeApproved/'+tobeApprovedid)
         .end((err, res) => {
          expect('Content-Type', /json/)
          expect(res.body.message).to.equals('TobeApproved successfully deleted')
         done()
});
    });

});
