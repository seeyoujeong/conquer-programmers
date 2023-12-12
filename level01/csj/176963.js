// 추억 점수

function solution(name, yearning, photo) {
  const memory = name.reduce(
    (acc, cur, i) => ({ [cur]: yearning[i], ...acc }),
    {}
  );
  return photo.map((people) =>
    people.reduce((sum, name) => sum + (memory[name] ?? 0), 0)
  );
}
