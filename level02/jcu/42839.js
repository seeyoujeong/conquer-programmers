// 소수 찾기

function solution(numbers) {
  numbers = [...numbers];
  let primeSet = new Set();
  let visited = Array(numbers.length).fill(false);
  const dfs = (number) => {
    if (isPrime(number) && !primeSet.has(number)) {
      primeSet.add(number);
    }

    for (let i = 0; i < numbers.length; i += 1) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(Number(String(number) + numbers[i]));
        visited[i] = false;
      }
    }
  };

  dfs(0);

  return primeSet.size;
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
