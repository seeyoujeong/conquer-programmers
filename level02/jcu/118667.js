// 두 큐 합 같게 만들기

function solution(queue1, queue2) {
  const maxAttempt = (queue1.length + queue2.length) * 2;
  let attempt = 0;
  let sum1 = sum(queue1);
  let sum2 = sum(queue2);
  let idx1 = 0;
  let idx2 = 0;

  while (attempt <= maxAttempt) {
    if (sum1 === sum2) {
      return attempt;
    }

    if (sum1 > sum2) {
      [queue1, queue2, idx1, sum1, sum2] = task(
        queue1,
        queue2,
        idx1,
        sum1,
        sum2
      );
    } else {
      [queue2, queue1, idx2, sum2, sum1] = task(
        queue2,
        queue1,
        idx2,
        sum2,
        sum1
      );
    }

    attempt += 1;
  }

  return -1;
}

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

function task(queue1, queue2, idx, sum1, sum2) {
  const num = queue1[idx];
  idx += 1;
  sum1 -= num;
  sum2 += num;
  queue2.push(num);

  return [queue1, queue2, idx, sum1, sum2];
}
