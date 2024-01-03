#!/usr/bin/env node

export default function createReportObject(employeesList) {
  const employees = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
  return employees;
}
