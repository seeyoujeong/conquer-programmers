// 단어 변환

function solution(begin, target, words) {
  let count = 0;
  let stack = [begin];
  let visited = Array(words.length).fill(false);

  while (stack.length > 0) {
    const word = stack.pop();

    if (word === target) return count;

    for (let i = 0; i < words.length; i += 1) {
      if (!visited[i] && checkWord(word, words[i])) {
        stack.push(words[i]);
        visited[i] = true;
      }
    }

    count += 1;
  }

  return 0;
}

function checkWord(word1, word2) {
  let count = 0;

  for (let i = 0; i < word1.length; i += 1) {
    if (word1[i] !== word2[i]) {
      count += 1;
    }
  }

  return count === 1;
}
