import { coinCounterRecursion } from '../src/js/coin.js';

describe('coinCounterRecursion', () => {

  test('should correctly calculate the numbers of coins needed for a cent amount', () => {
    const coinTest = coinCounterRecursion(256);
    expect(coinTest).toEqual([10, 0, 1, 1]);
  });
  
});