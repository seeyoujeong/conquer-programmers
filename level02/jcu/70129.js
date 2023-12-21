// 이진 변환 반복하기

function solution(s) {
  let executeCount = 0;
  let zeroCount = 0;

  while (s !== "1") {
    const x = s.replaceAll("0", "").length;
    zeroCount += s.length - x;

    s = x.toString(2);
    executeCount += 1;
  }

  return [executeCount, zeroCount];
}
