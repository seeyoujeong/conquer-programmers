// 모음사전

function solution(word) {
  const words = [];

  const makeWords = (current) => {
    words.push(current);
    if (current.length === 5) return current;
    for (const char of ['A', 'E', 'I', 'O', 'U']) {
      makeWords(current + char);
    }
  };
  makeWords('');
  return words.indexOf(word);
}
