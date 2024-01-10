// [1차] 뉴스 클러스터링

function solution(str1, str2) {
  const str1Multiset = getMultiset(str1);
  const str2Multiset = getMultiset(str2);
  const elements = new Set([...str1Multiset, ...str2Multiset]);
  let unionSize = 0;
  let intersectionSize = 0;

  for (const element of elements) {
    const str1Count = str1Multiset.filter((value) => value === element).length;
    const str2Count = str2Multiset.filter((value) => value === element).length;

    unionSize += Math.max(str1Count, str2Count);
    intersectionSize += Math.min(str1Count, str2Count);
  }

  const JaccardSimilarity = unionSize === 0 ? 1 : intersectionSize / unionSize;

  return Math.trunc(JaccardSimilarity * 65536);
}

function getMultiset(string) {
  const result = [];

  for (let i = 0; i < string.length - 1; i += 1) {
    const twoLetters = string.slice(i, i + 2).toLowerCase();

    if (twoLetters.search(/[a-zA-Z]{2}/) !== -1) {
      result.push(twoLetters);
    }
  }

  return result;
}
