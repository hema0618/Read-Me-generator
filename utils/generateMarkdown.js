// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
   ${response.github}
## <a name="Email">Email:</a>
${response.Email}
`;
}


module.exports = generateMarkdown;
