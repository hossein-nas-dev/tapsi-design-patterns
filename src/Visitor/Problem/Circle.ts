import { type Shape } from "./Shape";

// Circle class
export class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): void {
    console.log("Calculating area of circle");
    // Bad calculation logic
    const area = 3.14 * this.radius * this.radius;
    console.log("Area: " + area);
  }
}
