"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginVerification = void 0;
var loginResult = false;
var LoginVerification = /** @class */ (function () {
    function LoginVerification() {
    }
    LoginVerification.prototype.LoginCheck = function (login, token) {
        loginChecks(token, login);
        return loginResult;
    };
    return LoginVerification;
}());
exports.LoginVerification = LoginVerification;
var facebookVerify = /** @class */ (function () {
    function facebookVerify() {
    }
    facebookVerify.prototype.verifyToken = function (token, loginType) {
        if (loginType === 'facebook') {
            console.log('the faebook token', token);
            loginResult = true;
        }
    };
    return facebookVerify;
}());
var gmailVerify = /** @class */ (function () {
    function gmailVerify() {
    }
    gmailVerify.prototype.verifyToken = function (token, loginType) {
        if (loginType === 'gmail') {
            console.log('the gmail token', token);
            loginResult = true;
        }
    };
    return gmailVerify;
}());
var emailVerify = /** @class */ (function () {
    function emailVerify() {
    }
    emailVerify.prototype.verifyToken = function (token, loginType) {
        if (loginType === 'email') {
            console.log('the email token', token);
            loginResult = true;
        }
    };
    return emailVerify;
}());
function loginChecks(token, loginType) {
    logins.forEach(function (el) {
        el.verifyToken(token, loginType);
    });
}
var logins = [
    new facebookVerify(),
    new gmailVerify(),
    new emailVerify()
];
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
