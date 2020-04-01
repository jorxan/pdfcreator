const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');

const questions = [
	{
		question : 'what is your favorite color?',
		answers  : [ 'green', 'blue', 'pink', 'red' ]
	},
	{ question: 'what is your github username?' }
];

inquirer.prompt([
	{
		type    : 'input',
		message : questions[1],
		name    : 'username'
	},
	{
		type    : 'list',
		message : questions[0],
		choices : [ question[0].answers[0], question[0].answers[1], question[2].answers[3] ],
		name    : 'list'
	}
]);
function writeToFile(fileName, data) {}

function init() {}

init();
