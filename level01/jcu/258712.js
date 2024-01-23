// 가장 많이 받은 선물

function solution(friends, gifts) {
  let record = friends.reduce((acc, cur) => {
    acc[cur] = {
      giftPoint: 0,
    };

    for (const name of friends) {
      if (name !== cur) {
        acc[cur][name] = 0;
      }
    }

    return acc;
  }, {});

  for (const giveTake of gifts) {
    const [giveName, takeName] = giveTake.split(" ");

    record[giveName][takeName] += 1;
    record[giveName].giftPoint += 1;
    record[takeName].giftPoint -= 1;
  }

  let nextMonth = [];

  for (const giveName of friends) {
    let count = 0;

    for (const takeName of friends) {
      if (record[giveName][takeName] > record[takeName][giveName]) {
        count += 1;
      }

      if (
        record[giveName][takeName] === record[takeName][giveName] &&
        record[giveName].giftPoint > record[takeName].giftPoint
      ) {
        count += 1;
      }
    }

    nextMonth.push(count);
  }

  return Math.max(...nextMonth);
}
