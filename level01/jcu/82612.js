// 부족한 금액 계산하기

function solution(price, money, count) {
  const result = Array.from(
    { length: count },
    (_, idx) => price * (idx + 1)
  ).reduce((acc, cur) => acc - cur, money);

  return result > 0 ? 0 : -result;
}
