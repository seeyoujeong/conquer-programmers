// 주차 요금 계산

function solution(fees, records) {
  const cars = {};
  records.forEach((record) => {
    const [time, number, type] = record.split(' ');
    cars[number] = number in cars ? [...cars[number], time] : [time];
  });

  const [defaultTime, defaultFee, unitTime, unitFee] = fees;

  for (const car in cars) {
    if (cars[car].length % 2) cars[car].push('23:59');
    const stack = [];
    let total = 0;

    for (const time of cars[car]) {
      if (stack.length > 0) {
        const [outHour, outMinute] = time.split(':').map(Number);
        const [inHour, inMinute] = stack.pop().split(':').map(Number);
        total += outHour * 60 + outMinute - (inHour * 60 + inMinute);
      } else stack.push(time);
    }

    if (total <= defaultTime) {
      cars[car] = defaultFee;
    } else {
      cars[car] =
        defaultFee +
        Math.ceil((total - defaultTime) / unitTime) * unitFee;
    }
  }

  return Object.entries(cars)
    .sort()
    .map(([_, fee]) => fee);
}
