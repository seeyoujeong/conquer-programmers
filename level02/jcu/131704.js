// 택배상자

function solution(order) {
  const container = Array.from({ length: order.length }, (_, idx) => idx + 1);
  let subContainer = [];
  let [orderIdx, containerIdx, count] = [0, 0, 0];

  while (count !== order.length) {
    if (order[orderIdx] === container[containerIdx]) {
      orderIdx += 1;
      containerIdx += 1;
      count += 1;
    } else if (order[orderIdx] === subContainer.at(-1)) {
      orderIdx += 1;
      subContainer.pop();
      count += 1;
    } else if (order[orderIdx] < subContainer.at(-1)) {
      break;
    } else {
      subContainer.push(container[containerIdx]);
      containerIdx += 1;
    }
  }

  return count;
}
