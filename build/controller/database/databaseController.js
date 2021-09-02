"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseController = void 0;
var databaseController = /** @class */ (function () {
    function databaseController() {
    }
    // CURD operations interface for the system
    databaseController.prototype.responseStatus = function (dbResponse, res) {
        if (dbResponse) {
            this.success(res);
        }
        else if (!dbResponse) {
            this.failed(res);
        }
        else {
            this.internalError(res);
        }
    };
    databaseController.prototype.success = function (res) {
        res.status(200).send({
            status: 'success',
            data: this.dbResponse
        });
    };
    databaseController.prototype.failed = function (res) {
        res.status(400).send({
            status: 'failed',
            message: this.dbResponse.error
        });
    };
    databaseController.prototype.internalError = function (res) {
        res.status(500).send({
            status: 'failed',
            messge: 'internal server error please contact admin'
        });
    };
    databaseController.prototype.dbCreate = function (req, res) {
        this.dbResponse = this.createData(req, res);
        this.responseStatus(this.dbResponse.success, res);
    };
    databaseController.prototype.dbUpdate = function (req, res) {
        this.dbResponse = this.updateData(req, res);
        this.responseStatus(this.dbResponse.success, res);
    };
    databaseController.prototype.dbRead = function (req, res) {
        this.dbResponse = this.readData(req, res);
        this.responseStatus(this.dbResponse.success, res);
    };
    databaseController.prototype.dbDelete = function (req, res) {
        this.dbResponse = this.deleteData(req, res);
        this.responseStatus(this.dbResponse.success, res);
    };
    return databaseController;
}());
exports.databaseController = databaseController;
