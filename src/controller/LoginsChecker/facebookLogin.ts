import axios from 'axios'

export function fbLoginCheck(token: string): boolean {

  let data: object = {
    input_token: "{token-to-inspect}",
    access_token: "{app-token-or-admin-token}"
  }
  axios.get('http://graph.facebook.com/debug_token', data)
    .then(function (response) {
      console.log(response.status)
      return true
    })
    .catch(function (err) {
      console.log(err)
      return false
    })
  return false
}