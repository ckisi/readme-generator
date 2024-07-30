// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Boost':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'Eclipse':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    case 'GNU GPL':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'IBM':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    default:
      return '';
  }
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Boost':
      return 'https://www.boost.org/LICENSE_1_0.txt';
    case 'Eclipse':
      return 'https://opensource.org/licenses/EPL-1.0';
    case 'GNU GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'IBM':
      return 'https://opensource.org/licenses/IPL-1.0';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    default:
      return '';
  }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
return `## License
This application is covered under the ${license} license.
${licenseLink}`
}

// Generates markdown for README
function generateMarkdown(data) {
const licenseBadge = renderLicenseBadge(data.license);
const licenseSection = renderLicenseSection(data.license);

return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license)

## Installation
${data.installationInstructions}

## Usage
${data.usageInformation}

## Contribution
${data.contributionGuidelines}

## Testing
${data.testingInstructions}

## Questions
GitHub username: ${data.username}
GitHub link: https://github.com/${data.username}
For additional questions, email me at ${data.email}

${licenseSection}`;
}

// Exporting functions to my main js file
module.exports = { 
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
}
