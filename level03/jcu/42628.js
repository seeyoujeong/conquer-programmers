// 이중우선순위큐

function solution(operations) {
  let queue = [];

  for (const oper of operations) {
    const [command, data] = oper.split(" ");

    if (command === "I") {
      queue.push(Number(data));
    } else if (command === "D") {
      if (data === "1") {
        queue.sort((a, b) => a - b);
      } else if (data === "-1") {
        queue.sort((a, b) => b - a);
      }

      queue.pop();
    }
  }

  return queue.length === 0 ? [0, 0] : [Math.max(...queue), Math.min(...queue)];
}
