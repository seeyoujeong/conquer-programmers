// 두 큐 합 같게 만들기

function solution(queue1, queue2) {
  const numbers = [...queue1, ...queue2];

  let sum1 = queue1.reduce((sum, num) => sum + num, 0);
  let sum2 = queue2.reduce((sum, num) => sum + num, 0);

  let start1 = 0;
  let start2 = queue1.length;

  let count = 0;

  while (start1 < start2) {
    if (sum1 === sum2) return count;
    if (sum1 < sum2) {
      sum1 += numbers[start2];
      sum2 -= numbers[start2++];
    } else {
      sum1 -= numbers[start1];
      sum2 += numbers[start1++];
    }
    count += 1;
  }
  return -1;
}
