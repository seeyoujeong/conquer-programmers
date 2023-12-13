// 기사단원의 무기

function solution(number, limit, power) {
  return Array.from({ length: number }, (_, idx) => idx + 1).reduce(
    (acc, cur) => {
      const count = countDivisor(cur);

      acc += count > limit ? power : count;

      return acc;
    },
    0
  );
}

function countDivisor(num) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      count += 1;
      if (num / i !== i) {
        count += 1;
      }
    }
  }

  return count;
}
