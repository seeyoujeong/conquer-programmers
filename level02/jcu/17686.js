// [3차] 파일명 정렬

function solution(files) {
  return files
    .map((file) => {
      const regexp = /([a-zA-Z .-]+)([\d]{1,5})([a-zA-Z0-9 .-]*)/;
      const [, head, number, tail] = file.match(regexp);

      return [head, number, tail];
    })
    .sort(([head1, number1], [head2, number2]) =>
      head1.toLowerCase() === head2.toLowerCase()
        ? number1 - number2
        : head1.toLowerCase().localeCompare(head2.toLowerCase())
    )
    .map((file) => file.join(""));
}
