// 두 정수 사이의 합

function solution(a, b) {
  // const [start, end] = a<b ? [a,b] : [b,a];
  // return Array.from({length: end-start+1}, (_, i) => i+start).reduce((sum, x) => sum+x, 0)
  let answer = 0;
  const [start, end] = a < b ? [a, b] : [b, a];
  for (let x = start; x <= end; x++) {
    answer += x;
  }
  return answer;
}
