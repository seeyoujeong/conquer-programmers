// 튜플

function solution(s) {
  const elements = s.slice(2, -2).split('},{');

  return elements
    .sort((a, b) => a.length - b.length)
    .reduce((acc, cur) => {
      const nums = cur.split(',').map(Number);
      acc.push(nums.find((num) => !acc.includes(num)));
      return acc;
    }, []);
}
