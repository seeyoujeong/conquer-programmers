// 땅따먹기

function solution(land) {
  for (let i = 1; i < land.length; i += 1) {
    for (let j = 0; j < land[0].length; j += 1) {
      land[i][j] += Math.max(...land[i - 1].filter((_, idx) => j !== idx));
    }
  }

  return Math.max(...land.at(-1));
}
