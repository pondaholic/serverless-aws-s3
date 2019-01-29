const AWS = require('aws-sdk');
let s3 = new AWS.S3();

exports.get = (event, context, callback) => {
	const params = {
		Bucket: 'posting-tests',
		Key: 'sample.json'
	};
	s3.getObject(params, function(err, data) {
		if (err) {
			console.log(err);
			callback(err, null);
		} else {
			console.log(data);
			let response = {
				statusCode: 200,
				headers: {
					my_header: 'my_value'
				},
				body: JSON.stringify(data),
				isBase64Encoded: false
			};
			callback(null, response);
		}
	});
};

exports.post = (event, context, callback) => {
	const date = new Date().toDateString();
	const params = {
		Bucket: 'posting-tests',
		Key: 'test-json.json',
		Body: date
	};
	s3.putObject(params, function(err, data) {
		if (err) {
			console.log(err);
			callback(err, null);
		} else {
			callback(null, data);
		}
	});
};
