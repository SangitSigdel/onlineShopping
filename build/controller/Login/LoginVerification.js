"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginsChecker_1 = require("./LoginsChecker");
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
            return LoginsChecker_1.fbLoginCheck(token);
        }
    };
    return facebookVerify;
}());
var gmailVerify = /** @class */ (function () {
    function gmailVerify() {
    }
    gmailVerify.prototype.verifyToken = function (token, loginType) {
        if (loginType === 'gmail') {
            return LoginsChecker_1.googleLoginCheck(token);
        }
    };
    return gmailVerify;
}());
var emailVerify = /** @class */ (function () {
    function emailVerify() {
    }
    emailVerify.prototype.verifyToken = function (token, loginType) {
        if (loginType === 'email') {
            return LoginsChecker_1.emailLoginCheck(token);
        }
    };
    return emailVerify;
}());
function loginChecks(token, loginType) {
    var returnFromVerifyToken;
    var result;
    logins.forEach(function (el) {
        returnFromVerifyToken = el.verifyToken(token, loginType);
        if (returnFromVerifyToken === true || false) {
            result = returnFromVerifyToken;
        }
    });
    return result;
}
var logins = [
    new facebookVerify(),
    new gmailVerify(),
    new emailVerify()
];
