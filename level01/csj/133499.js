// 옹알이 (2)

const isAvailable = (babble) => {
  const availables = ['aya', 'ye', 'woo', 'ma'];
  let lastBabble = '';
  let word = '';
  for (const char of babble) {
    if (availables.includes((word += char))) {
      if (lastBabble === word) {
        return false;
      }
      lastBabble = word;
      word = '';
    }
  }
  return !word;
};

function solution(babbling) {
  return babbling.filter(isAvailable).length;
}
