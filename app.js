var express = require('express');
var app = express();

var rount = require('./route/route');

app.get('/', function(req, res) {

});

app.get('/getdata', rount.getdata);

app.post('/postdata', rount.postdata);

var server = app.listen(3000, function() {
	console.log('server:' + server.address().address + ', port:' + server.address().port);
});