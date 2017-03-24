var connect = require('connect');
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var express = require('express');
var methodOverride = require('method-override');
var http = require('http');
var hb = require('handlebars');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');



// create the app
var app = express();

// Mongoose Promise
mongoose.Promise = Promise;

//mongoose.connect

var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful");
});

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

//Express
app.engine("ejs", exphbs({ defaultLayout: "main" }));
app.set("view engine", "ejs");

// method override
app.use(methodOverride("_method"));





connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});