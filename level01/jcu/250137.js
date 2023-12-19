// [PCCP 기출문제] 1번 / 붕대 감기

function solution(bandage, health, attacks) {
  const [castingTime, recoveryPerSecond, extraRecovery] = bandage;
  const fullHP = health;
  let successCount = 0;
  const lastAttackTime = attacks.at(-1)[0];
  const attacksMap = new Map(attacks);

  for (let i = 1; i <= lastAttackTime; i += 1) {
    if (attacksMap.has(i)) {
      health -= attacksMap.get(i);

      if (health <= 0) return -1;

      successCount = 0;
      continue;
    }

    successCount += 1;
    health =
      health + recoveryPerSecond > fullHP ? fullHP : health + recoveryPerSecond;

    if (successCount === castingTime) {
      health =
        health + extraRecovery > fullHP ? fullHP : health + extraRecovery;
      successCount = 0;
    }
  }

  return health;
}
