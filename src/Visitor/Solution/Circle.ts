import { type Shape } from "./Shape";
import { type ShapeVisitor } from "./ShapeVisitor";

// Circle class
export class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  accept(visitor: ShapeVisitor): void {
    visitor.visitCircle(this);
  }
}
