// 롤케이크 자르기

function solution(topping) {
  const piece1 = topping.reduce(
    (acc, cur) => (countTopping(acc, cur), acc),
    new Map()
  );
  const piece2 = new Map();
  let count = 0;

  for (const type of topping) {
    countTopping(piece2, type);
    deleteTopping(piece1, type);

    if (piece1.size === piece2.size) {
      count += 1;
    }
  }

  return count;
}

function countTopping(map, type) {
  if (map.has(type)) {
    map.set(type, map.get(type) + 1);
  } else {
    map.set(type, 1);
  }
}

function deleteTopping(map, type) {
  if (map.get(type) === 1) {
    map.delete(type);
  } else {
    map.set(type, map.get(type) - 1);
  }
}
