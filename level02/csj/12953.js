// N개의 최소공배수

const getGcd = (x, y) => (y > 0 ? getGcd(y, x % y) : x);

function solution(arr) {
  arr.sort((a, b) => a - b);
  let result = arr[0];

  for (const num of arr) {
    if (result % num === 0) continue;
    const gcd = getGcd(result, num);
    result = gcd * (result / gcd) * (num / gcd);
  }

  return result;
}
