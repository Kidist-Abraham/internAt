var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Intern = require('./api/models/internsModel'), 
  Company = require('./api/models/companiesModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/internAt'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require('./api/routes/internRoutes')(app); 
require('./api/routes/companyRoutes')(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

module.exports = app
