// 택배상자

function solution(order) {
  const main = Array.from({ length: order.length }, (_, i) => order.length - i);
  const sub = [];

  let result = 0;
  for (const box of order) {
    if (sub.length && sub.at(-1) === box) {
      sub.pop();
      result += 1;
      continue;
    }
    while (main.length && main.at(-1) !== box) {
      sub.push(main.pop());
    }
    if (main.at(-1) === box) {
      main.pop();
      result += 1;
    } else break;
  }
  return result;
}
