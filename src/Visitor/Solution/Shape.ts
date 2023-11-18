// Shape interface with accept method
export interface Shape {
  accept(visitor: ShapeVisitor): void;
}
