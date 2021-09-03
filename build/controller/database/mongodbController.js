"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.mongodbController = void 0;
var mongodbController = /** @class */ (function () {
    function mongodbController(model) {
        this.model = model;
    }
    mongodbController.prototype.createData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var newData, err_1, errorData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.create(data)];
                    case 1:
                        newData = _a.sent();
                        return [2 /*return*/, newData];
                    case 2:
                        err_1 = _a.sent();
                        errorData = err_1;
                        Object.assign(errorData, { error: true });
                        return [2 /*return*/, errorData];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    mongodbController.prototype.getData = function (reqQuery) {
        return __awaiter(this, void 0, void 0, function () {
            var queryObj_1, excludeFields, queryStr, query, sortBy, fields, page, limit, skip, numProduct, data, err_2, errorData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        queryObj_1 = __assign({}, reqQuery);
                        excludeFields = ['page', 'sort', 'limit', 'fields'];
                        excludeFields.forEach(function (el) { return delete queryObj_1[el]; });
                        queryStr = JSON.stringify(queryObj_1);
                        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, function (match) { return "$" + match; });
                        query = this.model.find(JSON.parse(queryStr));
                        // Sorting 
                        if (reqQuery.sort) {
                            sortBy = reqQuery.sort.split(',').join(' ');
                            query = query.sort(reqQuery.sort);
                        }
                        else {
                            query = query.sort('-createdAt');
                        }
                        // FIELD LIMITING
                        if (reqQuery.fields) {
                            fields = reqQuery.fields.split(',').join(' ');
                            query = query.select(fields);
                        }
                        else {
                            query = query.select('-_v');
                        }
                        page = reqQuery.page * 1 || 1;
                        limit = reqQuery.limit * 1 || 10;
                        skip = (page - 1) * limit;
                        query = query.skip(skip).limit(limit);
                        if (!reqQuery.page) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.model.countDocuments()];
                    case 1:
                        numProduct = _a.sent();
                        if (skip > numProduct)
                            throw new Error('this page doesnot exist');
                        _a.label = 2;
                    case 2: return [4 /*yield*/, query];
                    case 3:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 4:
                        err_2 = _a.sent();
                        errorData = err_2;
                        Object.assign(errorData, { error: true });
                        return [2 /*return*/, errorData];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    mongodbController.prototype.getSingleData = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_3, errorData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.findById(id)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2:
                        err_3 = _a.sent();
                        errorData = err_3;
                        Object.assign(errorData, { error: true });
                        return [2 /*return*/, errorData];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    mongodbController.prototype.updateData = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedData, err_4, errorData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.findByIdAndUpdate(id, data, {
                                new: true,
                                runValidators: true
                            })];
                    case 1:
                        updatedData = _a.sent();
                        return [2 /*return*/, updatedData];
                    case 2:
                        err_4 = _a.sent();
                        errorData = err_4;
                        Object.assign(errorData, { error: true });
                        return [2 /*return*/, errorData];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    mongodbController.prototype.deleteData = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteData, err_5, errorData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.findByIdAndDelete(id)];
                    case 1:
                        deleteData = _a.sent();
                        return [2 /*return*/, deleteData];
                    case 2:
                        err_5 = _a.sent();
                        errorData = err_5;
                        Object.assign(errorData, { error: true });
                        return [2 /*return*/, errorData];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return mongodbController;
}());
exports.mongodbController = mongodbController;
