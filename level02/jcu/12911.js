// 다음 큰 숫자

function solution(n) {
  for (let i = n + 1; ; i += 1) {
    if (countOne(i) === countOne(n)) {
      return i;
    }
  }
}

function countOne(number) {
  return number.toString(2).match(/1/g).length;
}
