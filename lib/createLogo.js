const inquirer = require("inquirer");
const fs = require("fs");
const generateLogo = require("./generateLogo");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to five characters",
    validate: (input) => input.length <= 5 || "No more than five characters!",
  },
  {
    type: "input",
    name: "fontColor",
    message: "Enter font color(keyword or hexadecimal",
  },
  {
    type: "list",
    name: "shape",
    message: "Select a shape for your logo",
    choices: ["circle", "square", "triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter shape color(keyword or hexadecimal",
  },
];

async function createLogo() {
  const answers = await inquirer.createPromptModule(questions);
  const { text, fontColor, shape, shapeColor } = answers;
  const logo = generateLogo(answers);
  fs.writeFileSync("logo.svg", logo);
}

module.exports = createLogo;
