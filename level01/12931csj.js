function solution(n) {
  return [...n.toString()].reduce((sum, x) => sum + Number(x), 0);
}
