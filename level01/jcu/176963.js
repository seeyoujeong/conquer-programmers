// 추억 점수

function solution(name, yearning, photo) {
  return photo.map((people) =>
    people.reduce((score, person) => {
      if (name.includes(person)) {
        score += yearning[name.indexOf(person)];
      }

      return score;
    }, 0)
  );
}
