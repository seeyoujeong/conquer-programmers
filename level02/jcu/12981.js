// 영어 끝말잇기

function solution(n, words) {
  const stack = [];

  for (let i = 0; i < words.length; i += 1) {
    if (
      (stack.length > 0 && stack.at(-1).at(-1) !== words[i].at(0)) ||
      stack.includes(words[i])
    ) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    stack.push(words[i]);
  }

  return [0, 0];
}
