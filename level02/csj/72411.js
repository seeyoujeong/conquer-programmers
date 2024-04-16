// 메뉴 리뉴얼

function solution(orders, course) {
  const ordersByCourse = course.reduce(
    (obj, cur) => ({ ...obj, [cur]: {} }),
    {}
  );

  const makeCollection = (orderList, current = '') => {
    if (orderList.length === 0) return;

    for (let i = 0; i < orderList.length; i++) {
      const next = current + orderList[i];
      makeCollection(orderList.slice(i + 1), next);

      if (!course.includes(next.length)) continue;

      const orderMap = ordersByCourse[next.length];
      if (next in orderMap) orderMap[next] += 1;
      else orderMap[next] = 1;
    }
  };

  orders.forEach((order) => {
    makeCollection([...order].sort());
  });

  let result = [];

  for (const orders of Object.values(ordersByCourse)) {
    const counts = Object.values(orders);
    if (counts.length === 0) continue;

    const maxCount = Math.max(...Object.values(orders));
    if (maxCount < 2) continue;

    result = result.concat(
      Object.keys(orders).filter((order) => {
        return orders[order] === maxCount;
      })
    );
  }

  return result.sort();
}
