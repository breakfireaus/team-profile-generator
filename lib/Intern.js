const Employee = require(`./Employee`)

class Intern extends Employee {
  constructor(employeeName, id, employeeEmail, school) {
    super(employeeName, id, employeeEmail)
    this.school = school
  }
  getRole() {
    return `Intern`
  }
  getSchool() {
    return this.school
  }
}

module.exports = Intern
