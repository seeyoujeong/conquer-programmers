// 문자열 나누기

function solution(s) {
  let stringCount = 0;
  let currentChar = "";
  let currentCharCount = 0;
  let otherCharCount = 0;

  for (let char of s) {
    if (currentChar === "") {
      currentChar = char;
      currentCharCount = 1;
      otherCharCount = 0;
      continue;
    }

    if (currentChar === char) {
      currentCharCount += 1;
    }

    if (currentChar !== char) {
      otherCharCount += 1;
    }

    if (currentCharCount === otherCharCount) {
      currentChar = "";
      stringCount += 1;
    }
  }

  return currentChar.length > 0 ? stringCount + 1 : stringCount;
}
