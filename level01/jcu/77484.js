// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  let matchedNumber = 0;
  let zeroNumber = 0;

  lottos.forEach((num) => {
    if (win_nums.includes(num)) {
      matchedNumber += 1;
    }

    if (num === 0) {
      zeroNumber += 1;
    }
  });

  return [getRank(matchedNumber + zeroNumber), getRank(matchedNumber)];
}

function getRank(number) {
  switch (number) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
}
