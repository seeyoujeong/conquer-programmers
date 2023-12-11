// 부족한 금액 계산하기

function solution(price, money, count) {
  const total = ((price + price * count) * count) / 2;
  return total <= money ? 0 : total - money;
}
