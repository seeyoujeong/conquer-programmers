// 가장 큰 수

function solution(numbers) {
  if (numbers.every((number) => number === 0)) return '0';

  const padNumber = (number) => {
    const numStr = number.toString();
    return Number(numStr.repeat(4).substring(0, 4));
  };

  return numbers.sort((a, b) => padNumber(b) - padNumber(a)).join('');
}
