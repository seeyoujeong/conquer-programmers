// 프로세스

function solution(priorities, location) {
  const queue = priorities.reduce(
    (acc, cur, i) => [...acc, [i, cur]],
    []
  );

  let order = 1;
  while (queue.length) {
    const process = queue.shift();
    if (queue.some(([, priority]) => priority > process[1])) {
      queue.push(process);
    } else {
      if (process[0] === location) {
        return order;
      }
      order += 1;
    }
  }
}
