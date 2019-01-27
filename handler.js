'use strict';
const AWS = require('aws-sdk');

let bucketName = 'node-serverless-bucket';
const keyName = 'hello_world';
const date = new Date().toTimeString();
const bucketPromise = new AWS.S3({ apiVersion: 'v1-test' })
	.createBucket({ bucket: bucketName })
	.promise();

bucketPromise
	.then(function(data) {
		let objectParams = {
			Bucket: bucketName,
			Key: keyName,
			Body: { history: date }
		};
		let uploadPromise = new AWS.S3({ apiVersion: 'v1-test' })
			.putObject(objectParams)
			.promise();
		uploadPromise.then(function(data) {
			console.log('Success' + bucketName + '/' + keyName);
		});
	})
	.catch(function(err) {
		console.error(err, err.stack);
	});

// exports.handler = (event, context, callback) => {
// 	const number1 = event.Number1;
// 	const number2 = event.Number2;
// 	let sum = number1 + number2;
// 	let product = number1 * number2;
// 	let difference = Math.abs(number1 - number2);
// 	let quotient = number1 / number2;
// 	callback(null, {
// 		Number1: number1,
// 		Number2: number2,
// 		Sum: sum,
// 		Product: product,
// 		Difference: difference,
// 		Quotient: quotient
// 	});
// };

// module.exports.submit = async (event, context, callback) => {
// 	const response = {
// 		statusCode: 200,
// 		body: JSON.stringify({
// 			message: `Current time ${new Date().toTimeString()}`,
// 			input: { test: 'some value' }
// 		})
// 	};

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
