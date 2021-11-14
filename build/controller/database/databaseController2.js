"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var databaseAdapter = /** @class */ (function () {
    function databaseAdapter() {
    }
    // RESPONSE BACK FROM THE SERVER    
    databaseAdapter.prototype.responseStatus = function (dbError, res) {
        if (!dbError.error) {
            this.success(res);
        }
        else if (dbError.error) {
            this.failed(res);
        }
        else {
            this.internalError(res);
        }
    };
    databaseAdapter.prototype.success = function (res) {
        res.status(200).send({
            status: 'success',
            data: this.dbResponse
        });
    };
    databaseAdapter.prototype.failed = function (res) {
        res.status(400).send({
            status: 'failed',
            message: this.dbResponse
        });
    };
    databaseAdapter.prototype.internalError = function (res) {
        res.status(500).send({
            status: 'failed',
            messge: 'internal server error please contact admin'
        });
    };
    databaseAdapter.prototype.createData = function (dbInterface, req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, dbInterface.createData(req.body)];
                    case 1:
                        _a.dbResponse = _b.sent();
                        console.log('the database response is ', this.dbResponse.error);
                        this.responseStatus(this.dbResponse, res);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    databaseAdapter.prototype.getData = function (dbInterface, req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        // Building a query
                        _a = this;
                        return [4 /*yield*/, dbInterface.getData(req.query)];
                    case 1:
                        // Building a query
                        _a.dbResponse = _b.sent();
                        this.responseStatus(this.dbResponse, res);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _b.sent();
                        console.log(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    databaseAdapter.prototype.getSingleData = function (dbInterface, req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, dbInterface.getSingleData(req)];
                    case 1:
                        _a.dbResponse = _b.sent();
                        this.responseStatus(this.dbResponse, res);
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _b.sent();
                        console.log(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    databaseAdapter.prototype.updateData = function (dbInterface, req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, dbInterface.updateData(req.params.id, req.body)];
                    case 1:
                        _a.dbResponse = _b.sent();
                        this.responseStatus(this.dbResponse, res);
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _b.sent();
                        console.log(err_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    databaseAdapter.prototype.deleteData = function (dbInterface, req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, err_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, dbInterface.deleteData(req.params.id)];
                    case 1:
                        _a.dbResponse = _b.sent();
                        this.responseStatus(this.dbResponse, res);
                        return [3 /*break*/, 3];
                    case 2:
                        err_5 = _b.sent();
                        console.log(err_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return databaseAdapter;
}());
exports.databaseAdapter = databaseAdapter;
