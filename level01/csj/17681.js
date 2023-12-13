// [1차] 비밀지도

function solution(n, arr1, arr2) {
  const baseMap = Array.from({ length: n }).fill('0'.repeat(n));
  const parseMap = (base, arr) => {
    return base.map((row, i) => {
      const binary = arr[i].toString(2).padStart(n, '0');
      return [...row].map((value, j) => value | binary[j]).join('');
    });
  };
  return parseMap(parseMap(baseMap, arr1), arr2).map((row) =>
    row.replaceAll('0', ' ').replaceAll('1', '#')
  );
}
