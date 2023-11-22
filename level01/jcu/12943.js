// 콜라츠 추측

function solution(num) {
  for (let i = 0; i <= 500; i += 1) {
    if (num === 1) {
      return i;
    }

    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
  }

  return -1;
}
