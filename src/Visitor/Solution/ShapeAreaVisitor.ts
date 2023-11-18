import { type Circle } from "./Circle";
import { type ShapeVisitor } from "./ShapeVisitor";
import { type Square } from "./Square";

// Area calculation visitor
export class AreaVisitor implements ShapeVisitor {
  visitCircle(circle: Circle): void {
    console.log("Calculating area of circle");
    const area = 3.14 * circle.radius * circle.radius;
    console.log("Area: " + area);
  }

  visitSquare(square: Square): void {
    console.log("Calculating area of square");
    const area = square.side * square.side;
    console.log("Area: " + area);
  }
}
