// 가장 가까운 같은 글자

function solution(s) {
  const prevIndexes = {};

  return [...s].map((char, idx) => {
    const result = Object.hasOwn(prevIndexes, char)
      ? idx - prevIndexes[char]
      : -1;

    prevIndexes[char] = idx;

    return result;
  });
}
