// 개인정보 수집 유효기간

function solution(today, terms, privacies) {
  const termsObj = terms.reduce((acc, cur) => {
    const [term, month] = cur.split(" ");

    acc[term] = month;

    return acc;
  }, {});

  return privacies
    .map(
      (privacy, idx) =>
        compareDate(today, getExpirationDate(termsObj, privacy)) && idx + 1
    )
    .filter((value) => value);
}

function getExpirationDate(termsObj, privacy) {
  const [privacyTime, privacyTerm] = privacy.split(" ");
  const [privacyYear, privacyMonth, privacyDay] = privacyTime
    .split(".")
    .map(Number);

  const termYear = parseInt(termsObj[privacyTerm] / 12, 10);
  const termMonth = Number(termsObj[privacyTerm] % 12);

  let resultYear = privacyYear + termYear;
  let resultMonth = privacyMonth + termMonth;
  let resultDay = privacyDay - 1 || 28;

  if (resultMonth > 12) {
    resultYear += 1;
    resultMonth %= 12;
  }

  if (resultDay === 28) {
    resultMonth -= 1;
  }

  if (resultMonth === 0) {
    resultYear -= 1;
    resultMonth = 12;
  }

  return `${resultYear}.${String(resultMonth).padStart(2, "0")}.${String(
    resultDay
  ).padStart(2, "0")}`;
}

function compareDate(date1, date2) {
  const [year1, month1, day1] = date1.split(".").map(Number);
  const [year2, month2, day2] = date2.split(".").map(Number);

  if (year1 !== year2) {
    return year1 > year2;
  }

  if (month1 !== month2) {
    return month1 > month2;
  }

  if (day1 !== day2) {
    return day1 > day2;
  }

  return false;
}
