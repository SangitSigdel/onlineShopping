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
var decorators_1 = require("../decorators");
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
    LoginController.prototype.loginUser = function (req, res) {
        var login;
        for (var type in loginTypes) {
            if (type === req.body.loginType) {
                login = loginVerifier.LoginCheck(type, req.body.token);
                verification = true;
            }
        }
        if (login) {
            res.status(200).send({
                status: 'success',
                login: login
            });
        }
        else {
            res.status(400).send({
                status: 'failed',
                message: 'please provide valid login type or token'
            });
        }
    };
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
