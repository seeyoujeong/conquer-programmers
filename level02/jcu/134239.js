// 우박수열 정적분

function solution(k, ranges) {
  const collatz = collatzConjecture(k);

  let widthList = [];
  for (let i = 1; i < collatz.length; i += 1) {
    widthList.push((collatz[i - 1] + collatz[i]) / 2);
  }

  let cumulativeSumList = [0];
  for (let i = 0; i < widthList.length; i += 1) {
    cumulativeSumList.push(cumulativeSumList[i] + widthList[i]);
  }

  return ranges.map(([start, end]) => {
    end += collatz.length - 1;

    if (end < start) return -1;

    return cumulativeSumList[end] - cumulativeSumList[start];
  });
}

function collatzConjecture(num) {
  let result = [num];

  while (num > 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }

    result.push(num);
  }

  return result;
}
