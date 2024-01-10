interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/**
 * Director class
 */
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

/**
 * Teacher class
 */
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

/**
 * create an employee depending on salary
 * @param salary
 * @returns Director if salary is greater or equal to 500 else return new Teacher
 */
function createEmployee(salary: string | number): Director | Teacher {
  let salaryValue: number;

  if (typeof salary === "string") {
    salaryValue = Number.parseInt(salary);
  } else {
    salaryValue = salary;
  }

  if (salaryValue < 500) {
    return new Teacher();
  }
  return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

/**
 * check if employee is a director
 * @param employee
 * @returns True if employee is a director else false
 */
function isDirector(employee: unknown): boolean {
  return employee instanceof Director;
}
/**
 * function executeWork:
 *    it accepts employee as an argument
 *    if the employee is a Director, it will call workDirectorTasks
 *    if the employee is a Teacher, it will call workTeacherTasks
 * @param employee
 */
function executeWork(employee: Director | Teacher) {
  if (employee instanceof Director) {
    console.log(employee.workDirectorTasks());
  }
  if (employee instanceof Teacher) {
    console.log(employee.workTeacherTasks());
  }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));
