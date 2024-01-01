// 연속 부분 수열 합의 개수

function solution(elements) {
  const sumOfSequenceSet = new Set();
  const circule = elements.concat(elements);

  for (let len = 1; len < elements.length; len += 1) {
    for (let start = 0; start < elements.length; start += 1) {
      sumOfSequenceSet.add(
        circule.slice(start, start + len).reduce((acc, cur) => acc + cur, 0)
      );
    }
  }

  return sumOfSequenceSet.size + 1;
}
