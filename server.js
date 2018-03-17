var express = require("express");
var bodyParser = require("body-parser");
var ejs = require('ejs');
var engine = require('ejs-mate');

var app = express();

var secret = require("./config/secret");



// MIDDLEWARE
app.use(express.static(__dirname + '/public'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES

// Pass in app to the required file
require('./routes/main')(app);

app.listen(secret.port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`running on port ${secret.port}`);
  }
});