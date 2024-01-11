// [3차] 압축

function solution(msg) {
  const dictionary = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].reduce(
    (acc, cur, idx) => ((acc[cur] = idx + 1), acc),
    {}
  );
  let nextIdx = 27;

  const result = [];

  for (let i = 0; i < msg.length; i += 1) {
    let w = msg[i];
    let c = msg[i + 1];

    while (w + c in dictionary) {
      w += c;
      i += 1;
      c = msg[i + 1];
    }

    result.push(dictionary[w]);
    dictionary[w + c] = nextIdx;
    nextIdx += 1;
  }

  return result;
}
