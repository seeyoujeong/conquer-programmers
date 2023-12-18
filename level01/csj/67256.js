// 키패드 누르기

function solution(numbers, hand) {
  const keyPad = [
    [1, 4, 7, '*'],
    [2, 5, 8, 0],
    [3, 6, 9, '#'],
  ];

  const findKeyIndex = (number) => {
    for (let i = 0; i < 3; i++) {
      const keyIndex = keyPad[i].indexOf(number);
      if (keyIndex >= 0) return [i, keyIndex];
    }
  };

  let [left, right] = ['*', '#'];
  return numbers
    .map((number) => {
      const [keyCol, keyRow] = findKeyIndex(number);
      if (keyCol === 0) {
        left = number;
        return 'L';
      }
      if (keyCol === 2) {
        right = number;
        return 'R';
      }
      const [leftCol, leftRow] = findKeyIndex(left);
      const [rightCol, rightRow] = findKeyIndex(right);

      const leftDiff =
        Math.abs(keyCol - leftCol) + Math.abs(keyRow - leftRow);
      const rightDiff =
        Math.abs(keyCol - rightCol) + Math.abs(keyRow - rightRow);

      if (
        leftDiff < rightDiff ||
        (leftDiff === rightDiff && hand === 'left')
      ) {
        left = number;
        return 'L';
      }
      if (
        leftDiff > rightDiff ||
        (leftDiff === rightDiff && hand === 'right')
      ) {
        right = number;
        return 'R';
      }
    })
    .join('');
}
