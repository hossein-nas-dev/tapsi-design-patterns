import { Circle } from "./Circle";
import { AreaVisitor } from "./ShapeAreaVisitor";
import { Square } from "./Square";

// Client code
const circle = new Circle(5);
const square = new Square(4);

// Use Visitor pattern to calculate areas
const areaVisitor = new AreaVisitor();

circle.accept(areaVisitor);
square.accept(areaVisitor);
