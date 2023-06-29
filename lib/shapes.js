class Shape {
  constructor(color) {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="50" fill="${this.color}"/>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,50 100,150 200,150" fill="${this.color}"/>`;
  }
}

class Square extends Shape {
  render() {
    return `rect x="100" y="50" width="100" height="100" fill="${this.color}"/>`;
  }
}

class shapeList {
  createShape(type, color) {
    if (type === "circle") {
      return new Circle(color);
    } else if (type === "triangle") {
      return new Triangle(color);
    } else if (type === "square") {
      return new Square(color);
    } else {
      throw new Error();
    }
  }
}
module.exports = { Circle, Triangle, Square };
