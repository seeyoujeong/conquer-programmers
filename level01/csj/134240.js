// 푸드 파이트 대회

function solution(food) {
  let foods = '';
  food
    .slice(1)
    .forEach(
      (count, number) =>
        (foods += `${number + 1}`.repeat(parseInt(count / 2)))
    );
  return foods + '0' + [...foods].reverse().join('');
}
