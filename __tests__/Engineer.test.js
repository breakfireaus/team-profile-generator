const Engineer = require('../lib/Engineer')

test('Can set github account', () => {
  const testTheGithubAccount = 'aRandomGithubUsername'
  const employee = new Engineer(
    'Jamieson',
    2,
    'Jamieson@email.com',
    testTheGithubAccount
  )
  expect(employee.github).toBe(testTheGithubAccount)
})

test('getRole() method should return Engineer', () => {
  const testRole = 'Engineer'
  const employee = new Engineer(
    'Jamieson',
    2,
    'Jamieson@email.com',
    'aRandomGithubUsername'
  )
  expect(employee.getRole()).toBe(testRole)
})

test('getTheGithub() method should get username', () => {
  const testTheGitHubUser = 'aRandomGithubUsername'
  const employee = new Engineer(
    'Jamieson',
    2,
    'Jamieson@email.com',
    testTheGitHubUser
  )
  expect(employee.getTheGithub()).toBe(testTheGitHubUser)
})
