function createIteratorObject(report) {
  return Object.values(report.allEmployees).flat();
}

function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: employees };
}

function createReportObject(employeesList) {
  const employees = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
  return employees;
}

const employees = {
  ...createEmployeesObject("engineering", ["Bob", "Jane"]),
  ...createEmployeesObject("marketing", ["Sylvie"]),
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
  console.log(item);
}
