// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)
## Description
${data.Description}
## Installation 
${data.Installation}
## Usage 
${data.Usage}
## License
${data.License}
## Contributors
${data.Contributors}
## Test
${data.Test}
## Questions
Contact me:
`;
}

module.exports = generateMarkdown;
