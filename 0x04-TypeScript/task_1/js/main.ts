interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

/** new teacher */
const teacher1: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};
console.log(teacher1);

/** interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number) */

interface Directors extends Teacher {
  numberOfReports: number;
}

/** new director */
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
