import { type Shape } from "./Shape";
import { type ShapeVisitor } from "./ShapeVisitor";

// Square class
export class Square implements Shape {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  accept(visitor: ShapeVisitor): void {
    visitor.visitSquare(this);
  }
}
