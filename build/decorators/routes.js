"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = exports.get = void 0;
require("reflect-metadata");
var decorators_1 = require("../decorators");
function bindRoutes(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.get = bindRoutes(decorators_1.methods.GET);
exports.post = bindRoutes(decorators_1.methods.POST);
