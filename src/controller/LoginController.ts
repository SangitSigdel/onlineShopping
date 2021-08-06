import { Request, Response } from 'express'

import { LoginVerification } from './LoginVerification'
import { controller, get, post } from '../decorators'


const loginVerifier = new LoginVerification()
let verification = false

enum loginTypes {
  facebook = 'facebook',
  email = 'email',
  gmail = 'gmail'
}

@controller('/')
class LoginController {

  @post('login')
  loginUser(req: Request, res: Response): void {

    let login = false
    let verification = false

    for (let type in loginTypes) {
      if (type === req.body.loginType) {
        login = loginVerifier.LoginCheck(type, req.body.token)
        verification = true
      }
    }
    if (verification) {
      res.status(200).send({
        status: 'success',
        login
      })
    }
    else {
      res.status(400).send({
        status: 'failed',
        message: 'please provide valid login type'
      })
    }

  }
}