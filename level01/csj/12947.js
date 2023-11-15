// 하샤드 수

function solution(x) {
  const sum = [...x.toString()].reduce(
    (sum, str) => sum + Number(str),
    0
  );
  return x % sum === 0;
}
