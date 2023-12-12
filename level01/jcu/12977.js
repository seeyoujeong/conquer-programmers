// 소수 만들기

function solution(nums) {
  let count = 0;

  for (let i = 0; i + 2 < nums.length; i += 1) {
    for (let j = i + 1; j + 1 < nums.length; j += 1) {
      for (let k = j + 1; k < nums.length; k += 1) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          count++;
        }
      }
    }
  }

  return count;
}

function isPrime(num) {
  if (num === 1) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }
}
