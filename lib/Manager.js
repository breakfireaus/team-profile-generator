const Employee = require(`./Employee`)

class Manager extends Employee {
  constructor(employeeName, id, email, getOfficeNumber) {
    super(employeeName, id, email)
    this.officeNumber = officeNumber
  }
  getRole() {
    return `Manager`
  }
  getOfficeNumber() {
    return this.officeNumber
  }
}

module.exports = Manager
