// 짝지어 제거하기

function solution(s) {
  const stack = [];

  for (const char of s) {
    if (char === stack.at(-1)) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
