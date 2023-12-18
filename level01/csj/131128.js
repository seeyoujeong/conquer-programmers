// 숫자 짝꿍

function solution(X, Y) {
  const xNums = [...X].sort();
  const yNums = [...Y].sort();

  const sameNums = [];
  while (xNums.length && yNums.length) {
    while (xNums.at(-1) < yNums.at(-1)) {
      yNums.pop();
    }
    while (xNums.at(-1) > yNums.at(-1)) {
      xNums.pop();
    }
    while (xNums.at(-1) === yNums.at(-1)) {
      if (!(xNums.length && yNums.length)) break;
      xNums.pop();
      sameNums.push(yNums.pop());
    }
  }

  if (sameNums.length === 0) return '-1';
  if (sameNums.every((num) => num === '0')) return '0';
  return sameNums.join('');
}
