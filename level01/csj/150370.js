// 개인정보 수집 유효기간

const makeDate = (dateString) => {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  return date;
};

function solution(today, terms, privacies) {
  const todayDate = makeDate(today);

  const termMap = terms.reduce((acc, cur) => {
    const [type, month] = cur.split(' ');
    return { [type]: Number(month), ...acc };
  }, {});

  return Array.from(
    { length: privacies.length },
    (_, i) => i + 1
  ).filter((i) => {
    const [date, type] = privacies[i - 1].split(' ');
    const startDate = makeDate(date);
    return (
      startDate.setMonth(startDate.getMonth() + termMap[type]) <=
      todayDate.getTime()
    );
  });
}

// Date 객체 안쓴 버전

const totalDay = (y, m, d) => (y * 12 + m) * 28 + d;

function solution2(today, terms, privacies) {
  const current = totalDay(...today.split('.').map(Number));

  const termMap = terms.reduce((acc, cur) => {
    const [type, month] = cur.split(' ');
    return { [type]: Number(month), ...acc };
  }, {});

  return Array.from(
    { length: privacies.length },
    (_, i) => i + 1
  ).filter((i) => {
    const [date, type] = privacies[i - 1].split(' ');
    const [year, month, day] = date.split('.').map(Number);

    return totalDay(year, month + termMap[type], day) <= current;
  });
}
