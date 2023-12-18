// 둘만의 암호

function solution(s, skip, index) {
  return [...s]
    .map((char) => {
      let code = char.charCodeAt();
      let next = index;
      while (next-- && code++) {
        if (code > 122) code -= 26;
        if (skip.includes(String.fromCharCode(code))) {
          next++;
        }
      }
      return String.fromCharCode(code);
    })
    .join('');
}
