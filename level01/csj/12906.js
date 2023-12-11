// 같은 숫자는 싫어

function solution(arr) {
  let index = 0;
  const result = [arr[0]];
  while (index++ < arr.length - 1) {
    const number = arr[index];
    if (result.at(-1) !== number) {
      result.push(number);
    }
  }
  return result;
}
