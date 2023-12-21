// 이진 변환 반복하기

function solution(s) {
  let count = 0;
  let zero = 0;
  let str = s;
  while (str !== '1') {
    let prev = str;
    count += 1;

    str = prev.replaceAll('0', '');
    zero += prev.length - str.length;
    str = str.length.toString(2);
  }

  return [count, zero];
}
 