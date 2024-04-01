// 이모티콘 할인행사

function solution(users, emoticons) {
  let results = [];
  const allDiscountCase = getAllDiscountCase(
    [10, 20, 30, 40],
    emoticons.length
  );

  for (const discountCase of allDiscountCase) {
    let result = { plus: 0, sales: 0 };

    for (const [rate, standard] of users) {
      let total = 0;

      for (let i = 0; i < emoticons.length; i += 1) {
        if (rate <= discountCase[i]) {
          total += (emoticons[i] * (100 - discountCase[i])) / 100;
        }
      }

      if (total >= standard) {
        result.plus += 1;
      } else {
        result.sales += total;
      }
    }

    results.push(result);
  }

  const sortedResults = results.sort((a, b) =>
    a.plus === b.plus ? b.sales - a.sales : b.plus - a.plus
  );

  return Object.values(sortedResults[0]);
}

function getAllDiscountCase(rates, len) {
  let result = [];

  const getDiscountCase = (currentCase) => {
    if (currentCase.length === len) {
      result.push(currentCase);
      return;
    }

    for (const rate of rates) {
      getDiscountCase([...currentCase, rate]);
    }
  };

  getDiscountCase([]);

  return result;
}
