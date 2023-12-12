// 카드 뭉치

function solution(cards1, cards2, goal) {
  for (const word of goal) {
    if (cards1[0] !== word && cards2[0] !== word) {
      return "No";
    }

    if (cards1[0] === word) {
      cards1.shift();
    }

    if (cards2[0] === word) {
      cards2.shift();
    }
  }

  return "Yes";
}
