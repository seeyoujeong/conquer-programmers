// 두 개 뽑아서 더하기

function solution(numbers) {
  const total = numbers.reduce((total, number, i) => {
    const sums = numbers
      .slice(i + 1)
      .reduce((sums, num) => [...sums, number + num], []);
    return [...sums, ...total];
  }, []);
  return [...new Set(total)].sort((a, b) => a - b);
}
