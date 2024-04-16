// 큰 수 만들기

const findMaxNum = (numList, start, end) => {
  let [maxNum, maxIndex] = [-1, -1];
  for (let i = start; i <= end; i++) {
    if (numList[i] > maxNum) {
      maxNum = numList[i];
      maxIndex = i;
      if (maxNum === '9') break;
    }
  }
  return [maxNum, maxIndex];
};

function solution(number, k) {
  let start = 0;
  let size = number.length - k;
  let answer = '';

  while (size > 0) {
    const [maxNum, maxIndex] = findMaxNum(
      number,
      start,
      number.length - size--
    );

    answer += maxNum;
    start = maxIndex + 1;
  }
  return answer;
}
