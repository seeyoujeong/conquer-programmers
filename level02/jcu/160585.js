// 혼자서 하는 틱택토

function solution(board) {
  let countObj = {
    O: 0,
    X: 0,
    bingoO: 0,
    bingoX: 0,
  };

  let leftDiagonal = "";
  let rightDiagonal = "";

  for (let i = 0; i < 3; i += 1) {
    let row = "";
    let column = "";

    for (let j = 0; j < 3; j += 1) {
      if (board[i][j] === "O") countObj["O"] += 1;
      if (board[i][j] === "X") countObj["X"] += 1;
      if (i === j) leftDiagonal += board[i][j];
      if ((i === 1 && j === 1) || (i === 2 && j === 0) || (i === 0 && j === 2))
        rightDiagonal += board[i][j];
      row += board[i][j];
      column += board[j][i];
    }

    if (row === "OOO") countObj["bingoO"] += 1;
    if (row === "XXX") countObj["bingoX"] += 1;
    if (column === "OOO") countObj["bingoO"] += 1;
    if (column === "XXX") countObj["bingoX"] += 1;
  }

  if (leftDiagonal === "OOO") countObj["bingoO"] += 1;
  if (leftDiagonal === "XXX") countObj["bingoX"] += 1;
  if (rightDiagonal === "OOO") countObj["bingoO"] += 1;
  if (rightDiagonal === "XXX") countObj["bingoX"] += 1;

  if (countObj["bingoO"] + countObj["bingoX"] > 2) return 0;
  if (countObj["bingoO"] === 1 && countObj["X"] >= countObj["O"]) return 0;
  if (countObj["bingoX"] === 1 && countObj["X"] < countObj["O"]) return 0;
  if (countObj["X"] > countObj["O"]) return 0;
  if (countObj["O"] > countObj["X"] + 1) return 0;

  return 1;
}
