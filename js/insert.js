var mysql = require('mysql');

var connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '4742Cire',
database: 'score'

})


connection.connect ()

var score = {
	player: 'player1',
	score: 'number',
	name: 'Eric'
}

connection.query('insert into score ?', score, function(err, result){
	if (err) {
		console.error(err);
		return;
	}
		console.err(result);
});