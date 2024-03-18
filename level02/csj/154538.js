// 숫자 변환하기

function solution(x, y, n) {
  const queue = [[y, 0]];
  const nums = new Set([y]);

  while (queue.length > 0) {
    const [num, depth] = queue.shift();
    if (num === x) return depth;

    const nextNums = [num - n, num / 2, num / 3];
    for (const nextNum of nextNums) {
      if (nextNum < x || !Number.isInteger(nextNum)) continue;
      if (nums.has(nextNum)) continue;

      queue.push([nextNum, depth + 1]);
      nums.add(nextNum);
    }
  }

  return -1;
}
