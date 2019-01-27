'use strict';
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
// const express = require('express');
// const sls = require('serverless-http');
// const app = express();

// app.post('/', async (req, res, next) => {
// 	let date = new Date().toTimeString();
// 	console.info(date);
// 	s3.putObject(date)
// 		.then(result => {
// 			console.info(result);
// 			res.status(201).json(result);
// 		})
// 		.catch(err => next(err));

// 	// res.status(200).send('Hello World');
// });

// module.exports.server = sls(app);

module.exports.request = async (event, context, callback) => {
	return new Promise((resolve, reject) => {
		const options = {
			path: '/',
			method: 'GET'
		};

		const req = http.request(options, res => {
			resolve('Success');
		});

		req.on('error', e => {
			reject(e.message);
		});
		req.write('');
		req.end();
	});
};

// 	callback(null, response);

// 	// Use this code if you don't use the http event with the LAMBDA-PROXY integration
// 	// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };

// module.exports.get = async (event, context, callback) => {
// 	return {
// 		statusCode: 200,
// 		body: event.body
// 	};
// };
