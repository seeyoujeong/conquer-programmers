// 올바른 괄호

function solution(s) {
  let count = 0;

  for (const parenthesis of s) {
    parenthesis === "(" ? count++ : count--;

    if (count < 0) return false;
  }

  return count === 0;
}
