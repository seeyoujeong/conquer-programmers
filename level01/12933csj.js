// 정수 내림차순으로 배치하기

function solution(n) {
  const answerStr = [...n.toString()].sort().reverse().join('');
  return Number(answerStr);
}
