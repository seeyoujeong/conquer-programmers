// 2개 이하로 다른 비트

function solution(numbers) {
  return numbers.map((number) => {
    const numBit = number.toString(2);
    const length = numBit.length;

    const zeroIndex = numBit.lastIndexOf('0');
    const oneIndex = numBit.indexOf('1', zeroIndex);

    if (oneIndex < 0) return number + 1;
    return (
      number + 2 ** (length - zeroIndex - 1) - 2 ** (length - oneIndex - 1)
    );
  });
}
