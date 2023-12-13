// 덧칠하기

function solution(n, m, section) {
  let count = 0;
  let paintedSection = 0;

  for (const sectionNumber of section) {
    if (sectionNumber > paintedSection) {
      paintedSection = sectionNumber + m - 1;
      count += 1;
    }
  }

  return count;
}
