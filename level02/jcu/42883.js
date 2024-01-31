// 큰 수 만들기

function solution(number, k) {
  let count = 0;
  let stack = [];
  const popAndCount = () => {
    stack.pop();
    count += 1;
  };

  for (const num of number) {
    while (count < k && stack.length > 0 && stack.at(-1) < num) {
      popAndCount();
    }

    stack.push(num);
  }

  while (count < k) {
    popAndCount();
  }

  return stack.join("");
}
