// 숫자 변환하기

function solution(x, y, n) {
  if (x === y) {
    return 0;
  }

  let calculatedList = [x];
  let calculatedObject = { [x]: 0 };

  while (calculatedList.length !== 0) {
    let nextCalculatedList = [];

    for (const number of calculatedList) {
      for (const nextNumber of [number + n, number * 2, number * 3]) {
        if (nextNumber > y || calculatedObject[nextNumber]) {
          continue;
        }

        if (nextNumber === y) {
          return calculatedObject[number] + 1;
        }

        calculatedObject[nextNumber] = calculatedObject[number] + 1;
        nextCalculatedList.push(nextNumber);
      }
    }

    calculatedList = nextCalculatedList;
  }

  return -1;
}
