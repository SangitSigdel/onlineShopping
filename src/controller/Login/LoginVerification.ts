import { fbLoginCheck, emailLoginCheck, googleLoginCheck } from './LoginsChecker'

export class LoginVerification {

  LoginCheck(login: string, token: string): boolean | void {
    return loginChecks(token, login)
  }
}

class facebookVerify {

  verifyToken(token: string, loginType: string) {
    if (loginType === 'facebook') {
      return fbLoginCheck(token)
    }
  }

}


class gmailVerify {

  verifyToken(token: string, loginType: string) {
    if (loginType === 'gmail') {
      return googleLoginCheck(token)
    }
  }

}

class emailVerify {

  verifyToken(token: string, loginType: string) {
    if (loginType === 'email') {
      return emailLoginCheck(token)
    }
  }

}


function loginChecks(token: string, loginType: string) {
  let returnFromVerifyToken: boolean | void
  let result: boolean | undefined

  logins.forEach(el => {
    returnFromVerifyToken = el.verifyToken(token, loginType)

    if (returnFromVerifyToken === true || false) {
      result = returnFromVerifyToken
    }

  });

  return result

}


const logins = [
  new facebookVerify(),
  new gmailVerify(),
  new emailVerify()
]