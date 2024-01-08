// 연속 부분 수열의 합의 개수

function solution(elements) {
  const circular = elements.concat(elements);
  const results = new Set();
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      results.add(sum);
    }
  }

  return results.size;
}
