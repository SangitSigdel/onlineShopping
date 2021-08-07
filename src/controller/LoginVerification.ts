
export class LoginVerification {

  LoginCheck(login: string, token: string): boolean | void {
    return loginChecks(token, login)
  }
}

class facebookVerify {

  verifyToken(token: string, loginType: string) {
    if (loginType === 'facebook') {
      console.log('the facebook token', token)
      return true
    }
  }

}


class gmailVerify {

  verifyToken(token: string, loginType: string) {
    if (loginType === 'gmail') {
      console.log('the gmail token', token)
      return true
    }
  }

}

class emailVerify {

  verifyToken(token: string, loginType: string) {
    if (loginType === 'email') {
      console.log('the email token', token)
      return true
    }
  }

}


function loginChecks(token: string, loginType: string) {
  let result = false
  logins.forEach(el => {
    // be careful if the false is thrown by the login verification, ther is no any condition to check it
    if (el.verifyToken(token, loginType) == true) result = true
  });
  return result
}


const logins = [
  new facebookVerify(),
  new gmailVerify(),
  new emailVerify()
]


// import { OAuth2Client } from 'google-auth-library'


// From the official website 
// export class LoginVerification {

//   facebookLoginVerification(token: string) {
//     // GET graph.facebook.com/debug_token?
//     //  input_token={token-to-inspect}
//     //  &access_token={app-token-or-admin-token}
//     return false
//   }

//   googleLoginVerification(token: string) {
//     const client = new OAuth2Client(CLIENT_ID);
//     async function verify() {
//       const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
//         // Or, if multiple clients access the backend:
//         //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//       });
//       const payload = ticket.getPayload();
//       const userid = payload['sub'];
//       console.log(payload)
//       // If request specified a G Suite domain:
//       // const domain = payload['hd'];
//       // You will get all the required information about the user from the payload consloe log
//     }

//     verify().catch(console.error);
//     // Source: https://developers.google.com/identity/sign-in/web/backend-auth

//     return false
//   }

//   emailLoginVerification(token: string) {
//     // verify JWT
//     return false
//   }

// }