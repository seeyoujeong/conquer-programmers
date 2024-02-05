// 연속된 부분 수열의 합

function solution(sequence, k) {
  let result = [0, sequence.length - 1];
  let sum = sequence[0];
  let [left, right] = [0, 0];

  while (left < sequence.length && right < sequence.length) {
    if (sum === k) {
      if (right - left < result[1] - result[0]) {
        result = [left, right];
      }
    }

    if (sum < k || left === right) {
      right += 1;
      sum += sequence[right];
    } else {
      sum -= sequence[left];
      left += 1;
    }
  }

  return result;
}
