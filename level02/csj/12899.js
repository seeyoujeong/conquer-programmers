// 124 나라의 숫자

function solution(n) {
  const onetwofour = ['1', '2', '4'];

  const makeOneTwoFour = (number, current = '') => {
    const nextNumber = parseInt((number - 1) / 3);
    const nextStr = onetwofour[(number - 1) % 3] + current;

    if (nextNumber === 0) return nextStr;

    return makeOneTwoFour(nextNumber, nextStr);
  };

  return makeOneTwoFour(n);
}
