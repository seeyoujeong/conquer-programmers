// 폰캣몬

function solution(nums) {
  const dividedBy2 = nums.length / 2;
  const nonDuplicateNums = new Set(nums).size;

  return dividedBy2 > nonDuplicateNums ? nonDuplicateNums : dividedBy2;
}
