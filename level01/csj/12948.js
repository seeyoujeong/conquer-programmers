// 핸드폰 번호 가리기

function solution(phone_number) {
  return [...phone_number]
    .map((num, i) => (i < phone_number.length - 4 ? '*' : num))
    .join('');
}
