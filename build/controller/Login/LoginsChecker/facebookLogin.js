"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
function fbLoginCheck(token) {
    var data = {
        input_token: "{token-to-inspect}",
        access_token: "{app-token-or-admin-token}"
    };
    axios_1.default.get('http://graph.facebook.com/debug_token', data)
        .then(function (response) {
        console.log(response.status);
        return true;
    })
        .catch(function (err) {
        console.log(err);
        return false;
    });
    return false;
}
exports.fbLoginCheck = fbLoginCheck;
