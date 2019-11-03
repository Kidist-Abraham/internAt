var express = require('express'),
  app = express(),
  config= require('./api/config/index')
  port = config.PORT,
  mongoose = require('mongoose'),
  Intern = require('./api/models/internsModel'), 
  Company = require('./api/models/companiesModel'),
  User= require('./api/models/authModel'), 
  Admin= require('./api/models/adminModel'),
  TobeApproved= require('./api/models/approvalModel'),
  Interships= require('./api/models/internshipsModel'), 
  validator = require('express-validator'),
  passport=require("passport"),
  LocalStrategy=require("passport-local"),
  passportLocalMongoose =require("passport-local-mongoose"),
  methodOverride= require("method-override"),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  MongoStore = require('connect-mongo')(session);

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://kidistabraham:ethiopismongodb@internat-4z2ur.mongodb.net/test?retryWrites=true",{useNewUrlParser: true,useUnifiedTopology: true }); 
//mongoose.connect(config.MONGOLAB_URI,{useNewUrlParser: true,useUnifiedTopology: true });




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(validator());
app.use(methodOverride("_method"));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(session({
   secret: "God is good everytime",
   store: new MongoStore({
        url: "mongodb+srv://kidistabraham:ethiopismongodb@internat-4z2ur.mongodb.net/test?retryWrites=true"
      }),
   resave:false,
   saveUninitialized: false

}));


app.use(passport.initialize());
app.use(passport.session());



passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



  
require('./api/routes/internRoutes')(app); 
require('./api/routes/companyRoutes')(app);
require('./api/routes/authRoutes')(app);
require('./api/routes/approvalRoutes')(app);
require('./api/routes/adminRoutes')(app);
require('./api/routes/internshipsRoutes')(app);

app.listen(port);

console.log('InternAt RESTful API server started on: ' + port);

module.exports = app
