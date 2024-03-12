// 롤케이크 자르기

function solution(topping) {
  const length = topping.length;

  const toppingA = {};
  const toppingB = {};

  let countA = 0;
  let countB = 0;

  const listA = [];
  const listB = [];

  for (let i = 0; i < length; i++) {
    const a = topping[i];
    const b = topping[length - i - 1];

    if (a in toppingA) {
      toppingA[a] += 1;
    } else {
      toppingA[a] = 1;
      countA += 1;
    }

    if (b in toppingB) {
      toppingB[b] += 1;
    } else {
      toppingB[b] = 1;
      countB += 1;
    }

    listA.push(countA);
    listB.push(countB);
  }

  let result = 0;
  for (let i = 0; i < listA.length; i++) {
    const countA = listA[i];
    const countB = listB[listB.length - i - 2];

    if (countA > countB) return result;
    else if (countA === countB) result += 1;
  }
}
