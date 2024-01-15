// 의상

function solution(clothes) {
  const closet = {};
  clothes.forEach(([_, kind]) => {
    if (kind in closet) closet[kind] += 1;
    else closet[kind] = 1;
  });

  return (
    Object.values(closet).reduce((acc, cur) => acc * (cur + 1), 1) - 1
  );
}
