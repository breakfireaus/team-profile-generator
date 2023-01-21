const Employee = require('./Employee')

class Engineer extends Employee {
  constructor(employeeName, id, employeeEmail, github) {
    super(employeeName, id, employeeEmail)
    this.github = github
  }
  getRole() {
    return `Engineer`
  }
  getTheGithub() {
    return this.github
  }
}

module.exports = Engineer
