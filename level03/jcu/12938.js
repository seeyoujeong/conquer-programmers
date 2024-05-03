function solution(n, s) {
  if (n > s) return [-1];

  let result = [];

  while (n > 1) {
    const temp = Math.floor(s / n);
    result.push(temp);
    s -= temp;
    n -= 1;
  }

  result.push(s);
  result.sort((a, b) => a - b);

  return result;
}
