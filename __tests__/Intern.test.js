const Intern = require('../lib/Intern')

test('Set school from constructor', () => {
  const testTheSchool = 'MelbourneUni'
  const employee = new Intern('Donald', 3, 'donald@email.com', testTheSchool)
  expect(employee.school).toBe(testTheSchool)
})

test('getRole() returns Intern', () => {
  const testRole = 'Intern'
  const employee = new Intern('Donald', 3, 'donald@email.com', 'MelbourneUni')
  expect(employee.getRole()).toBe(testRole)
})

test('get school from getTheSchool()', () => {
  const testGetTheSchool = 'MelbourneUni'
  const employee = new Intern('Donald', 3, 'donald@email.com', testGetTheSchool)
  expect(employee.getSchool()).toBe(testGetTheSchool)
})
