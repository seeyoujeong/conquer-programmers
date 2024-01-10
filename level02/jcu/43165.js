// 타겟 넘버

function solution(numbers, target) {
  let count = 0;
  const findTargetNumber = (sum, dep) => {
    for (let i = dep; i < numbers.length; i += 1) {
      const calculatedSum = sum - numbers[i] * 2;

      if (calculatedSum === target) {
        count += 1;
      }

      if (calculatedSum > target) {
        findTargetNumber(calculatedSum, i + 1);
      }
    }
  };

  findTargetNumber(
    numbers.reduce((acc, cur) => acc + cur, 0),
    0
  );

  return count;
}
