// 숫자의 표현

function solution(n) {
  let answer = 0;
  let x = 0;

  while (true) {
    const sum = ((x + 1) * x) / 2;
    if (sum >= n) return answer;
    if ((n - sum) % ++x === 0) answer += 1;
  }
}
