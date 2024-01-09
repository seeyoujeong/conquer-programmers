// 피로도

function solution(k, dungeons) {
  let count = 0;
  const visited = Array(dungeons.length).fill(false);
  const explore = (fatigue, dep) => {
    count = Math.max(count, dep);

    for (let i = 0; i < dungeons.length; i += 1) {
      if (fatigue >= dungeons[i][0] && !visited[i]) {
        visited[i] = true;
        explore(fatigue - dungeons[i][1], dep + 1);
        visited[i] = false;
      }
    }
  };

  explore(k, 0);

  return count;
}
