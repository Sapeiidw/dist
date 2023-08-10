"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.store = exports.show = exports.index = void 0;
const penggunaService_1 = require("../services/penggunaService");
const pengguna_1 = require("../schemas/public/pengguna");
const bcrypt_1 = __importDefault(require("bcrypt"));
const index = async (req, res, next) => {
    try {
        const data = await (0, penggunaService_1.getPengguna)();
        return res.status(200).json({
            message: "Success Get Pengguna",
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
        const data = await (0, penggunaService_1.getPenggunaByUsernamenya)(req.params.usernamenya);
        return res.status(200).json({
            message: "Success Get Pengguna",
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
        const validate = pengguna_1.insertPenggunaSchema.parse(req.body);
        const hash = bcrypt_1.default.hashSync(validate.passwordnya, 10);
        validate.passwordnya = hash;
        const check = await (0, penggunaService_1.getPenggunaByUsernamenya)(validate.usernamenya);
        if (check) {
            return res.status(400).json({
                message: "Username sudah digunakan",
            });
        }
        const data = await (0, penggunaService_1.createPengguna)(validate);
        return res.status(200).json({
            message: "Success Create Pengguna",
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
        const validate = pengguna_1.insertPenggunaSchema.parse(req.body);
        const hash = bcrypt_1.default.hashSync(validate.passwordnya, 10);
        validate.passwordnya = hash;
        const data = await (0, penggunaService_1.updatePengguna)(req.params.usernamenya, validate);
        return res.status(200).json({
            message: "Success Update Pengguna",
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
        const data = await (0, penggunaService_1.deletePengguna)(req.params.usernamenya);
        return res.status(200).json({
            message: "Success Delete Pengguna",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = destroy;
