function solution(keymap, targets) {
  const charSet = [
    ...new Set(targets.reduce((acc, cur) => [...acc, ...cur], [])),
  ];

  const charMap = charSet.reduce((acc, cur) => {
    let curIndex = -1;
    for (const key of keymap) {
      const index = key.indexOf(cur) + 1;
      if (index > 0 && (curIndex > index || curIndex < 0))
        curIndex = index;
    }
    return { [cur]: curIndex, ...acc };
  }, {});

  return targets.map((target) =>
    [...target].reduce((acc, cur) => {
      const keyNum = charMap[cur];
      if (acc < 0 || keyNum < 0) return -1;
      return acc + keyNum;
    }, 0)
  );
}
