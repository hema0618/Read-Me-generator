// intial inquirer by typing "npm  install inquirer"

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");

//takes a function follow the common error-first callback style, i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises
const writeFileAsync = util.promisify(fs.writeFile);
//var readMeData = fs.readFile("./utils/generateMarkdown.js", "utf-8", function(error){
// if (error) {
//   return console.log(error);
//}
//});
//addition();
//creates array of questions
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please enter a description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "What are the steps required to install your project?",
            name: "Installation"
        },
        {
            type: "input",
            message: "Provide instructions for use.",
            name: "Usage"
        },

        {
            type: "list",
            message: "Select license",
            name: "License",
            choices: [
                "MIT",
                "GVL-GPL 3.0",
                "APACHE 2.0",
                "BSD 3",
                "None"
            ]

        },
        {
            type: "input",
            message: "Did you collaberate with anyone? If so provide github links for yours and any contributors.",
            name: "contributors"
        }, {
            type: "input",
            message: "Provide and examples of your project and let us know how to run them?.",
            name: "test"
        },
      
        {
            type: "input",
            message: "Your Github URL?",
            name: "Username"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "Email"
        }
    ]);
}

function generateMarkdownLang(response) {
    return `
# ${response.title}
* Table of Contents
* [Questions](#questions)
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#test)
* [Github](#github)
* [Email](#email)
## <a name="description">Description:</a>
    ${response.description}
## <a name="license">License:</a>
    ${response.license}
## <a name="installation">Installation:</a>
    ${response.installation}
## <a name="usage">Usage:</a>
    ${response.usage}
## <a name="contributing">Contributing:</a>
    ${response.contributing}
## <a name="test">Testing:</a>
    ${response.test}
## <a name="questions">Questions:</a>
    ${response.questions} 
## <a name="github">Github URL:</a>
   $[{response.github}] (${response.github})
## <a name="Email">Email:</a>

${response.Email}
    `

};

async function init() {
    try {
        const responce = await promptUser();

        const readMe = generateMarkdownLang(responce);

        await writeFileAsync("README.md", readMe);
        console.log("Readme file created!");
    } catch (err) {
        console.log(err)
    }
};

init();