var express = require('express');

var app = express();
var env = process.env.NODE_ENV || 'prod';

var port = 3000;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Enable Express to get dependency scripts
console.log(__dirname);
app.use(express.static('public'));
app.use('/img', express.static('img'))

app.listen(port, function(error) {
	if (!error) {
		console.log('Listening on port ' + port + '. In ' + env + ' mode.');
	} else {
		console.error(error);
	}
});