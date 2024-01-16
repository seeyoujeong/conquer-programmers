// 추가 요금 계산

function solution(fees, records) {
  const recordsInfo = records.reduce((acc, cur) => {
    const [time, carNumber, state] = cur.split(" ");

    if (Object.hasOwn(acc, carNumber)) {
      if (state === "IN") {
        acc[carNumber].entryTime = time;
      }

      if (state === "OUT") {
        acc[carNumber].accumulatedTime += getMinutes(
          acc[carNumber].entryTime,
          time
        );
        acc[carNumber].entryTime = null;
      }
    } else {
      acc[carNumber] = {
        entryTime: time,
        accumulatedTime: 0,
      };
    }

    return acc;
  }, {});

  const [defaultTime, defaultFee, perTime, perFee] = fees;

  for (const carNumber in recordsInfo) {
    if (recordsInfo[carNumber].entryTime) {
      recordsInfo[carNumber].accumulatedTime += getMinutes(
        recordsInfo[carNumber].entryTime,
        "23:59"
      );
      recordsInfo[carNumber].entryTime = null;
    }

    if (recordsInfo[carNumber].accumulatedTime <= defaultTime) {
      recordsInfo[carNumber] = defaultFee;
    } else {
      recordsInfo[carNumber] =
        defaultFee +
        Math.ceil(
          (recordsInfo[carNumber].accumulatedTime - defaultTime) / perTime
        ) *
          perFee;
    }
  }

  return Object.entries(recordsInfo)
    .sort((a, b) => a[0] - b[0])
    .map(([_, fee]) => fee);
}

function getMinutes(entryTime, exitTime) {
  const [entryHour, entryMinutes] = entryTime.split(":").map(Number);
  const [exitHour, exitMinutes] = exitTime.split(":").map(Number);

  return (exitHour - entryHour) * 60 + (exitMinutes - entryMinutes);
}
