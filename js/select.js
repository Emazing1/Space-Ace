var mysql = require('mysql');

var connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '4742Cire',
database: 'score'

})


connection.connect ('select * from score', function (err, result){
	console.log(result);
	
})
