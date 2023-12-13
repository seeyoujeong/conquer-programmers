// 소수 만들기

function solution(nums) {
  const maxSum = nums
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((sum, num) => sum + num, 0);
  const isPrime = Array(maxSum + 1).fill(true);

  for (let i = 2; i < Math.sqrt(maxSum) + 1; i++) {
    if (!isPrime[i]) continue;
    for (let j = i; i * j <= maxSum; j++) {
      isPrime[i * j] = false;
    }
  }

  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (isPrime[nums[i] + nums[j] + nums[k]]) result += 1;
      }
    }
  }

  return result;
}
