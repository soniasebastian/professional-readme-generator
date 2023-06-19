// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give a short description of the project?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are steps required for installation?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please give instructions for usage of the project?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to choose for this project?',
      choices: ["Academic Free License v3.0","MIT","GNU General Public License v3.0", "Mozilla Public License 2.0", "none"]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please add contribution guidelines to this project?'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions that you would like to add?'
      },
    {
        type: 'input',
        name : 'username',
        message: 'What is your github username ?'
    },
    {
        type: 'input',
        name : 'email',
        message: 'What is your email address?'
    }
   
  ];

// TODO: Create a function to write README file
 function writeFileSync (fileName, data){
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err?console.log(err): console.log(`${data}`));
 }

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data)=>{writeFileSync('README.md',(data))
    })
};
    


// Function call to initialize app
init();
