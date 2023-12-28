// 다음 큰 숫자

function solution(n) {
  let answer = n;
  while (answer++) {
    if (
      n.toString(2).split('1').length ===
      answer.toString(2).split('1').length
    )
      return answer;
  }
}
