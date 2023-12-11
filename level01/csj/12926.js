// 시저 암호

function solution(s, n) {
  const maxUpper = 'Z'.charCodeAt();
  const maxLower = 'z'.charCodeAt();

  return [...s]
    .map((char) => {
      if (char === ' ') return char;
      const code = char.charCodeAt();
      if (code + n > maxLower) {
        return String.fromCharCode(code + n - 26);
      }
      if (code + n > maxUpper && code <= maxUpper) {
        return String.fromCharCode(code + n - 26);
      }
      return String.fromCharCode(code + n);
    })
    .join('');
}
