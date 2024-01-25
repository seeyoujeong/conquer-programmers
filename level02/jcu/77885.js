// 2개 이하로 다른 비트

function solution(numbers) {
  return numbers.map((number) => {
    if (number % 2 === 0) {
      return number + 1;
    }

    let binaryToArray = ["0", ...number.toString(2)];
    const lastIndexOfZero = binaryToArray.lastIndexOf("0");

    binaryToArray[lastIndexOfZero] = "1";
    binaryToArray[lastIndexOfZero + 1] = "0";

    return parseInt(binaryToArray.join(""), 2);
  });
}
