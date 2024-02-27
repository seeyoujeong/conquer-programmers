// 줄 서는 방법

function solution(n, k) {
  let result = [];
  let people = Array(n)
    .fill(1)
    .map((num, idx) => num + idx);
  const getIndex = (arr) => {
    let fac = 1;

    for (let i = 1; i < arr.length; i += 1) {
      fac *= i;
    }

    const idx = Math.floor((k - 1) / fac);
    k = k % fac;

    return idx;
  };

  for (let i = 1; i <= n; i += 1) {
    const idx = getIndex(people);
    result.push(people.splice(idx, 1)[0]);
  }

  return result;
}
