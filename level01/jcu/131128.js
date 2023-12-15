// 숫자 짝꿍

function solution(X, Y) {
  const xNumbers = Array(10).fill(0);
  const yNumbers = Array(10).fill(0);

  for (let i = 0; i < Math.max(X.length, Y.length); i += 1) {
    xNumbers[X[i]] += 1;
    yNumbers[Y[i]] += 1;
  }

  const resultNumber = xNumbers
    .map((num, idx) => Math.min(num, yNumbers[idx]))
    .reduce((acc, cur, idx) => [...acc, ...String(idx).repeat(cur)], [])
    .sort((a, b) => b - a)
    .join("");

  if (resultNumber.length === 0) {
    return "-1";
  }

  return resultNumber[0] === "0" ? "0" : resultNumber;
}
