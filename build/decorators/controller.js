"use strict";
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
            if (method) {
                exports.router[method]("" + rootRoute + route, handler);
            }
        }
    };
}
exports.controller = controller;
