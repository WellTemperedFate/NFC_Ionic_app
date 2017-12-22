var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/tagModel'), //importing the model module
  bodyParser = require('body-parser');
  
//connecting with the mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TagUsers'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/tagRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('server started on: ' + port);

