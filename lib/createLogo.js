const inquirer = require("inquirer");

inquirer
  .prompt([
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
  ])
  .then((text, fontColor, shape, shapeColor) => {});
