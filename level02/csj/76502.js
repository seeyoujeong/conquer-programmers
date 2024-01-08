// 괄호 회전하기

const isValidBracket = (s) => {
  const brackets = {
    ']': '[',
    ')': '(',
    '}': '{',
  };
  const stack = [];
  for (const char of s) {
    if (char in brackets && stack.at(-1) === brackets[char]) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};

function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (isValidBracket(s.substr(i) + s.substr(0, i))) answer++;
  }
  return answer;
}
