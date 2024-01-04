// 의상

function solution(clothes) {
  const clothesObject = clothes.reduce(
    (acc, [_, type]) => ((acc[type] = type in acc ? acc[type] + 1 : 1), acc),
    {}
  );

  return (
    Object.values(clothesObject).reduce((acc, cur) => acc * (cur + 1), 1) - 1
  );
}
