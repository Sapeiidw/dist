"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = exports.logout = exports.register = exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const authService_1 = require("../services/authService");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../libs/config"));
const pengguna_1 = require("../schemas/public/pengguna");
const login = async (req, res, next) => {
    try {
        const result = await (0, authService_1.AuthLogin)(req.body.usernamenya);
        if (!result) {
            return res.status(400).json({ message: "Username tidak ditemukan" });
        }
        if (!bcrypt_1.default.compareSync(req.body.passwordnya, result.pengguna.passwordnya)
        // req.body.passwordnya !== result[0].pengguna.passwordnya
        ) {
            throw new Error("Password salah");
        }
        const payload = {
            id: result.pengguna.idPegawai,
            usernamenya: result.pengguna.usernamenya,
            nama: result.pegawai && result.pegawai.nama,
        };
        const token = jsonwebtoken_1.default.sign(payload, config_1.default.JWT_SECRET);
        res.cookie("token", token, {
            maxAge: 1000 * 60 * 60 * 24 * 1,
            httpOnly: true,
            secure: false,
            sameSite: "lax",
        });
        res.status(200).json({
            message: "Login berhasil",
            data: result,
            token: token,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
const register = async (req, res, next) => {
    try {
        const validate = pengguna_1.insertPenggunaSchema.parse(req.body);
        const hash = bcrypt_1.default.hashSync(validate.passwordnya, 10);
        validate.passwordnya = hash;
        const result = await (0, authService_1.AuthRegister)(validate);
        console.log(result, "regis");
        res.status(200).json({
            message: "Register berhasil",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.register = register;
const logout = async (req, res, next) => {
    try {
        res.cookie("token", "", {
            maxAge: 0,
            httpOnly: true,
            secure: false,
            sameSite: "lax",
        });
        res.status(200).json({ message: "Logout berhasil" });
    }
    catch (error) {
        next(error);
    }
};
exports.logout = logout;
const checkAuth = async (req, res, next) => {
    try {
        return res.status(200).json({ message: "Token valid", data: req.user });
    }
    catch (error) {
        next(error);
    }
};
exports.checkAuth = checkAuth;
