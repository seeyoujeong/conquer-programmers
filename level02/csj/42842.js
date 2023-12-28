// 카펫

function solution(brown, yellow) {
  for (let w = yellow; w * w >= yellow; w--) {
    if (yellow % w === 0) {
      const h = parseInt(yellow / w);
      if (w * 2 + h * 2 + 4 === brown) return [w + 2, h + 2];
    }
  }
}
