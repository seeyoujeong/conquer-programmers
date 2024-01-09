// 전화번호 목록

function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i += 1) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}
