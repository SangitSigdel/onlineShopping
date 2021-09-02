import { Request, Response } from 'express'

import { LoginVerification } from './LoginVerification'
import { controller, get, post } from '../../decorators'


const loginVerifier = new LoginVerification()
let verification = false

enum loginTypes {
  facebook = 'facebook',
  email = 'email',
  gmail = 'gmail'
}

@controller('/')
class LoginController {

  @get('login')
  googleLogin(req: Request, res: Response): void {
    res.status(200).send(`
    <html lang="en">
    <head>
      <meta name="google-signin-scope" content="profile email">
      <meta name="google-signin-client_id" content="848679254707-uruu36ma1oh5sr4mk71dt68d1vbnliba.apps.googleusercontent.com">
      <script src="https://apis.google.com/js/platform.js" async defer></script>
    </head>
    <body>
      <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
      <script>
        function onSignIn(googleUser) {
          // Useful data for your client-side scripts:
          var profile = googleUser.getBasicProfile();
          console.log("ID: " + profile.getId()); // Don't send this directly to your server!
          console.log('Full Name: ' + profile.getName());
          console.log('Given Name: ' + profile.getGivenName());
          console.log('Family Name: ' + profile.getFamilyName());
          console.log("Image URL: " + profile.getImageUrl());
          console.log("Email: " + profile.getEmail());
  
          // The ID token you need to pass to your backend:
          var id_token = googleUser.getAuthResponse().id_token;
          console.log("ID Token: " + id_token);
        }
      </script>
    </body>
  </html>
  `)
  }

  @post('login')
  loginUser(req: Request, res: Response): void {

    let login: boolean | void

    for (let type in loginTypes) {
      // console.log(req.body.loginType)
      if (type === req.body.loginType) {
        login = loginVerifier.LoginCheck(type, req.body.token)
        verification = true
      }
    }
    if (login) {
      // Search user in the database and if not exists create a new account in his name and if exists, proceed to login by providing a login token.
      res.status(200).send({
        status: 'success',
        login
      })
    }
    else {
      res.status(400).send({
        status: 'failed',
        message: 'please provide valid login type with a valid token'
      })
    }

  }
}