// packages
var express = require('express');

var router = express.Router();

var score = require("../models/Score.model.js");

// routes for express and database manipulation

router.get('/', function(req, res){

    //res.render(__dirname, '/../main');

    //res.sendFile(path.join(__dirname, '/../main'));

    res.render('index');

});

router.post('/score', function (req, res) {
	var newLeader = new Leader();

	newScore.name = req.body.name;
	newScore.score = req.body.score;

	newScore.save(function(err, leader) {
		if(err) {
			res.send('Error saving player');
		} else {
			res.send(score);
		}
	});	
});

//============================================================//

router.get('/score', function(req, res) { 
	Score.find({})
		.exec(function(err, Score) {
			if(err) {
				res.send('houston we have a problem');
			} else {
				res.send(score);

			}

		});
});




module.exports = router; 