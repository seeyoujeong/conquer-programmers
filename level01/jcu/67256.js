// 키패드 누르기

function solution(numbers, hand) {
  const leftHand = {
    main: hand === "left",
    number: 10,
  };
  const rightHand = {
    main: hand === "right",
    number: 12,
  };

  return numbers
    .map((num) => (num === 0 ? 11 : num))
    .reduce((acc, cur) => {
      if (cur === 1 || cur === 4 || cur === 7) {
        leftHand.number = cur;
        return acc + "L";
      }

      if (cur === 3 || cur === 6 || cur === 9) {
        rightHand.number = cur;
        return acc + "R";
      }

      const distanceLeftHand = distance(
        location(cur),
        location(leftHand.number)
      );
      const distanceRightHand = distance(
        location(cur),
        location(rightHand.number)
      );

      if (
        distanceLeftHand < distanceRightHand ||
        (distanceLeftHand === distanceRightHand && leftHand.main)
      ) {
        leftHand.number = cur;
        return acc + "L";
      }

      if (
        distanceLeftHand > distanceRightHand ||
        (distanceLeftHand === distanceRightHand && rightHand.main)
      ) {
        rightHand.number = cur;
        return acc + "R";
      }
    }, "");
}

function location(num) {
  return [Math.floor((num - 1) / 3), (num - 1) % 3];
}

function distance(loc1, loc2) {
  return Math.abs(loc1[0] - loc2[0]) + Math.abs(loc1[1] - loc2[1]);
}
