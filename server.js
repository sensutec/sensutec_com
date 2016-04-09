var express = require('express');

var app = express();
var env = process.env.NODE_ENV;

var port = env === 'dev' ? 3000 : 8080;
var index = env === 'dev' ? '/index.html' : '/public/index.html';



if (env === 'dev') {
    require('chokidar-socket-emitter')({port: 8090});
    
    app.get('/', function(req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.sendFile(__dirname + index);
    });
    // Enable Express to get dependency scripts
    app.use('/', express.static(__dirname + '/'));
} else {
    app.get('/', function(req, res) {
        res.sendFile(__dirname + index);
    });
    app.use('/', express.static(__dirname + '/'));
}

app.listen(port, function(error) {
	if (!error) {
		console.log('Listening on port ' + port + ' ' + env);
	} else {
		console.error(error);
	}
});