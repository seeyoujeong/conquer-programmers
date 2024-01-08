// 할인 행사

function solution(want, number, discount) {
  const products = {};
  discount.slice(0, 10).forEach((name) => {
    products[name] = products[name] ? products[name] + 1 : 1;
  });

  let answer = 0;
  let day = 0;

  while (day <= discount.length - 10) {
    if (want.every((name, i) => number[i] <= products[name]))
      answer += 1;

    const curr = discount[day];
    const next = discount[day + 10];

    products[curr] -= 1;
    products[next] = next in products ? products[next] + 1 : 1;
    day += 1;
  }

  return answer;
}
