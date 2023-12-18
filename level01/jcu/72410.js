// 신규 아이디 추천

function solution(new_id) {
  const recommendedID = new_id
    .toLowerCase()
    .replace(/[^\w-.]/g, "")
    .replace(/[.]{2,}/g, ".")
    .replace(/^[.]|[.]$/, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/[.]$/, "");

  return recommendedID.padEnd(3, recommendedID.at(-1));
}
