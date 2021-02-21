// TODO: Include packages needed for this application
// the inquirer package needs to be downloaded after the JSON package.






const fs = require("fs");
const util = require("util");
const inqurier = require("inquirer");
const generateREADME = require("./generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input



const questions = () => {
    return inqurier
        .prompt([
            {
                // project title 
                type: 'input',
                message: 'What is the Project Title?',
                name: 'title',
            },
            {
                // project description
                type: 'input',
                message: 'Describe the project (why did you create this):',
                name: 'description',
            },
            {
                // app installation
                type: 'input',
                message: 'How can a user install this app?',
                name: 'installation',
            },
            {
                // app usage
                type: 'input',
                message: 'What is the USE of this?',
                name: 'usage',
            },
            {
                // license badges
                type: 'list',
                message: 'Select ',
                choices: ['Apache-2.0',
                    'MIT',
                    'MPL-2.0',
                    'gpl-3.0',
                    
                ],
                name: 'badges',
            },
            {
                // contributions
                type: 'input',
                message: 'Who contributed to this project?',
                name: 'tribute',
            },
            {
                // testing method
                type: 'input',
                message: 'How can one test this product?',
                name: 'test',
            },
            {
                // email
                type: 'input',
                message: 'Enter email for follow up questions:',
                name: 'email',
            },
            {
                // Github
                type: 'input',
                message: 'What is your github username?',
                name: 'github',
            },
        ])
}

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then(response => {
            const readme = generateREADME(response);
            writeFileAsync("readMe.md", readme)
                .then(() => console.log("Success!"))
                .catch(error => console.log(error));
        })
}
// Function call to initialize app
init();

















