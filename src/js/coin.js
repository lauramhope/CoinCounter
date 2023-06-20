// //Buisiness Logic


  // CoinCounter using recursion

export const coinCounterRecursion = (amount, quarters = 0, dimes = 0, nickels = 0, pennies = 0) => {
  if (isNaN(amount)) {
    return;
  }

  if (amount === 0) {
    return [quarters, dimes, nickels, pennies];
  }

  if (amount >= 25) {
    quarters += 1;
    const newAmount = amount - 25;
    return coinCounterRecursion(newAmount, quarters, dimes, nickels, pennies);
  } 

  if (amount >= 10 && amount < 25) {
    dimes += 1;
    const newAmount = amount - 10;
    return coinCounterRecursion(newAmount, quarters, dimes, nickels, pennies);
  }

  if (amount >= 5 && amount < 10) {
    nickels += 1;
    const newAmount = amount - 5;
    return coinCounterRecursion(newAmount, quarters, dimes, nickels, pennies);
  }

  if (amount >= 1 && amount < 5) {
    pennies += 1;
    const newAmount = amount - 1;
    return coinCounterRecursion(newAmount, quarters, dimes, nickels, pennies);
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
          result.push(Math.round(amount / 0.01));
          amount = amount % 0.01;
          return result;
        }
      }
    }
  }
}
