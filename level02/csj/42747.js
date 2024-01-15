// H-index

function solution(citations) {
  for (let h = citations.length; h >= 0; h--) {
    if (citations.filter((citation) => citation >= h).length >= h)
      return h;
  }
}
