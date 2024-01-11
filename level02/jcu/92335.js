// k진수에서 소수 개수 구하기

function solution(n, k) {
  return n.toString(k).split(/[0]+/).filter(isPrime).length;
}

function isPrime(number) {
  number = Number(number);

  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }

  return true;
}
