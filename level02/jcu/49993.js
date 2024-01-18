// 스킬트리

function solution(skill, skillTrees) {
  return skillTrees.filter((skillTree) => checkSkillTree(skill, skillTree))
    .length;
}

function checkSkillTree(skill, skillTree) {
  const regExp = new RegExp(`[^${skill}]`, "g");

  return skill.startsWith(skillTree.replace(regExp, ""));
}
