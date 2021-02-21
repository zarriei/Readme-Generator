// TODO: Create a function that returns a license badge based on which license is passed in
// Creating a licnese badge and a link to the legal notice of the selceted License. 


function renderLicenseBadge(license) {
  var badges = license;
  if (license === "Apache-2.0") {
    badges = "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "MIT") {
    badges = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "MPL-2.0") {
    badges = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "gpl-3.0") {
    badges = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

  } return badges;
};

// TODO: Create a function to generate markdown for README 
function generateMarkdown({ title, description, installation, usage, tribute, badges, email, github }) {
  return `
# <h1 align="center"> ${title}</h1>

## Badges
    
${renderLicenseBadge(badges)}

## Description

    ${description}

 

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

    ${installation}

## Usgae

    ${usage}

## Contribution

    ${tribute}

## License

This application uses the ${badges} license

## Test


## Questions

    If you have any questions please feel free to email me or contact me on Github.  My email is ${email}, my github username is ${github}, follow the links below for them.

[Email](${email})
[Github](https://github.com/${github})
    `
}

module.exports = generateMarkdown;

