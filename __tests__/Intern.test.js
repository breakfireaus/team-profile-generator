const Intern = require('../lib/Intern')

test('Set school from constructor', () => {
  const testtheSchool = 'MelbourneUni'
  const employee = new Intern('Donald', 5, 'donald@email.com', testtheSchool)
  expect(employee.school).toBe(testtheSchool)
})

test('getRole() returns Intern', () => {
  const testRole = 'Intern'
  const employee = new Intern('Donald', 5, 'donald@email.com', 'MelbourneUni')
  expect(employee.getRole()).toBe(testRole)
})

test('get school from getTheSchool()', () => {
  const testGetTheSchool = 'MelbourneUni'
  const employee = new Intern('Donald', 5, 'donald@email.com', testGetTheSchool)
  expect(employee.getSchool()).toBe(testGetTheSchool)
})
