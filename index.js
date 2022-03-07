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
    name: 'Contributors',
    message: 'Name of the persons to contribute to this project',
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

function writeToFile(fileName, data) {

  fs.writeFile(fileName + '.md', generateMarkdown(data), function (err) {
    if (err) throw err;
    console.log('Saved!');
});

}


function init() {}

// Function call to initialize app
init();
