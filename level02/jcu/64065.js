// 튜플

function solution(s) {
  return Array.from(
    new Set(
      JSON.parse(s.replaceAll(/[{}]/g, (char) => (char === "{" ? "[" : "]")))
        .sort((a, b) => a.length - b.length)
        .flat()
    )
  );
}
