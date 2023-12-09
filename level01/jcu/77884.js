// 약수의 개수와 덧셈

function solution(left, right) {
  return Array.from(
    { length: right - left + 1 },
    (_, idx) => left + idx
  ).reduce((acc, cur) => {
    let count = 0;

    for (let i = 1; i <= cur; i += 1) {
      if (cur % i === 0) {
        count += 1;
      }
    }

    if (count % 2 === 0) {
      acc += cur;
    } else {
      acc -= cur;
    }

    return acc;
  }, 0);
}
