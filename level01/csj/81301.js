// 숫자 문자열과 영단어

function solution(s) {
  const numberWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const chars = [...s];
  let word = '';
  let result = '';

  while (chars.length) {
    const char = chars.shift();
    if (!isNaN(char)) {
      result += char;
      continue;
    }
    const nextNumber = numberWords.indexOf(word + char);
    if (nextNumber >= 0) {
      result += `${nextNumber}`;
      word = '';
    } else {
      word += char;
    }
  }
  return Number(result);
}
