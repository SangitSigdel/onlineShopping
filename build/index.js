"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var decorators_1 = require("./decorators");
var appError_1 = require("./utils/appError");
var errorController_1 = require("./controller/errorController");
require("./controller/Login/LoginController");
require("./controller/product/productController");
require("./controller/user/userController");
var app = express_1.default();
app.use(express_1.default.json());
app.use(decorators_1.router);
// Serving a public file
app.use(express_1.default.static(__dirname + "/public"));
// Handling undefined route error
app.all('*', function (req, res, next) {
    next(new appError_1.AppError("Can't find " + req.originalUrl + " on this server", 404));
});
// Global error hadler
app.use(errorController_1.globalErrorHandler);
module.exports = app;
