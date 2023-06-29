const { shapeList } = require("./shapes.js");

function generateLogo(text, fontColor, shape, shapeColor) {
  const shapeList = new shapeList();
  const shapeInput = shapeList.createShape(shape, shapeColor);
  const shapeSVG = shapeInput.toSVG();

  const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeSVG}<text x="150" y="125" font-size="20" text-anchor="middle" fill="${fontColor}">${text}</text></svg>`;
  return svg;
}

module.exports = generateLogo;
