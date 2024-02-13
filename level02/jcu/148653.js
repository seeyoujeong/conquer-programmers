// 마법의 엘리베이터

function solution(storey) {
  let result = Infinity;
  let queue = [[storey, 0]];

  while (queue.length > 0) {
    const [number, count] = queue.shift();

    if (number < 10) {
      result = Math.min(result, number + count, 10 - number + 1 + count);
      continue;
    }

    const remainder = number % 10;
    const nextNumber = (number - remainder) / 10;

    if (remainder === 0) {
      queue.push([nextNumber, count]);
    } else {
      queue.push([nextNumber, count + remainder]);
      queue.push([nextNumber + 1, count + (10 - remainder)]);
    }
  }

  return result;
}
