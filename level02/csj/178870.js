// 연속된 부분 수열의 합

function solution(sequence, k) {
  let [start, end] = [0, 0];
  let sum = sequence[0];
  const results = [];

  while (end < sequence.length) {
    if (sum <= k) {
      if (sum === k) results.push([start, end]);
      sum += sequence[++end];
    } else {
      sum -= sequence[start++];
    }
  }
  results.sort((a, b) => {
    const diff = a[1] - a[0] - (b[1] - b[0]);
    return diff === 0 ? a[0] - b[0] : diff;
  });
  return results[0];
}
