// 모음사전

function solution(words) {
  const dictionary = [];

  const addWord = (currentWord, dep) => {
    if (dep <= 5) {
      dictionary.push(currentWord);

      for (const char of ["A", "E", "I", "O", "U"]) {
        addWord(currentWord + char, dep + 1);
      }
    }
  };

  addWord("", 0);

  return dictionary.indexOf(words);
}
