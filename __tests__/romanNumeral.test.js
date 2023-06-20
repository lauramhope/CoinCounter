import { RomanNumeral } from '../src/js/romanNumeral.js';

describe('RomanNumeral', () => {

  test('should correctly convert the numbers 1, 5, 10, 50, 100, and 1000 to their respective roman numerals', () => {
    expect(RomanNumeral(1)).toEqual("I");
    expect(RomanNumeral(5)).toEqual("V");
    expect(RomanNumeral(10)).toEqual("X");
    expect(RomanNumeral(50)).toEqual("L");
    expect(RomanNumeral(100)).toEqual("C");
    expect(RomanNumeral(1000)).toEqual("M");
  });

  test('should correctly convert the numbers 2136 to MMCXXXVI', () => {
    expect(RomanNumeral(2136)).toEqual("MMCXXXVI");
  });

});