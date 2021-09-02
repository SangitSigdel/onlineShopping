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
var decorators_1 = require("../../decorators");
var usreController = /** @class */ (function () {
    function usreController() {
    }
    usreController.prototype.getProduct = function (req, res) {
        res.status(200).send('get user');
    };
    usreController.prototype.createProduct = function (req, res) {
        res.status(200).send('create user');
    };
    usreController.prototype.editProduct = function (req, res) {
        res.status(200).send('edit user route');
    };
    usreController.prototype.delProduct = function (req, res) {
        res.status(200).send('delete user');
    };
    __decorate([
        decorators_1.get('user'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], usreController.prototype, "getProduct", null);
    __decorate([
        decorators_1.post('user'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], usreController.prototype, "createProduct", null);
    __decorate([
        decorators_1.patch('user'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], usreController.prototype, "editProduct", null);
    __decorate([
        decorators_1.del('user'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], usreController.prototype, "delProduct", null);
    usreController = __decorate([
        decorators_1.controller('/')
    ], usreController);
    return usreController;
}());
