// 디펜스 게임

function solution(n, k, enemy) {
  let [left, right] = [0, enemy.length];
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    const curEnemy = enemy.slice(0, mid).sort((a, b) => b - a);
    let pass = k;

    const remainingEnemy = curEnemy.reduce(
      (acc, cur) => (pass > 0 ? ((pass -= 1), acc) : acc + cur),
      0
    );

    if (n - remainingEnemy >= 0 && pass >= 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return left - 1;
}
