// 할인 행사

function solution(want, number, discount) {
  let count = 0;
  const wantString = want
    .map((product, index) => product.repeat(number[index]))
    .sort()
    .join("");

  for (let i = 0; i < discount.length - 9; i += 1) {
    const discountString = discount
      .slice(i, i + 10)
      .sort()
      .join("");

    if (wantString === discountString) count += 1;
  }

  return count;
}
