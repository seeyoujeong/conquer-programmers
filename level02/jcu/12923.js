// 숫자 블록

function solution(begin, end) {
  let result = [];

  for (let i = begin; i <= end; i += 1) {
    const block = i === 1 ? 0 : installBlock(i);
    result.push(block);
  }

  return result;
}

function installBlock(num) {
  let result = [];

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      if (num / i > 10_000_000) {
        result.push(i);
        continue;
      } else {
        result.push(num / i);
      }
      break;
    }
  }

  return result.length > 0 ? Math.max(...result) : 1;
}
