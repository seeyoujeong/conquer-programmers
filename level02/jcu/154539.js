// 뒤에 있는 큰 수 찾기

function solution(numbers) {
  const result = Array(numbers.length).fill(-1);
  const indexStack = [];

  for (let i = 0; i < numbers.length; i += 1) {
    while (indexStack.length !== 0 && numbers[indexStack.at(-1)] < numbers[i]) {
      result[indexStack.pop()] = numbers[i];
    }

    indexStack.push(i);
  }

  return result;
}
