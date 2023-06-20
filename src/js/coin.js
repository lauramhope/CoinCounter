//Buisiness Logic

// export default function CoinCounter(initialValue) {
//   this.initialValue = initialValue;
  // const quarterValue = 0.25;
  // const dimeValue = 0.10;
  // const nickelValue = 0.05;
  // const pennyValue = 0.01;

//   this.numOfQuarters = 0;
//   this.numOfDimes = 0;
//   this.numOfNickels = 0;
//   this.numOfPennies = 0;
// }

const coinCounter = function(amount, quartersAmount, dimesAmount, nickelsAmount, penniesAmount) {

  if (isNaN(amount)) {
    console.log("error, amount is not a number.")
    return;
  } else if (amount >= 0.25) {
    quartersAmount = quartersAmount+1;
    console.log(amount);
    // console.log(quartersAmount);
    return coinCounter((amount - 0.25), quartersAmount, 0, 0, 0);
  } else if (amount >= 0.10 && amount < 0.25) {
    dimesAmount = dimesAmount+1;
    console.log(dimesAmount);
    return coinCounter((amount - 0.10), quartersAmount, dimesAmount, 0, 0);
  } else if (amount >= 0.05 && amount < 0.10) {
    nickelsAmount = nickelsAmount+1;
    console.log(nickelsAmount);
    return coinCounter((amount - 0.05), quartersAmount, dimesAmount, nickelsAmount, 0);
  } else if (amount < 0.05 && amount > 0) {
    penniesAmount =penniesAmount+1;
    console.log(penniesAmount);
    return coinCounter((amount - 0.01), quartersAmount, dimesAmount, nickelsAmount, penniesAmount);
  } else if (amount === 0) {
  console.log(quartersAmount);
  console.log(dimesAmount);
  console.log(nickelsAmount);
  console.log(penniesAmount);
  return penniesAmount;
  }
}



function coinCounter(amount) {
  if (isNaN(amount)) {
    return 'enter a number';
  } else if (amount === 0) {
    return "no change";
  } else if (amount / 0.25 >= 1) {
    const quarters = Math.floor(amount / 0.25);
    return `${quarters} quarters ` + coinCounter(amount % 0.25);
  } else if (amount / 0.10 >= 1) {
    const dimes = Math.floor(amount / 0.10);
    return `${dimes} dimes ` + coinCounter(amount % 0.10);
  } else if (amount / 0.05 >= 1) {
    const nickels = Math.floor(amount / 0.05);
    return `${nickels} nickels ` + coinCounter(amount % 0.05);
  } else if (amount / 0.01 >= 1) {
    const pennies = Math.floor(amount / 0.01);
    return `${pennies} pennies ` + coinCounter(amount % 0.01);
  } else {
    return "";
  }
}

function coinCounterClosure(amount){
  let result = [];
  return function quartersCounter(){
    result.push(Math.floor(amount / 0.25));
    amount = amount % 0.25;
    return function dimesCounter(){
      result.push(Math.floor(amount / 0.10));
      amount = amount % 0.10;
      return function nickelsCounter(){
        result.push(Math.floor(amount / 0.05));
        amount = amount % 0.05;
        return function penniesCounter(){
          result.push(Math.floor(amount / 0.01));
          amount = amount % 0.01;
          return result;
        }
      }
    }
  }
}
