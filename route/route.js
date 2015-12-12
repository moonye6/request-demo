var g_data = {
	list: [{
		"name": "alice",
		"sex": "female"
	}, {
		"name": "bob",
		"sex": "male"
	}]
};

var s_data = {},
	nodata = 'there is no data	!';


var url = require('url');
var querystring = require('querystring');

exports.getdata = function(req, res) {
	console.log('get headers');
	console.log(req.headers);
	console.log(req.oauth);

	var params = url.parse(req.url, true).query;
	if (params.a) {
		res.send(g_data.list[params.a] || nodata);
	} else {
		res.send(nodata);
	}
};

exports.postdata = function(req, res) {
	req.setEncoding('utf-8');

	console.log('post headers');
	console.log(req.headers);
	console.log(req.oauth);

	var data = '',
		param;
	req.addListener('data', function(chunk) {
		data += chunk;
	});

	req.addListener('end', function() {
		param = querystring.parse(data);
		if (param.a) {
			res.send(g_data.list[param.a] || nodata);
		} else {
			res.send(nodata);
		}
	});
}