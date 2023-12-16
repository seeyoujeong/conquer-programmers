// 둘만의 암호

function solution(s, skip, index) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  const skipedAlphabet = [...ALPHABET].filter((char) => !skip.includes(char));

  return [...s].reduce(
    (acc, cur) =>
      acc +
      skipedAlphabet[
        (skipedAlphabet.indexOf(cur) + index) % skipedAlphabet.length
      ],
    ""
  );
}
