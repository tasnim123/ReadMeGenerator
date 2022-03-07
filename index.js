const inquirer = require('inquirer');
const fs = require('fs');
const fileName = process.argv[2];

const questions = [
  {
    name: 'name',
    message: 'What is the project name?',
    type: 'input'
},
{
    name: 'about',
    message: 'What kind of project it is(Front or Back)? ',
    type: 'input'
},
{
    name: 'requirments',
    message: 'What are the requirments to run this project? ',
    type: 'input'
},
{
    name: 'Run information',
    message: 'How can you run this project?',
    type: 'input'
},
{
    name: 'contribution-guidelines',
    message: 'Enter the contribution guidelines: ',
    type: 'input'
},
{
    name: 'test',
    message: 'Enter the test instructions: ',
    type: 'input'
},
{
    message: "Select the lisence",
    name: 'lisence',
    choices: ['Apache 2.0 License', 'BSD 3-Clause License', 'BSD 2-Clause License'],
    type: 'list'
},
{
    name: 'github-username',
    message: 'Enter the GitHub username: ',
    type: 'input'
},
{
    name: 'email',
    message: 'Enter the email address: ',
    type: 'input'
},
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


function init() {}

// Function call to initialize app
init();
