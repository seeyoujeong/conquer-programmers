// H-Index

function solution(citations) {
  return citations
    .sort((a, b) => b - a)
    .filter((citation, count) => citation >= count + 1).length;
}
