// 삼총사

function solution(number) {
  let count = 0;

  for (let i = 0; i < number.length; i += 1) {
    for (let j = i + 1; j < number.length; j += 1) {
      for (let k = j + 1; k < number.length; k += 1) {
        if (number[i] + number[j] + number[k] === 0) {
          count += 1;
        }
      }
    }
  }

  return count;
}
