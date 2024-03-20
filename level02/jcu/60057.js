// 문자열 압축

function solution(s) {
  return Array.from({ length: s.length }, (_, idx) => idx + 1).reduce(
    (acc, cur) => Math.min(acc, compressString(s, cur).length),
    s.length
  );
}

function compressString(str, num) {
  let result = "";
  let prevStr = [];
  const compressFn = (arr) => `${arr.length === 1 ? "" : arr.length}${arr[0]}`;

  for (let i = 0; i < str.length; i += num) {
    const value = str.slice(i, i + num);

    if (prevStr.length > 0 && prevStr.at(-1) !== value) {
      result += compressFn(prevStr);
      prevStr = [];
    }

    prevStr.push(value);
  }

  if (prevStr.length > 0) {
    result += compressFn(prevStr);
  }

  return result;
}
