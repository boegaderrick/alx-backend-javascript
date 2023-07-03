/* eslint-disable no-param-reassign */
export default function updateStudentGradeBycity(array, city, newGrades) {
  return array.filter((obj) => obj.location === city).map((obj) => {
    try {
      obj.grade = newGrades.find((val) => val.studentId === obj.id).grade;
    } catch (e) {
      obj.grade = 'N/A';
    }
    return obj;
  });
}
