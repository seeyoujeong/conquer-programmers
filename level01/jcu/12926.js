// 시저 암호

function solution(s, n) {
  const zCodePoint = "z".codePointAt();
  const ZCodePoint = "Z".codePointAt();

  return [...s]
    .map((char) => {
      if (char === " ") {
        return char;
      }

      const codePoint = char.codePointAt();

      if (codePoint + n > zCodePoint) {
        return String.fromCodePoint(codePoint + n - 26);
      }

      if (codePoint + n > ZCodePoint && codePoint <= ZCodePoint) {
        return String.fromCodePoint(codePoint + n - 26);
      }

      return String.fromCodePoint(codePoint + n);
    })
    .join("");
}
