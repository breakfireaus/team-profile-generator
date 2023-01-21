const Employee = require('../lib/Employee')

test('Employee Object', () => {
  const employeeTest = new Employee()
  expect(typeof employeeTest).toBe('object')
})

test('Can set name from constructor', () => {
  const testEmployeeName = 'Matthew'
  const employee = new Employee(testEmployeeName)
  expect(employee.employeeName).toBe(testEmployeeName)
})

test('Can set ID from constructor', () => {
  const testID = '1'
  const employee = new Employee('Matthew', testID)
  expect(employee.id).toBe(testID)
})

test('Can set email from constructor', () => {
  const testEmployeeEmail = 'matthew@email.com'
  const employee = new Employee('matthew', 1, testEmployeeEmail)
  expect(employee.employeeEmail).toBe(testEmployeeEmail)
})

test('getEmployeeName() method', () => {
  const testNameValue = 'Matthew'
  const employee = new Employee(testNameValue)
  expect(employee.getName()).toBe(testNameValue)
})

test('getId() method', () => {
  const testGrabId = 1
  const employee = new Employee('Matthew', testGrabId)
  expect(employee.getId()).toBe(testGrabId)
})

test('getEmployeeEmail() method', () => {
  const testGrabEmail = 'Matthew@email.com'
  const employee = new Employee('Jared', 1, testGrabEmail)
  expect(employee.getEmail()).toBe(testGrabEmail)
})

test('getRole() method', () => {
  const testGrabRole = 'Employee'
  const employee = new Employee('Matthew', 1, 'Matthew@email.com')
  expect(employee.getRole()).toBe(testGrabRole)
})
