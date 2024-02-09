// 메뉴 리뉴얼

function solution(orders, course) {
  let courseObj = {};
  let courseCandidates = {};
  let maxOrder = Array(10 + 1).fill(0);

  const makeCourse = (order, start, len, newCourse) => {
    if (len === 0) {
      courseObj[newCourse] = (courseObj[newCourse] || 0) + 1;

      maxOrder[newCourse.length] = Math.max(
        maxOrder[newCourse.length],
        courseObj[newCourse]
      );

      if (courseObj[newCourse] > 1) {
        courseCandidates[newCourse] = courseObj[newCourse];
      }

      return;
    }

    for (let i = start; i < order.length; i++) {
      makeCourse(order, i + 1, len - 1, newCourse + order[i]);
    }
  };

  course.forEach((len) => {
    orders.forEach((order) => {
      makeCourse([...order].sort(), 0, len, "");
    });
  });

  return Object.keys(courseCandidates)
    .filter((course) => maxOrder[course.length] === courseCandidates[course])
    .sort();
}
