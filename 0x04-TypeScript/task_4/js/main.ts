export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
    firstName: "Manucho",
    lastName: "happy",
    experienceTeachingC: 10,
};

console.log("C++")
cpp.teacher.setTeacher(cTeacher);
cpp.getRequirements()
cpp.getAvailableTeacher()
console.log("Java")
java.teacher.setTeacher(cTeacher);
java.getRequirements()
java.getAvailableTeacher()
console.log("React")
react.teacher.setTeacher(cTeacher);
react.getRequirements()
react.getAvailableTeacher()
