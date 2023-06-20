// Recursive function logic for Roman Numerals


export const RomanNumeral = (number, romanNum = "") => {

  if (isNaN(number)) {
    console.log("please enter a number");
    return;
  }

  if (number > 3999) {
    console.log("please enter a number lower than 3999");
    return;
  }

  if (number === 0) {
    console.log(romanNum);
    return romanNum;
  }

  if (number >= 1000 && number < 3999) {
    number -= 1000;
    romanNum = romanNum.concat("M");
    return RomanNumeral(number, romanNum);
  }

  if (number >= 900 && number < 1000) {
    number -= 900;
    romanNum = romanNum.concat("CM");
    return RomanNumeral(number, romanNum);
  }

  if (number >= 500 && number < 900) {
    number -= 500;
    romanNum = romanNum.concat("D");
    return RomanNumeral(number, romanNum);
  }

  if (number >= 400 && number < 500) {
    number -= 400;
    romanNum = romanNum.concat("CD");
    return RomanNumeral(number, romanNum);
  }

  if (number >= 100 && number < 400) {
    number -= 100;
    romanNum = romanNum.concat("C");
    return RomanNumeral(number, romanNum);
  }

  if (number >= 90 && number < 100) {
    number -= 90;
    romanNum = romanNum.concat("XC");
    return RomanNumeral(number, romanNum);
  }

  if (number >= 50 && number < 90) {
    number -= 50;
    romanNum = romanNum.concat("L");
    return RomanNumeral(number, romanNum);
  }

  if (number >= 40 && number < 50) {
    number -= 40;
    romanNum = romanNum.concat("XL");
    return RomanNumeral(number, romanNum);
  }

  if (number >= 10 && number < 40) {
    number -= 10;
    romanNum = romanNum.concat("X");
    return RomanNumeral(number, romanNum);
  }

  if (number === 9) {
    number -= 9;
    romanNum = romanNum.concat("IX");
    return RomanNumeral(number, romanNum);
  }

  if (number >= 5 && number < 9) {
    number -= 5;
    romanNum = romanNum.concat("V");
    return RomanNumeral(number, romanNum);
  }

  if (number === 4) {
    number -= 4;
    romanNum = romanNum.concat("IV");
    return RomanNumeral(number, romanNum);
  }

  if (number >= 1 && number < 4) {
    number -= 1;
    romanNum = romanNum.concat("I");
    return RomanNumeral(number, romanNum);
  }
}