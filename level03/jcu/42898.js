// 등굣길

function solution(m, n, puddles) {
  let dp = Array.from({ length: n + 1 }, (_) => Array(m + 1).fill(0));
  dp[1][1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (puddles.find(([x, y]) => x === j && y === i)) continue;

      dp[i][j] += (dp[i - 1][j] + dp[i][j - 1]) % 1_000_000_007;
    }
  }

  return dp.at(-1).at(-1);
}
