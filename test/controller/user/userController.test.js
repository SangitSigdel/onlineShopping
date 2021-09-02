const request = require('supertest')

const app = require('../../../build/index')


describe('POST /user',()=>{
    test('should return a status code of 200',async ()=>{
        const response = await request(app).get('/user')
        expect(response.statusCode).toBe(200)
    })
})