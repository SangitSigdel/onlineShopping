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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = exports.mongodbController = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var userModel_1 = require("../../model/mongoDb/userModel");
var appError_1 = require("../../utils/appError");
// const _ = require('lodash')
var mongodbController = /** @class */ (function () {
    function mongodbController(model) {
        this.model = model;
    }
    mongodbController.prototype.createData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var newData, signUpData, err_1, errorData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.model.create(data)];
                    case 1:
                        newData = _a.sent();
                        if (this.model === userModel_1.userModel) {
                            signUpData = new userModelActions(userModel_1.userModel).signUpUser(newData);
                            return [2 /*return*/, signUpData];
                        }
                        else {
                            return [2 /*return*/, newData];
                        }
                        return [3 /*break*/, 3];
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
            var features, data, err_2, errorData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        features = new APIFeatuers(this.model.find(), reqQuery).filter().sort().limit().pagination();
                        return [4 /*yield*/, features.query];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                    case 2:
                        err_2 = _a.sent();
                        errorData = err_2;
                        Object.assign(errorData, { error: true });
                        return [2 /*return*/, errorData];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    mongodbController.prototype.getSingleData = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var signUpData, data, err_3, errorData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (this.model === userModel_1.userModel) {
                            signUpData = new userModelActions(userModel_1.userModel).loginUser(req);
                            return [2 /*return*/, signUpData];
                        }
                        return [4 /*yield*/, this.model.findById(req.params.id)];
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
var userModelActions = /** @class */ (function () {
    function userModelActions(dbModel) {
        this.dbModel = dbModel;
    }
    userModelActions.prototype.createToken = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var jwt_secrete, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jwt_secrete = process.env.JWT_SECRET;
                        return [4 /*yield*/, jsonwebtoken_1.default.sign({ id: userId }, jwt_secrete, {
                                expiresIn: process.env.JWT_EXPIRES_IN
                            })];
                    case 1:
                        token = _a.sent();
                        return [2 /*return*/, token];
                }
            });
        });
    };
    userModelActions.prototype.signUpUser = function (newData) {
        return __awaiter(this, void 0, void 0, function () {
            var jwt_secrete, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jwt_secrete = process.env.JWT_SECRET;
                        return [4 /*yield*/, this.createToken(newData._id)];
                    case 1:
                        token = _a.sent();
                        Object.assign(newData, { token: token });
                        console.log(newData);
                        return [2 /*return*/, newData];
                }
            });
        });
    };
    userModelActions.prototype.loginUser = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, error, user, correct, error, token, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, email = _a.email, password = _a.password;
                        if (!email || !password) {
                            error = {
                                error: true,
                                response: 'please provide email and password'
                            };
                            return [2 /*return*/, error];
                        }
                        return [4 /*yield*/, this.dbModel.findOne({ email: email }).select('+password')];
                    case 1:
                        user = _b.sent();
                        return [4 /*yield*/, user.correctPassword(password, user.password)];
                    case 2:
                        correct = _b.sent();
                        console.log('the password is ', correct);
                        if (!user || !correct) {
                            error = {
                                error: true,
                                response: 'Incorrect email or password'
                            };
                            return [2 /*return*/, error];
                        }
                        return [4 /*yield*/, this.createToken(user._id)];
                    case 3:
                        token = _b.sent();
                        console.log(token);
                        result = {
                            token: token
                        };
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return userModelActions;
}());
var protect = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var token, JWT_SECRET, decode, freshUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // Getting token and check if it is there
                console.log('Hello from middleware 😛');
                JWT_SECRET = process.env.JWT_SECRET;
                if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
                    token = req.headers.authorization.split(' ')[1];
                }
                if (!token) {
                    return [2 /*return*/, next(new appError_1.AppError('You are not logged in! Please log in to get access', 401))];
                }
                return [4 /*yield*/, (jsonwebtoken_1.default.verify(token, JWT_SECRET))
                    // Check if user still exists
                    // BE CAREFUL THE USER MODEL IS DIRECT IMPLEMENTED IN THE CONTROLLER TYPESCRIPT FILE 
                ];
            case 1:
                decode = _a.sent();
                return [4 /*yield*/, userModel_1.userModel.findById(decode.id)];
            case 2:
                freshUser = _a.sent();
                if (!freshUser) {
                    return [2 /*return*/, next(new appError_1.AppError('The user belonging to this token no longer exists', 401))];
                }
                // Check if user changed password after issuing the token
                if (freshUser.changedPasswordAfter(decode.iat)) {
                    return [2 /*return*/, next(new appError_1.AppError('User Recently changed password, Please login in again ', 401))];
                }
                req.user = freshUser;
                next();
                return [2 /*return*/];
        }
    });
}); };
exports.protect = protect;
var APIFeatuers = /** @class */ (function () {
    function APIFeatuers(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    APIFeatuers.prototype.filter = function () {
        var queryObj = __assign({}, this.queryString);
        var excludeFields = ['page', 'sort', 'limit', 'fields'];
        excludeFields.forEach(function (el) { return delete queryObj[el]; });
        // Advanced filtering
        var queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, function (match) { return "$" + match; });
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    };
    APIFeatuers.prototype.sort = function () {
        if (this.queryString.sort) {
            var sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(this.queryString.sort);
        }
        else {
            this.query = this.query.sort('-createdAt');
        }
        return this;
    };
    APIFeatuers.prototype.limit = function () {
        if (this.queryString.fields) {
            var fields = this.queryString.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        }
        else {
            this.query = this.query.select('-_v');
        }
        return this;
    };
    APIFeatuers.prototype.pagination = function () {
        var page = this.queryString.page * 1 || 1;
        var limit = this.queryString.limit * 1 || 10;
        var skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit);
        return this;
    };
    return APIFeatuers;
}());
