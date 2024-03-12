// 수식 최대화
function solution(expression) {
  const existingOperators = getExistingOperators(expression);
  const priorities = getAllPriority(existingOperators);
  const expressionToArray = expression.match(/[0-9]+|[-+*]/g);
  const results = priorities.map((priority) =>
    calcWithPriority(priority, expressionToArray)
  );

  return Math.max(...results);
}

function calcWithPriority(priority, expression) {
  let array = [...expression];

  for (const operator of priority) {
    while (true) {
      const idx = array.indexOf(operator);

      if (idx === -1) break;

      array.splice(idx - 1, 3, calc(array[idx - 1], operator, array[idx + 1]));
    }
  }

  return Math.abs(array[0]);
}

function calc(num1, operator, num2) {
  num1 = Number(num1);
  num2 = Number(num2);

  switch (operator) {
    case "+": {
      return num1 + num2;
    }
    case "-": {
      return num1 - num2;
    }
    case "*": {
      return num1 * num2;
    }
  }
}

function getExistingOperators(expression) {
  let result = [];

  for (const operator of ["+", "-", "*"]) {
    if (expression.includes(operator)) {
      result.push(operator);
    }
  }

  return result;
}

function getAllPriority(operators) {
  let result = [];
  let visited = Array(operators.length).fill(false);

  const dfs = (arr, dep) => {
    if (dep === 0) {
      result.push(arr);
      return;
    }

    for (let i = 0; i < operators.length; i += 1) {
      if (!visited[i]) {
        visited[i] = true;
        dfs([...arr, operators[i]], dep - 1);
        visited[i] = false;
      }
    }
  };

  dfs([], operators.length);

  return result;
}
