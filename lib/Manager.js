const Employee = require(`./Employee`)

class Manager extends Employee {
  constructor(employeeName, id, email, officePhoneNumber) {
    super(employeeName, id, email)
    this.officePhoneNumber = officePhoneNumber
  }
  getRole() {
    return `Manager`
  }
  getOfficeNumber() {
    return this.officePhoneNumber
  }
}

module.exports = Manager
