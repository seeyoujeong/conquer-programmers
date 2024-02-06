// [3차] 압축

function solution(msg) {
  const dictionary = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + 65)
  );
  let i = 0;
  const result = [];
  while (i < msg.length) {
    let word = msg[i];
    let index = dictionary.indexOf(word);
    while (dictionary.includes(word)) {
      index = dictionary.indexOf(word);
      word += msg[++i];
    }
    dictionary.push(word);
    result.push(index + 1);
  }
  return result;
}
