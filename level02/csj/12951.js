// JadenCase 문자열 만들기

function solution(s) {
  return [...s]
    .map((char, i) => {
      if (char === ' ') return char;
      if (i === 0 || s[i - 1] === ' ') return char.toUpperCase();
      return char.toLowerCase();
    })
    .join('');
}
