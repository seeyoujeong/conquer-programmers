// 최소직사각형

function solution(sizes) {
  const minSizes = [];
  const maxSizes = [];

  for (const [w, h] of sizes) {
    minSizes.push(Math.min(w, h));
    maxSizes.push(Math.max(w, h));
  }

  return Math.max(...minSizes) * Math.max(...maxSizes);
}
