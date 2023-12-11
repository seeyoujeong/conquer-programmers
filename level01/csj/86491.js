// 최소직사각형

function solution(sizes) {
  const changedSizes = sizes.map(([w, h]) =>
    w >= h ? [w, h] : [h, w]
  );
  return (
    Math.max(...changedSizes.map(([w]) => w)) *
    Math.max(...changedSizes.map(([, h]) => h))
  );
}
