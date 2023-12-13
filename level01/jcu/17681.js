// [1차] 비밀지도

function solution(n, arr1, arr2) {
  return arr1
    .map((number, idx) => convertBinary(number | arr2[idx], n))
    .map((binary) => binary.replaceAll("1", "#").replaceAll("0", " "));
}

function convertBinary(number, length) {
  return number.toString(2).padStart(length, "0");
}
