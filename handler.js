'use strict';
// const AWS = require('aws-sdk');
const express = require('express');
const sls = require('serverless-http');
const app = express();

app.get('/', async (req, res, next) => {
	res.status(200).send('Hello World');
});

module.exports.server = sls(app);

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
