// [1차] 캐시

function solution(cacheSize, cities) {
  const cache = [];

  return cities.reduce((runtime, city) => {
    const lowerCityName = city.toLowerCase();
    const indexOfCity = cache.indexOf(lowerCityName);

    if (indexOfCity === -1) {
      runtime += 5;
      cache.push(lowerCityName);

      if (cache.length > cacheSize) {
        cache.shift();
      }
    } else {
      runtime += 1;
      cache.splice(indexOfCity, 1);
      cache.push(lowerCityName);
    }

    return runtime;
  }, 0);
}
