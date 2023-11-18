import { type Circle } from "./Circle";
import { type Square } from "./Square";

// Visitor interface
export interface ShapeVisitor {
  visitCircle(circle: Circle): void;
  visitSquare(square: Square): void;
}
