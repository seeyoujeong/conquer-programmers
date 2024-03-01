// 괄호 변환

function solution(p) {
  return convert(p);
}

function convert(w) {
  if (w.length === 0) {
    return w;
  }

  let [u, v] = separate(w);

  if (isCorrected(u)) {
    return u + convert(v);
  } else {
    return "(" + convert(v) + ")" + reverseP(u.slice(1, -1));
  }
}

function separate(str) {
  let u = "";
  let v = "";

  for (let i = 0; i < str.length; i += 1) {
    u += str[i];

    if (isBalanced(u)) {
      v = str.slice(i + 1);
      break;
    }
  }

  return [u, v];
}

function isCorrected(parenthesises) {
  let count = 0;

  for (const parenthesis of parenthesises) {
    if (parenthesis === "(") count += 1;
    if (parenthesis === ")") count -= 1;
    if (count < 0) return false;
  }

  return true;
}

function isBalanced(parenthesises) {
  let count = 0;

  for (const parenthesis of parenthesises) {
    if (parenthesis === "(") count += 1;
    if (parenthesis === ")") count -= 1;
  }

  return count === 0;
}

function reverseP(str) {
  return [...str].map((p) => (p === ")" ? "(" : ")")).join("");
}
