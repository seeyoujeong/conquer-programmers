// 수박수박수박수박수박수?

function solution(n) {
  return Array.from({ length: n })
    .map((_, i) => (i % 2 ? '박' : '수'))
    .join('');
}
