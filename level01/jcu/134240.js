// 푸드 파이트 대회

function solution(food) {
  const arrangedFood = food
    .slice(1)
    .reduce(
      (acc, cur, idx) => acc + String(idx + 1).repeat(Math.floor(cur / 2)),
      ""
    );

  return arrangedFood + "0" + [...arrangedFood].reverse().join("");
}
