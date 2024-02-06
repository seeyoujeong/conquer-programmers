// [1차] 뉴스 클러스터링

const makeMultiSet = (str) => {
  return [...str]
    .slice(1)
    .map((char, i) => (str[i] + char).toUpperCase())
    .filter((word) => !/[^a-zA-Z]/g.test(word));
};

function solution(str1, str2) {
  const multiSet1 = makeMultiSet(str1);
  const multiSet2 = makeMultiSet(str2);

  const wordSet = new Set([...multiSet1, ...multiSet2]);

  const jakard = [...wordSet].reduce(
    ([union, inter], word) => {
      const count1 = multiSet1.filter(
        (word1) => word1 === word
      ).length;
      const count2 = multiSet2.filter(
        (word2) => word2 === word
      ).length;

      return [
        union + Math.max(count1, count2),
        inter + Math.min(count1, count2),
      ];
    },
    [0, 0]
  );

  if (jakard[0] === 0 && jakard[1] === 0) return 65536;
  return parseInt((jakard[1] / jakard[0]) * 65536);
}
