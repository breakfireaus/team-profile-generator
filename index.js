class Employee {
  constructor(employeename, id, employeeemail) {
    this.employeename = employeename
    this.id = id
    this.email = employeeemail
  }
  getName() {
    return this.employeename
  }
  getId() {
    return this.id
  }
  getEmail() {
    return this.employeeemail
  }
  getRole() {
    return `Employee`
  }
}

module.exports = Employee
