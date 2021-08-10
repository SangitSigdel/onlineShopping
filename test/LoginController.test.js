const request = require('supertest')

const app = require('../build/index')


describe('POST /login', () => {

  test('should return a status code 200', async () => {
    const data = {
      token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjBmY2MwMTRmMjI5MzRlNDc0ODBkYWYxMDdhMzQwYzIyYmQyNjJiNmMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODQ4Njc5MjU0NzA3LXVydXUzNm1hMW9oNXNyNG1rNzFkdDY4ZDF2Ym5saWJhLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODQ4Njc5MjU0NzA3LXVydXUzNm1hMW9oNXNyNG1rNzFkdDY4ZDF2Ym5saWJhLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE3Mzc3MzQ3MTEzMDAwMjE5NTgwIiwiZW1haWwiOiJzYW5naXQuc2lnZGVsQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiLTVxUEt5WGJKU2xTYlRQSVZPTnc1QSIsIm5hbWUiOiJTYW5naXQgU2lnZGVsIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdndGVqMVItMUNXZjRNaDdDLXNMLUp4c2FWZnhrY1RReHRXTTVkcD1zOTYtYyIsImdpdmVuX25hbWUiOiJTYW5naXQiLCJmYW1pbHlfbmFtZSI6IlNpZ2RlbCIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjI4NTgwNjQyLCJleHAiOjE2Mjg1ODQyNDIsImp0aSI6ImMzZDJjNDY1MzVjNGE1YmNhN2ZiZWQzYmM2OTZmZGI3ZjU3NGE5YmUifQ.IVdNccwzhQpzYFcQQSWO9_B-vaGdCMG3LYZDia0g-hnqyCGleTYyhGdWEIJy8GFuZj5NviiGQvMbEhqV8a7Z_pDuw6v9sbJ7Ol3NyX69FKJ6K4Vx5JOii_Y4xqCO8TPzXLxpPMVc-IgTXVxavXpVg7F6rkC_13NXzfqNlVlfE2JqYuVxjI6Dn599ocCu39nnmD7uXyf2NDp1iAD7OOwJDvqP2qMncRvvgmqBlVjVSHQGAbUFLTdWw5TIbGpCsYeGAyGXfgaD1SkaQjgcjln-0gvZh5Ac0NVtUN5ed2xeK7y5GvhRxKG-79HKTr3ikUnq5KrbTxbiFs71p8pq5lb4Pw',
      loginType: 'gmail'
    }

    await request(app).post('/login').send(data).then(function (result) {
      expect(result.statusCode).toBe(200)
    })

  })
})



/*==================================TESTING CODE EXAMPLE BY SAUGAT BRO=============================================*/

/*
describe('Testing /login POST', () => {

  it('POST to /login should return a status code 200 and should return true or false', async () => {
    const data = [{
      token: "123213",
      loginType: "facebooks"
    },
    {
      token: "123213",
      loginType: "gmail"
    },
    {
      token: "123213",
      loginType: "email"
    }

    ]
    // got error on this testing script

    try {
      const abc = data.map(async el => {
        // console.log(el)
        let response = await request(app).post('/login').send(el)
        // expect(response.statusCode).toBe(200)
        // expect(response.request._data).toBeDefined()
        // expect(response.body.login).toBe(true)
        // console.log('sangit')
        return response.statusCode
      })


      console.log('=====>the value of abc is ', abc)

      const resolved = await Promise.all(abc)

      console.log('The resolved is ', resolved)
    }

    catch (err) {
      console.log('ok done')
    }



    // const response = await request(app).post('/login').send({
    //   token: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBmY2MwMTRmMjI5MzRlNDc0ODBkYWYxMDdhMzQwYzIyYmQyNjJiNmMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODQ4Njc5MjU0NzA3LXVydXUzNm1hMW9oNXNyNG1rNzFkdDY4ZDF2Ym5saWJhLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODQ4Njc5MjU0NzA3LXVydXUzNm1hMW9oNXNyNG1rNzFkdDY4ZDF2Ym5saWJhLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE3Mzc3MzQ3MTEzMDAwMjE5NTgwIiwiZW1haWwiOiJzYW5naXQuc2lnZGVsQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoibXNLTk5FMEtRR3R4amVVekd1U2tjQSIsIm5hbWUiOiJTYW5naXQgU2lnZGVsIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdndGVqMVItMUNXZjRNaDdDLXNMLUp4c2FWZnhrY1RReHRXTTVkcD1zOTYtYyIsImdpdmVuX25hbWUiOiJTYW5naXQiLCJmYW1pbHlfbmFtZSI6IlNpZ2RlbCIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjI4NTAyNTI5LCJleHAiOjE2Mjg1MDYxMjksImp0aSI6IjU4ZDVhYmJmY2M0Nzg2ZDI4NGEwNmQzNzU3Yjc4ZDE5MDJmNDVhZWUifQ.5HnvK1X0-G8tE7kPTAdpBpiqqpoAVhxVz-yTGTDkARES4DxRqr6YMZKPhnG3XMyLPtTY0jRroDyXuXINl29AOJH3gSnaDpkKrMOGVWYzDLR-l3jwse8gl797ZZa_bEBWUBdjhcpX9i_CW7qCC4QD5CjR_BcKMlRKudsGGsRNtJPeZ8TCY2V2EgjGlfHx-zGAk0xr0qyhDVfnTqw-0tvth8795KSVFP6or8XDXx1yizGPJ34JqHxu1WawfAn4Wc6eUjiMzNXblzBYKpNsUpcRFdAyNQnyUHhdYVLOZE6PshER8l626rWYcQ345cAqXCYCvVQFcYdg5eIeu4eZNm5MdQ",
    //   loginType: "gmail"
    // })
    // expect(response.statusCode).toBe(200)
    // expect(response.request._data).toBeDefined()
    // expect(response.body.login).toBe(true)
  })
})

*/