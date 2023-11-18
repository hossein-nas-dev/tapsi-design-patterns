import { Circle } from "./Circle";
import { Square } from "./Square";

// Client code
const circle = new Circle(5);
const square = new Square(4);

// Calculate areas without using Visitor pattern
circle.calculateArea();
square.calculateArea();
