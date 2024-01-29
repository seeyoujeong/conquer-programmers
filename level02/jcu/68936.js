// 쿼드압축 후 개수 세기

function solution(arr) {
  let result = [0, 0];
  const divideSquare = (arr) => {
    if (arr.every((row) => row.every((value) => value === 0))) {
      result[0] += 1;
      return;
    }
    if (arr.every((row) => row.every((value) => value === 1))) {
      result[1] += 1;
      return;
    }

    const len = arr.length;
    let square1 = arr.splice(0, len / 2);
    let square2 = square1.map((row) => row.splice(len / 2, len / 2));
    let square3 = arr;
    let square4 = square3.map((row) => row.splice(len / 2, len / 2));

    for (const square of [square1, square2, square3, square4]) {
      divideSquare(square);
    }
  };

  divideSquare(arr);

  return result;
}
