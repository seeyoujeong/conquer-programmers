// 문자열 나누기

function solution(s) {
  let word = s;
  let answer = 0;

  while (word) {
    const firstChar = word[0];
    let [i, same, diff] = [0, 0, 0];

    for (i; i < word.length; i++) {
      if (word[i] === firstChar) same++;
      else diff++;
      if (same === diff) break;
    }
    answer += 1;
    word = word.slice(i + 1);
  }

  return answer;
}
