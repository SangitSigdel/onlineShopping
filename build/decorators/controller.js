"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
                exports.router[method].apply(exports.router, __spreadArrays(["" + rootRoute + route], middlewares, [handler]));
            }
        }
    };
}
exports.controller = controller;
