import CoinCounter from '../src/js/coin.js';

describe('CoinCounter', () => {

  test('should correctly create a coin object with an initial value', () => {
    const coinCounter = new CoinCounter(0.25);
    expect(coinCounter.initialValue).toEqual(0.25);
  });
  test('should correctly determine the number of quarters', () => {
    const coinCounter = new CoinCounter(0.25);
    expect(coinCounter.numOfQuarters).toEqual(1);
  });
  test('should correctly determine the number of dimes', () => {
    const coinCounter = new CoinCounter(0.10);
    expect(coinCounter.numOfDimes).toEqual(1);
  });
  test('should correctly determine the number of nickels', () => {
    const coinCounter = new CoinCounter(0.05);
    expect(coinCounter.numOfNickels).toEqual(1);
  });
  test('should correctly determine the number of pennies', () => {
    const coinCounter = new CoinCounter(0.01);
    expect(coinCounter.numOfPennies).toEqual(1);
  });
  
})


// describe('Triangle', () => {

//   test('should correctly create a triangle object with three lengths', () => {
//     const triangle = new Triangle(2,4,5);
//     expect(triangle.side1).toEqual(2);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).toEqual(5);
//   });
//   test('should correctly determine whether three lengths are not a triangle', () => {
//     const notTriangle = new Triangle(3,9,22);
//     expect(notTriangle.checkType()).toEqual("not a triangle");
//   });
//   test('should correctly determine whether three lengths make a scalene triangle', () => {
//     const scalTriangle = new Triangle(4,5,7)
//     expect(scalTriangle.checkType()).toEqual("scalene triangle");
//   });
//   test('should correctly determine whether three lengths make an isosceles triangle', () => {
//     const isoscTriangle = new Triangle(5,5,7)
//     expect(isoscTriangle.checkType()).toEqual("isosceles triangle");
//   });
//   test('should correctly determine whether three lengths make an equilateral triangle', () => {
//     const equiTriangle = new Triangle(5,5,5)
//     expect(equiTriangle.checkType()).toEqual("equilateral triangle");
//   });
// });