// 덧칠하기

function solution(n, m, section) {
  let result = 0;
  while (section.length) {
    let paint = section[0];
    let count = 0;
    result += 1;
    while (count++ < m) {
      if (section[0] === paint++) section.shift();
    }
  }
  return result;
}
