// intial inquirer by typing "npm  install inquirer"

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const addition = require("./utils/generateMarkdown");
//takes a function follow the common error-first callback style, i.e. taking a (err, value) => ... callback as the last argument, and returns a version that returns promises
//const writeFileAsync = util.promisify(fs.writeFile);
//var readMeData = fs.readFile("./utils/generateMarkdown.js", "utf-8", function(error){
  //  if (error) {
    //    return console.log(error);
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
            type: "checkbox",
            message: "Please select a license.",
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "None"
            ],
            name: "license"
        }, 
    ])
};
// function to write README file
// function generateMarkdownLang(response) {
// }
// Start sth eprompt to the user and returns either created successfully message or error
//async function init() {
 //   const response = await promptUser();
   // try {
     //   console.log("Index.js: " + generateMarkdown(response));
        // const readMe = readMeData;
       // await writeFileAsync("README.md", generateMarkdown(response));
        //console.log("Readme file created!");
    //} catch (err) {
      //  console.log(err)
   // }
//}
// function call to initialize program
function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if (err) {
          throw err;
        }
      });
    }


// function to initialize program
function init() {
    prompt(questions).then(answers => {
        
        const response = generateMarkdown(answers);
        console.log(answers);
       
        writeToFile("README.md", response);
      
    })
    

}

init();

/*function generateMarkdown(response) {
    return `
    # ${response.title}
    # Table of Contents
    - [Description] (#description)
    - [License](#license)
    ## Description
        ${response.description}
    ## License:
        ${response.license}
    ## Installation
        ${response.installation}
    ## Usage
        ${response.contributing}
    ## Testing
        ${response.test}
  `;
  }
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

init();*/