// 체육복

function solution(n, lost, reserve) {
  const noSuit = lost.filter((num) => !reserve.includes(num)).sort();
  const moreSuit = reserve.filter((num) => !lost.includes(num));

  return (
    n -
    noSuit.reduce((acc, cur) => {
      const prevMore = moreSuit.indexOf(cur - 1);
      const nextMore = moreSuit.indexOf(cur + 1);
      if (prevMore >= 0) {
        moreSuit.splice(prevMore, 1);
        return acc - 1;
      }
      if (nextMore >= 0) {
        moreSuit.splice(nextMore, 1);
        return acc - 1;
      }
      return acc;
    }, noSuit.length)
  );
}
