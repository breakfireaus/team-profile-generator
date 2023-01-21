const Manager = require('../lib/Manager')

test('Set office number from constructor', () => {
  const testOfficePhoneNumber = 123456789
  const employee = new Manager(
    'Caleb',
    4,
    'caleb@mail.com',
    testOfficePhoneNumber
  )
  expect(employee.officePhoneNumber).toBe(testOfficePhoneNumber)
})

test('getRole() returns Manager', () => {
  const testRole = 'Manager'
  const employee = new Manager('Caleb', 4, 'caleb@mail.com', 1)
  expect(employee.getRole()).toBe(testRole)
})

test('get office number from getOfficePhoneNumber()', () => {
  const testGrabOffice = 123456789
  const employee = new Manager('Jared', 4, 'Caleb@email.com', testGrabOffice)
  expect(employee.getOfficeNumber()).toBe(testGrabOffice)
})
