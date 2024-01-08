export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newStudent = { ...student };
      const studentsGraded = newGrades.map((grade) => grade.studentId);

      if (!studentsGraded.includes(student.id)) {
        newStudent.grade = 'N/A';
      }
      newGrades.forEach((grade) => {
        if (student.id === grade.studentId) {
          newStudent.grade = grade.grade;
        }
      });
      return newStudent;
    });
}
