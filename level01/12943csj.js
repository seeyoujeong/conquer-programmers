// 콜라츠 추측

function solution(num) {
  let count = 0;
  while (count++ <= 500) {
    if (num % 2 === 0) num = num / 2;
    else num = num * 3 + 1;
    if (num === 1) return count;
  }
  return -1;
}
