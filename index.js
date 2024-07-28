// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { renderLicenseBadge, renderLicenseLink, renderLicenseSection, generateMarkdown } = require('./utils/generateMarkdown');

// Creates an array of questions for user input
const questions = ["What is the project title?", "What is the project description?", "What are the installation instructions?", "What is the usage information?", "What are the contribution guidelines?", "What are the testing instructions?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => 
    err ? console.log(err) : console.log('File created')
  );
}

// Initialize app
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: questions[0],
      },
      {
        type: 'input',
        name: 'description',
        message: questions[1],
      },
      {
        type: 'input',
        name: 'installationInstructions',
        message: questions[2],
      },
      {
        type: 'input',
        name: 'usageInformation',
        message: questions[3],
      },
      {
        type: 'input',
        name: 'contributionGuidelines',
        message: questions[4],
      },
      {
        type: 'input',
        name: 'testingInstructions',
        message: questions[5],
      },
    ])
    .then((data) => {
      const fileName = 'README.md';
      writeToFile(fileName, data);
    });
}

init();