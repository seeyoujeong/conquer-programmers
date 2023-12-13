// 옹알이 (2)

function solution(babbling) {
  return babbling.filter(isPronounce).length;
}

function isPronounce(babble) {
  const pronunciationList = ["aya", "ye", "woo", "ma"];

  for (const pronunciation of pronunciationList) {
    if (babble.includes(pronunciation.repeat(2))) {
      return false;
    }

    babble = babble.replaceAll(pronunciation, "FLAG");
  }

  return babble.replaceAll("FLAG", "").length === 0;
}
