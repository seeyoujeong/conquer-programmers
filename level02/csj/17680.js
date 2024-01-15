// [1차] 캐시

function solution(cacheSize, cities) {
  const cache = [];
  let total = 0;

  for (const city of cities) {
    const loc = cache.indexOf(city.toLowerCase());
    if (loc >= 0) {
      total += 1;
      cache.splice(loc, 1);
    } else {
      total += 5;
    }
    cache.push(city.toLowerCase());
    if (cache.length > cacheSize) cache.shift();
  }
  return total;
}
