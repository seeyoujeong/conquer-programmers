// 조이스틱

function solution(name) {
  const upDownCount = [...name].reduce(
    (acc, cur) =>
      acc +
      Math.min(
        cur.codePointAt(0) - "A".codePointAt(0),
        "Z".codePointAt(0) - cur.codePointAt(0) + 1
      ),
    0
  );

  let leftRightCount = name.length - 1;

  for (let i = 1; i < name.length; i += 1) {
    if (name[i] === "A") {
      const left = i - 1;
      while (i < name.length && name[i] === "A") i += 1;
      const right = name.length - i;

      leftRightCount = Math.min(
        leftRightCount,
        2 * right + left,
        right + 2 * left
      );
    }
  }

  return upDownCount + leftRightCount;
}
