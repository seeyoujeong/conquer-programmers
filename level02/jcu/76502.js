// 괄호 회전하기

function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    s = i === 0 ? s : s.slice(1) + s.at(0);

    if (checkBracketString(s)) count += 1;
  }

  return count;
}

function checkBracketString(string) {
  const stack = [];
  const bracketObject = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const bracket of string) {
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      stack.push(bracket);
    } else {
      if (bracketObject[bracket] !== stack.at(-1)) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
}
