"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginVerification = void 0;
var LoginVerification = /** @class */ (function () {
    function LoginVerification() {
    }
    LoginVerification.prototype.LoginCheck = function (login, token) {
        return loginChecks(token, login);
    };
    return LoginVerification;
}());
exports.LoginVerification = LoginVerification;
var facebookVerify = /** @class */ (function () {
    function facebookVerify() {
    }
    facebookVerify.prototype.verifyToken = function (token, loginType) {
        if (loginType === 'facebook') {
            console.log('the facebook token', token);
            return true;
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
            return true;
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
            return true;
        }
    };
    return emailVerify;
}());
function loginChecks(token, loginType) {
    var result = false;
    logins.forEach(function (el) {
        // be careful if the false is thrown by the login verification, ther is no any condition to check it
        if (el.verifyToken(token, loginType) == true)
            result = true;
    });
    return result;
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
