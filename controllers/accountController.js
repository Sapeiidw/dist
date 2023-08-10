"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = exports.destroy = exports.update = exports.store = exports.show = exports.index = void 0;
const accountService_1 = require("../services/accountService");
const account_1 = require("../schemas/public/account");
const index = async (req, res, next) => {
    try {
        const data = await (0, accountService_1.getAccount)();
        return res.status(200).json({
            message: "Success Get Account",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.index = index;
const show = async (req, res, next) => {
    try {
        const data = await (0, accountService_1.getAccountById)(parseInt(req.params.id_account));
        return res.status(200).json({
            message: "Success Get Account",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.show = show;
const store = async (req, res, next) => {
    try {
        const validate = account_1.insertAccountSchema.parse(req.body);
        const data = await (0, accountService_1.createAccount)(validate);
        return res.status(200).json({
            message: "Success Create Account",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.store = store;
const update = async (req, res, next) => {
    try {
        const validate = account_1.insertAccountSchema.parse(req.body);
        const data = await (0, accountService_1.updateAccount)(validate);
        return res.status(200).json({
            message: "Success Update Account",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.update = update;
const destroy = async (req, res, next) => {
    try {
        const data = await (0, accountService_1.deleteAccount)(parseInt(req.params.id_account));
        return res.status(200).json({
            message: "Success Delete Account",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = destroy;
const category = async (req, res, next) => {
    try {
        const batas_bawah = parseInt(req.params.batas_bawah);
        const batas_atas = parseInt(req.params.batas_atas);
        const data = await (0, accountService_1.getAccountByCategory)(batas_bawah, batas_atas);
        return res.status(200).json({
            message: "Success Get Account",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.category = category;
