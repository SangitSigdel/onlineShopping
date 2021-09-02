"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoginVerification_1 = require("./LoginVerification");
var decorators_1 = require("../../decorators");
var loginVerifier = new LoginVerification_1.LoginVerification();
var verification = false;
var loginTypes;
(function (loginTypes) {
    loginTypes["facebook"] = "facebook";
    loginTypes["email"] = "email";
    loginTypes["gmail"] = "gmail";
})(loginTypes || (loginTypes = {}));
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.googleLogin = function (req, res) {
        res.status(200).send("\n    <html lang=\"en\">\n    <head>\n      <meta name=\"google-signin-scope\" content=\"profile email\">\n      <meta name=\"google-signin-client_id\" content=\"848679254707-uruu36ma1oh5sr4mk71dt68d1vbnliba.apps.googleusercontent.com\">\n      <script src=\"https://apis.google.com/js/platform.js\" async defer></script>\n    </head>\n    <body>\n      <div class=\"g-signin2\" data-onsuccess=\"onSignIn\" data-theme=\"dark\"></div>\n      <script>\n        function onSignIn(googleUser) {\n          // Useful data for your client-side scripts:\n          var profile = googleUser.getBasicProfile();\n          console.log(\"ID: \" + profile.getId()); // Don't send this directly to your server!\n          console.log('Full Name: ' + profile.getName());\n          console.log('Given Name: ' + profile.getGivenName());\n          console.log('Family Name: ' + profile.getFamilyName());\n          console.log(\"Image URL: \" + profile.getImageUrl());\n          console.log(\"Email: \" + profile.getEmail());\n  \n          // The ID token you need to pass to your backend:\n          var id_token = googleUser.getAuthResponse().id_token;\n          console.log(\"ID Token: \" + id_token);\n        }\n      </script>\n    </body>\n  </html>\n  ");
    };
    LoginController.prototype.loginUser = function (req, res) {
        var login;
        for (var type in loginTypes) {
            // console.log(req.body.loginType)
            if (type === req.body.loginType) {
                login = loginVerifier.LoginCheck(type, req.body.token);
                verification = true;
            }
        }
        if (login) {
            // Search user in the database and if not exists create a new account in his name and if exists, proceed to login by providing a login token.
            res.status(200).send({
                status: 'success',
                login: login
            });
        }
        else {
            res.status(400).send({
                status: 'failed',
                message: 'please provide valid login type with a valid token'
            });
        }
    };
    __decorate([
        decorators_1.get('login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "googleLogin", null);
    __decorate([
        decorators_1.post('login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "loginUser", null);
    LoginController = __decorate([
        decorators_1.controller('/')
    ], LoginController);
    return LoginController;
}());
