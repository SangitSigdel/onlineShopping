import { OAuth2Client } from 'google-auth-library'

export function googleLoginCheck(token: string): boolean | void {

  const CLIENT_ID = "848679254707-uruu36ma1oh5sr4mk71dt68d1vbnliba.apps.googleusercontent.com"
  const client = new OAuth2Client(CLIENT_ID)

  async function verify() {
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,
      });
      const payload = ticket.getPayload();
      // console.log(payload)
      return true
    }

    catch (error) {
      // console.log(error)
      return false
    }

  }
  verify().then(function (result: boolean) {
    // console.log(result)
    return result
  })
}
