"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoose = void 0;
var app = require('./index');
var dotenv = require('dotenv');
exports.mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
var db_password = process.env.DATABASE_PASSWORD;
var DB = (_a = process.env.DATABASE) === null || _a === void 0 ? void 0 : _a.replace('<password>', db_password);
exports.mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})
    .then(function con() {
    console.log('database connected successfully');
});
var PORT = process.env.PORT;
var server = app.listen(PORT, function () {
    console.log("Server is running in the port " + PORT);
});
