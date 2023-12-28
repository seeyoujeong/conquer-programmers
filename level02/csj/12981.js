// 영어 끝말잇기

function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    const [cur, prev] = [words[i], words[i - 1]];
    if (
      prev.slice(-1) !== cur[0] ||
      words.slice(0, i).includes(cur)
    ) {
      return [(i % n) + 1, parseInt(i / n) + 1];
    }
  }
  return [0, 0];
}
