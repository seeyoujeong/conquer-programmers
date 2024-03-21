// 혼자 놀기의 달인

function solution(cards) {
  cards.unshift(0);
  const visited = Array(cards.length).fill(false);
  let results = [];

  for (let i = 1; i < cards.length; i += 1) {
    if (visited.slice(1).every((v) => v)) break;
    let num = i;
    let count = 0;

    while (!visited[num]) {
      visited[num] = true;
      num = cards[num];
      count += 1;
    }

    results.push(count);
  }

  results.sort((a, b) => b - a);

  return results.length === 1 ? 0 : results[0] * results[1];
}
