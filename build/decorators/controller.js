"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.router = void 0;
var express_1 = __importDefault(require("express"));
require("reflect-metadata");
exports.router = express_1.default.Router();
function controller(rootRoute) {
    return function (target) {
        for (var key in target.prototype) {
            var handler = target.prototype[key];
            var route = Reflect.getMetadata('path', target.prototype, key);
            var method = Reflect.getMetadata('method', target.prototype, key);
            var middlewares = Reflect.getMetadata('middleware', target.prototype, key) || [];
            console.log(middlewares);
            if (method) {
                exports.router[method].apply(exports.router, __spreadArray(__spreadArray(["" + rootRoute + route], middlewares), [handler]));
            }
        }
    };
}
exports.controller = controller;
