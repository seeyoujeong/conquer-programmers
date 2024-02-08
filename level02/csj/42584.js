// 주식가격

function solution(prices) {
  const result = Array(prices.length).fill(0);

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      result[i] += 1;
      if (prices[i] > prices[j]) break;
    }
  }

  return result;
}
