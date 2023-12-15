// 체육복

function solution(n, lost, reserve) {
  const clothes = Array(n + 1).fill(1);

  for (let i = 0; i < Math.max(lost.length, reserve.length); i += 1) {
    clothes[lost[i]] -= 1;
    clothes[reserve[i]] += 1;
  }

  for (let i = 1; i < clothes.length; i += 1) {
    if (clothes[i] === 0) {
      if (clothes[i - 1] === 2) {
        clothes[i] = 1;
        clothes[i - 1] = 1;
      } else if (clothes[i + 1] === 2) {
        clothes[i] = 1;
        clothes[i + 1] = 1;
      }
    }
  }

  return clothes.slice(1).filter((num) => num !== 0).length;
}
