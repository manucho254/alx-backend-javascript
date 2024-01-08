export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }

  /** acc is the accumulated value, and 0 is the initial value for the reduce function */
  return students.reduce((acc, student) => acc + student.id, 0);
}
