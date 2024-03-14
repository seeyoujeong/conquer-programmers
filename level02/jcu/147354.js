// 테이블 해시 함수

function solution(data, col, row_begin, row_end) {
  const sortedData = data
    .map((row) => [...row])
    .sort((a, b) =>
      a[col - 1] === b[col - 1] ? b[0] - a[0] : a[col - 1] - b[col - 1]
    );

  return getBitwiseXOR(sortedData, row_begin, row_end);
}

function getSumOfRemainders(data, row) {
  return data[row - 1].reduce((acc, cur) => acc + (cur % row), 0);
}

function getBitwiseXOR(data, begin, end) {
  let result = getSumOfRemainders(data, begin);

  for (let i = begin + 1; i <= end; i += 1) {
    result = result ^ getSumOfRemainders(data, i);
  }

  return result;
}
