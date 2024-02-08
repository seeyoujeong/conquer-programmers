// 뒤에 있는 큰 수 찾기

function solution(numbers) {
  const result = Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] === numbers[i + 1]) {
      result[i] = result[i + 1];
      continue;
    }
    while (stack.length > 0 && numbers[i] >= stack.at(-1))
      stack.pop();
    if (stack.length > 0) result[i] = stack.at(-1);

    stack.push(numbers[i]);
  }

  return result;
}
