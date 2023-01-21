const Employee = require(`./Employee`)

class Manager extends Employee {
  constructor(employeeName, id, email, officeNumber) {
    super(employeeName, id, email, officeNumber)
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
