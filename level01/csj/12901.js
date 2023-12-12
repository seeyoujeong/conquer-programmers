// 2016년

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// 날짜 차이로 구하기
function solution(a, b) {
  const base = new Date();
  base.setFullYear(2016, 0, 1);

  const current = new Date();
  current.setFullYear(2016, a - 1, b);

  const dayDiff = Math.floor(
    (current - base) / (1000 * 60 * 60 * 24)
  );
  return days[(dayDiff + 5) % 7];
}

// date 객체만 쓰기, 2016-1-1 이 실제로도 금요일이어야함
function solution2(a, b) {
  const current = new Date();
  current.setFullYear(2016, a - 1, b);

  return days[current.getDay()];
}
