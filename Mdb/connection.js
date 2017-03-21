mongoose.model('MyScore', mySchema);
var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var mySchema = new Schema({
   
});
/ connect the `mongoose` instance
mongoose.connect('mongodb://host/db');

var highScore = mongoose.model('HighScore');