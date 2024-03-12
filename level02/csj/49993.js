// 스킬트리

function solution(skill, skill_trees) {
  return skill_trees.filter((tree) => {
    const order = [...skill];
    for (const skillName of tree) {
      if (order.includes(skillName)) {
        if (order[0] === skillName) order.shift();
        else return false;
      }
    }
    return true;
  }).length;
}
