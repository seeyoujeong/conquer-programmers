// 멀리 뛰기

function solution(n) {
  const jumps = Array(n + 1).fill(0);
  let count = 0;

  while (count++ < n) {
    if (count <= 2) {
      jumps[count] = count;
    } else {
      jumps[count] = (jumps[count - 2] + jumps[count - 1]) % 1234567;
    }
  }

  return jumps[n];
}
