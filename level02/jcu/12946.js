// 하노이의 탑

function solution(n) {
  const recordMove = (num, from, through, to) => {
    if (num === 1) {
      return [[from, to]];
    }

    let result = [];
    result = [...result, ...recordMove(num - 1, from, to, through)];
    result.push([from, to]);
    result = [...result, ...recordMove(num - 1, through, from, to)];
    return result;
  };

  return recordMove(n, 1, 2, 3);
}
