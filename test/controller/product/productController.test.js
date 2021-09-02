const request = require('supertest')

const app = require('../../../build/index')


describe('POST /product', () => {

  test('should return a status code 200', async () => {

    await request(app).post('/product').then(function (result) {
      expect(result.statusCode).toBe(200)
    })

  })
})
