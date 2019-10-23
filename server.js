var express = require('express'),
  app = express(),
  config= require('./api/config/index')
  port = config.PORT,
  mongoose = require('mongoose'),
  Intern = require('./api/models/internsModel'), 
  Company = require('./api/models/companiesModel'),
  User= require('./api/models/authModel'), 
  validator = require('express-validator');
 
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGODB_URL); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(validator());


require('./api/routes/internRoutes')(app); 
require('./api/routes/companyRoutes')(app);
require('./api/routes/authRoutes')(app);

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

module.exports = app
