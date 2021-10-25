// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licBadges = {
  "MIT": "https://img.shields.io/badge/License-MIT-blue.svg",
  "Unlicense": "https://img.shields.io/badge/license-Unlicense-blue.svg",
  "Apache 2.0": "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
  "GNU v3": "https://img.shields.io/badge/License-GPLv3-blue.svg",
  "BSD 3-Clause": "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg",
  "Mozilla Public License 2.0": "https://img.shields.io/badge/License-MPL%202.0-blue.svg"
}

const licLinks = {
  "MIT": "https://opensource.org/licenses/MIT",
  "Unlicense": "http://unlicense.org/",
  "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
  "GNU v3": "https://www.gnu.org/licenses/gpl-3.0",
  "BSD 3-Clause": "https://opensource.org/licenses/BSD-3-Clause",
  "Mozilla Public License 2.0": "https://opensource.org/licenses/MPL-2.0"
}


function renderLicenseBadge(license) {
  return licBadges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return licLinks[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return "[![License: " + license + "](" + renderLicenseBadge(license) + ")](" + renderLicenseLink(license) + ")"
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  data.licenseBadge = renderLicenseSection(data.license);

  return `# ${data.title}

${data.licenseBadge}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install dependencies, run the following:

\`
${data.installation}
\`

## Usage

${data.usage}

## License

This repository is licensed under the ${data.license} license.

## Contributing

${data.contribute}

## Tests

To run tests, run the following:

\`
${data.tests}
\`

## Questions

Questions about this repository? Please contact me at [${data.email}](mailto:${data.email}). View more of my work in GitHub at [${data.username}](https://github.com/${data.username}) 

`;
}

module.exports = generateMarkdown;
