// [3차] n진수 게임

function solution(n, t, m, p) {
  let nString = '';
  let number = 0;
  while (nString.length < t * m) {
    nString += (number++).toString(n).toUpperCase();
  }

  return [...nString].reduce((acc, cur, i) => {
    if ((i % m) + 1 === p && acc.length < t) return acc + cur;
    return acc;
  }, '');
}
