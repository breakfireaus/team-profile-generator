class Employee {
  constructor(employeeName, id, employeeEmail) {
    this.employeeName = employeeName
    this.id = id
    this.email = employeeEmail
  }
  getEmployeeName() {
    return this.employeeName
  }
  getId() {
    return this.id
  }
  getEmployeeEmail() {
    return this.employeeEmail
  }
  getRole() {
    return `Employee`
  }
}

module.exports = Employee
