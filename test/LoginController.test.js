const request = require('supertest')

const app = require('../build/index')

describe('Testing /login POST', () => {

  test('POST to /login should return a status code 200 and should return true or false', async () => {
    const response = await request(app).post('/login').send({
      token: "123213",
      loginType: "email"
    })
    console.log(response.body)
    expect(response.statusCode).toBe(200)
    expect(response.request._data).toBeDefined()
    expect(response.body.login).toBe(true)
  })
})