// 신규 아이디 추천

function solution(new_id) {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w-._]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\./, '')
    .replace(/\.$/, '')
    .padEnd(1, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');

  return id.padEnd(3, id.slice(-1));
}
