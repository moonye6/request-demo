var request = require('request');

var j = request.jar();
var cookie = request.cookie('key1=value1;key2=value2');
j.setCookie(cookie, 'http://127.0.0.1');

// var j = request.jar()
// var request = request.defaults({jar:j})


request('http://127.0.0.1:3000/getdata?a=0', function(err, res, body) {
	if (err) {
		console.log('get data err! ', err);
		return;
	}

	console.log('get data ' + body);
});


request('http://127.0.0.1:3000/getdata', {
	qs: {
		a: 1
	},
	jar :j,
	headers: {
		host:'ke.qq.com',
		origin:'http://ke.qq.com',
		refer: 'http://ke.qq.com'
	},
	auth: {
		user: 'moonye',
		pass: 'im'
	}
}, function(err, res, body) {
	if (err) {
		console.log('get data err! ', err);
		return;
	}

	console.log('get data ' + body);
});


request({
	url: 'http://127.0.0.1:3000/getdata',
	qs: {
		a: 1
	},
	jar:j
}, function(err, res, body) {
	if (err) {
		console.log('get data err! ', err);
		return;
	}

	console.log('get data ' + body);
});