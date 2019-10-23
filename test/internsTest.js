const assert = require('assert');
const chai = require('chai')
const request = require('supertest');
const app = require('../server')
const chaiHttp = require("chai-http");

var inteid

const { expect } = chai;
chai.use(chaiHttp);
 
var new_intern ={
  name:  "Test Name",
  email: "Test@email",
  field:"Test field",
  interests: ["Test interests"],
  discription:"Test Discription"
}

var updated_intern ={
  name:  "updated Name",
  email: "Test@email",
  field:"Test field",
  interests: ["Test interests"],
  discription:"Test Discription"
}
describe('Unit testing the /interns route', function() {

   
    it('should create an intern', function(done) {
    chai
        .request(app)
        .post('/interns')
        .send(new_intern)
        .end((err, res) => {
        expect(res).to.have.status(200);
        //expect(res.body.status).to.equals("success");
   //     console.log(res.body)
        expect(res.body).to.have.property('name',"Test Name",'email',"Test@email",'field',"Test field",'interests',["Test interests"],'discription',"Test Discription");
        inteid=res.body._id
         done();
});
     
    });

    it('should list the interns', function(done) {
      chai
        .request(app)
        .get('/interns')
         .end((err, res) => {
          expect('Content-Type', /json/)
         done()
});
    });

it('should get the intern by id', function(done) {
      chai
        .request(app)
        .get('/interns/'+inteid)
         .end((err, res) => {
          expect('Content-Type', /json/)
          expect(res.body).to.have.property('_id',inteid,'name',"Test Name",'email',"Test@email",'field',"Test field",'interests',["Test interests"],'discription',"Test Discription");
         done()
});
    });

it('should update the intern by id', function(done) {
      chai
        .request(app)
        .put('/interns/'+inteid)
        .send(updated_intern)
         .end((err, res) => {
          expect('Content-Type', /json/)
          expect(res.body).to.have.property('_id',inteid,'name',"updated Name",'email',"Test@email",'field',"Test field",'interests',["Test interests"],'discription',"Test Discription");
         done()
});
    });



it('should delete the intern by id', function(done) {
      chai
        .request(app)
        .delete('/interns/'+inteid)
         .end((err, res) => {
          expect('Content-Type', /json/)
          expect(res.body.message).to.equals('Intern successfully deleted')
         console.log(inteid)
         done()
});
    });

});
