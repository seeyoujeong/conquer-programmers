// [PCCP 기출문제] 1번 / 붕대감기

function solution(bandage, health, attacks) {
  const [bandTime, heal, bonus] = bandage;
  // t초동안, 1초마다 x회복, t초연속시 y추가회복, 초과회복은 불가능

  let curTime = 0;
  let curHealth = health;
  for (const [time, damage] of attacks) {
    let cnt = 0;
    while (++curTime < time) {
      curHealth += heal;
      cnt += 1;
      if (cnt === bandTime) {
        curHealth += bonus;
        cnt = 0;
      }
    }
    curHealth = (curHealth > health ? health : curHealth) - damage;
    if (curHealth <= 0) return -1;
  }
  return curHealth;
}
