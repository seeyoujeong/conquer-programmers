// 구명 보트

function solution(people, limit) {
  let answer = 0;
  people.sort((x, y) => x - y);

  while (people.length) {
    let sum = people.pop();

    if (sum + people.at(-1) <= limit) {
      sum += people.pop();
    } else if (sum + people[0] <= limit) {
      sum += people.shift();
    }

    answer += 1;
  }
  return answer;
}
