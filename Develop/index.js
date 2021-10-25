const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMd = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "Enter your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter description of your project",
        name: "description"
    },
    {
        type: "list",
        message: "Select an Open Source License?",
        name: "license",
        choices: [
            "MIT",
            "Unlicense",
            "Apache 2.0",
            "GNU v3",
            "BSD 3-Clause",
            "Mozilla Public License 2.0"
        ]
    },
    {
        type: "input",
        message: "Enter the command to install dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "Enter the command to run tests?",
        name: "tests",
        default: "npm run test"
    },
    {
        type: "input",
        message: "Enter additional usage information:",
        name: "usage"
    },
    {
        type: "input",
        message: "Describe contribution guidelines:",
        name: "contribute"
    },
];

const promptUser = () => {
    return inquirer
        .prompt(questions);
}


// function to write README file
const writeToFile = (fileName, data) => {
    var dir = './tmp';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    return writeFileAsync(fileName, data);
}


// function to initialize program
const init = async () => {
    try {
        console.log("Welcome to the README generator.\nPlease answer the following questions:")

        const answers = await promptUser();

        const fileContent = generateMd(answers);

        await writeToFile("./tmp/README.md", fileContent);

        console.log("README file written to ./tmp/README.md successfully");

    } catch (err) {
        console.error("Error creating README. File not created.");
        console.log(err);
    }
}

// function call to initialize program
init();
