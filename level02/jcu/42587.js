// 프로세스

function solution(priorities, location) {
  const executionOrder = [];
  const queue = priorities.map((priority, idx) => ({
    location: idx,
    priority,
  }));

  while (queue.length > 0) {
    const maxPriority = [...queue].sort((a, b) => b.priority - a.priority)[0]
      .priority;
    const currentProcess = queue.shift();

    if (maxPriority > currentProcess.priority) {
      queue.push(currentProcess);
    } else {
      executionOrder.push(currentProcess);
    }
  }

  return (
    executionOrder.findIndex((process) => process.location === location) + 1
  );
}
