// 피보나치 수

function solution(n) {
  const fibos = [0, 1];
  let number = 1;
  while (number++ < n) {
    fibos[number] = (fibos[number - 1] + fibos[number - 2]) % 1234567;
  }
  return fibos.at(-1);
}
