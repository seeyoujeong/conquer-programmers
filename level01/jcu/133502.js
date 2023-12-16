// 햄버거 만들기

function solution(ingredient) {
  const burger = "1231";
  const stack = [];

  return ingredient.reduce((acc, cur) => {
    stack.push(cur);

    if (stack.slice(-4).join("") === burger) {
      stack.splice(-4);
      acc += 1;
    }

    return acc;
  }, 0);
}
