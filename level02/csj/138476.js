// 귤 고르기

function solution(k, tangerine) {
  const counts = tangerine.reduce((acc, cur) => {
    cur in acc ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});
  const kinds = Object.keys(counts).sort(
    (a, b) => counts[b] - counts[a]
  );

  let [sum, answer] = [0, 0];
  for (const kind of kinds) {
    if (sum < k) {
      sum += counts[kind];
      answer += 1;
    } else break;
  }
  return answer;
}
