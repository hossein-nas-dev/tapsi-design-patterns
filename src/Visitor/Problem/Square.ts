import { type Shape } from "./Shape";

// Square class
export class Square implements Shape {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  calculateArea(): void {
    console.log("Calculating area of square");
    // Bad calculation logic
    const area = this.side * this.side;
    console.log("Area: " + area);
  }
}
