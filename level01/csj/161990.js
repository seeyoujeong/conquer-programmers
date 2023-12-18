// 바탕화면 정리

function solution(wallpaper) {
  return wallpaper.reduce(
    ([lux, luy, rdx, rdy], line, i) => {
      if (!line.includes('#')) return [lux, luy, rdx, rdy];

      const [startX, startY] = [i, line.indexOf('#')];
      const [endX, endY] = [i + 1, line.lastIndexOf('#') + 1];

      return [
        Math.min(lux, startX),
        Math.min(luy, startY),
        Math.max(rdx, endX),
        Math.max(rdy, endY),
      ];
    },
    [wallpaper.length, wallpaper[0].length, 0, 0]
  );
}
