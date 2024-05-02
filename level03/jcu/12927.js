// 야근 지수

function solution(n, works) {
  works.sort((a, b) => a - b);

  for (let i = 0; i < n; i += 1) {
    let idx = findMaxIndex(works, works.at(-1));

    if (works[idx] === 0) break;
    works[idx] -= 1;
  }

  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}

function findMaxIndex(arr, target) {
  let left = 0;
  let right = arr.length;
  let middle;

  while (left < right) {
    middle = Math.floor((left + right) / 2);

    if (target <= arr[middle]) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return left;
}
