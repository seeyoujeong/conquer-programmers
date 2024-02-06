// k진수에서 소수 개수 구하기

function solution(n, k) {
  const numbers = n.toString(k).split('0');

  return numbers.filter((number) => {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }).length;
}
