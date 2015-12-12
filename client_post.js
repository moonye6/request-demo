var request = require('request');

var j = request.jar();
var cookie = request.cookie('key1=value1;key2=value2');
j.setCookie(cookie, 'http://127.0.0.1');



request('http://127.0.0.1:3000/postdata', {
		method: 'post',
		form: {
			a: 1
		},
		jar:j,
		oauth: {
			user: 'moonye',
			pass: 'im'
		}
	},
	function(err, res, body) {
		if (err) {
			console.log('post data err! ', err);
			return;
		}

		console.log('post data ' + body);
	});

request.post({
		url: 'http://127.0.0.1:3000/postdata',
		form: {
			a: 0
		},
		headers: {
			host: 'ke.qq.com',
			origin: 'http://ke.qq.com',
			refer: 'http://ke.qq.com'
		},
		jar:jar,
		oauth: {
			user: 'moonye',
			pass: 'im'
		}
	},
	function(err, res, body) {
		if (err) {
			console.log('post data err! ', err);
			return;
		}

		console.log('post data ' + body);
	});