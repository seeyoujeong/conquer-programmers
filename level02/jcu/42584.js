// 주식가격

function solution(prices) {
  const result = Array(prices.length)
    .fill(0)
    .map((_, idx) => prices.length - idx - 1);
  const stack = [];

  for (let i = 0; i < prices.length; i += 1) {
    while (stack.length !== 0 && prices[i] < prices[stack.at(-1)]) {
      const index = stack.pop();
      result[index] = i - index;
    }

    stack.push(i);
  }

  return result;
}
