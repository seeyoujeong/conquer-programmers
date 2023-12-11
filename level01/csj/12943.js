// 콜라츠 추측

function solution(num) {
  let count = 0;
  while (num !== 1 && count <= 500) {
    count += 1;
    if (num % 2) {
      num = num * 3 + 1;
    } else {
      num /= 2;
    }
  }
  return num === 1 ? count : -1;
}
