// packages

var express = require('express');



// create the app

var app = express();

// serve static files from the current directory


// port

var PORT = process.env.PORT || 3000;



// listenter

app.listen(PORT, function() {

  console.log("server is working open http://localhost:3000");

});