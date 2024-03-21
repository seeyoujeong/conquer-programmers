// [3차] 파일명 정렬

function solution(files) {
  const splitFileName = (file) => {
    const [head, number, tail] = file.match(/^([^\d]+)(\d+)(.*)$/).slice(1);
    return { head, number, tail };
  };

  const splitedFiles = files.map((file) => splitFileName(file));
  splitedFiles.sort((a, b) => {
    const headA = a.head.toLowerCase();
    const headB = b.head.toLowerCase();
    if (headA === headB) {
      return Number(a.number) - Number(b.number);
    } else if (headA < headB) return -1;
    else return 1;
  });

  return splitedFiles.map((splited) => Object.values(splited).join(''));
}
