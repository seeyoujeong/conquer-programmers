// 햄버거 만들기

function solution(ingredient) {
  const burger = [];

  return ingredient.reduce((acc, cur) => {
    burger.push(cur);
    const top = burger.slice(burger.length - 4);

    if (top.join('') === '1231') {
      burger.splice(burger.length - 4);
      return acc + 1;
    }
    return acc;
  }, 0);
}
