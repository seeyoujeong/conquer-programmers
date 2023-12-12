// [1차] 비밀지도

function solution(n, arr1, arr2) {
  const baseMap = Array.from({ length: n }).fill('0'.repeat(n));
  const parseMap = (base, arr) => {
    return base.map((row, i) => {
      let binary = arr[i].toString(2);
      while (binary.length < n) {
        binary = '0' + binary;
      }
      return [...row]
        .map((value, j) =>
          value === '1' || binary[j] === '1' ? '1' : '0'
        )
        .join('');
    });
  };
  return parseMap(parseMap(baseMap, arr1), arr2).map((row) =>
    row.replaceAll('0', ' ').replaceAll('1', '#')
  );
}
