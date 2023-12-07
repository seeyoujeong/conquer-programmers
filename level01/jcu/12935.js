// 제일 작은 수 제거하기

function solution(arr) {
  const minNumber = Math.min(...arr);
  const filteredArr = arr.filter((num) => num !== minNumber);
  return filteredArr.length > 0 ? filteredArr : [-1];
}
