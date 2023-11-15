// 평균 구하기

function solution(arr) {
  const length = arr.length;
  return arr.reduce((avr, num) => avr + num / length, 0);
}
