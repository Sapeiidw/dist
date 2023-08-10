"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRegister = exports.AuthLogin = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../libs/db"));
const pengguna_1 = require("../schemas/public/pengguna");
const pegawai_1 = require("../schemas/hr/pegawai");
const AuthLogin = async (usernamenya) => {
    const data = await db_1.default
        .select()
        .from(pengguna_1.pengguna)
        .leftJoin(pegawai_1.pegawai, (0, drizzle_orm_1.eq)(pengguna_1.pengguna.idPegawai, pegawai_1.pegawai.id_pegawai))
        .where((0, drizzle_orm_1.eq)(pengguna_1.pengguna.usernamenya, usernamenya));
    return data[0];
};
exports.AuthLogin = AuthLogin;
const AuthRegister = async (data) => {
    const insert = await db_1.default.insert(pengguna_1.pengguna).values(data).returning();
    return insert;
};
exports.AuthRegister = AuthRegister;
