// 대충 만든 자판

function solution(keymap, targets) {
  const keymapObj = getKeymapObj(keymap);

  return targets.map((target) => {
    let count = 0;

    for (const key of target) {
      if (!keymapObj[key]) return -1;

      count += keymapObj[key];
    }

    return count;
  });
}

function getKeymapObj(keymap) {
  const obj = {};

  for (const keys of keymap) {
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];

      if (!(key in obj) || obj[key] > i) {
        obj[key] = i + 1;
      }
    }
  }

  return obj;
}
