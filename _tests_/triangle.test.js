// import { TestScheduler } from "jest-cli";
import Triangle from "./../src/triangle.js";

describe('Triangle', () => {
  test('should correctly create a triangle object with three lengthn make and equilateral trangle' , () => {
    const equiTriangle  = new Triangle (5,5,5);
   expect(equiTriangle.checkType()).toEqual("equilateral triangle");
    // expect(triangle.side1).toEqual(2);
    // expect(triangle.side2).toEqual(4);
    // expect(triangle.side3).toEqual(5);
  });
});