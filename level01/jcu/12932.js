// 자연수 뒤집어 배열로 만들기

function solution(n) {
  return [...String(n)].map(Number).reverse();
}
