// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
      case "Academic Free License v3.0":
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        break;
        case "MIT":
          return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
          break;
          case "GNU General Public License v3.0":
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
            break;
          case "Mozilla Public License 2.0":
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
              break;
      default:
        return ``
        break;
    }}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === null){
    return "  "
  }
  return `\n\n## License\n${renderLicenseBadge(license)}`
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license != "NONE") {
    licenseSection += "## License\n";
    licenseSection += renderLicenseLink(license)
    licenseSection += renderLicenseBadge(license)
  }
  return licenseSection;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, contribution, license, tests, username, email}) 
{
  return `# Title: ${title} 
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Inquirer](https://img.shields.io/badge/Inquirer-0d0d0d?style=for-the-badge&logo=inquirer&logoColor=white)](https://www.npmjs.com/package/inquirer)

  ## Description: ${description} 

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](Test) 
  - [Questions](#questions)

  ## Installation:
   ${installation}

  ## Usage: 
  ${usage}

  ## License: 
  ${renderLicenseLink(license)}

  ## Contribution:
   ${contribution}

  ## Tests: 
  ${tests}

  ## Questions :

  ## View my [GitHub](https://github.com/${username}) profile
  ## Email me at ${email}`;

}

module.exports = generateMarkdown;
