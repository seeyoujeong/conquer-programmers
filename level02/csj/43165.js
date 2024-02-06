// 타겟 넘버

function solution(numbers, target) {
  let result = 0;
  const makeNumber = (current, index) => {
    if (index === numbers.length) {
      if (current === target) result += 1;
      return current;
    }
    makeNumber(current + numbers[index], index + 1);
    makeNumber(current - numbers[index], index + 1);
  };

  makeNumber(0, 0);
  return result;
}
