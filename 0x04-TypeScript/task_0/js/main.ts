interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Kanairo",
};
const student2: Student = {
  firstName: "Johnny",
  lastName: "Doe",
  age: 22,
  location: "Kanairo",
};
const studentsList: Array<Student> = [student1, student2];

const body: HTMLBodyElement = document.querySelector("body");
const table: HTMLTableElement = document.createElement("table");

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement("tr");
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
  table.appendChild(row);
});

body.appendChild(table);
