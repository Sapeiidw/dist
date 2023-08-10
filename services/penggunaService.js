"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePengguna = exports.updatePengguna = exports.createPengguna = exports.getPenggunaByUsernamenya = exports.getPengguna = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const pengguna_1 = require("../schemas/public/pengguna");
const db_1 = __importDefault(require("../libs/db"));
const getPengguna = async () => {
    const data = await db_1.default.select().from(pengguna_1.pengguna);
    return data;
};
exports.getPengguna = getPengguna;
const getPenggunaByUsernamenya = async (params) => {
    const data = await db_1.default
        .select()
        .from(pengguna_1.pengguna)
        .where((0, drizzle_orm_1.eq)(pengguna_1.pengguna.usernamenya, params));
    return data[0];
};
exports.getPenggunaByUsernamenya = getPenggunaByUsernamenya;
const createPengguna = async (params) => {
    const data = await db_1.default.insert(pengguna_1.pengguna).values(params).returning();
    return data[0];
};
exports.createPengguna = createPengguna;
const updatePengguna = async (params, form) => {
    const data = await db_1.default
        .update(pengguna_1.pengguna)
        .set(form)
        .where((0, drizzle_orm_1.eq)(pengguna_1.pengguna.usernamenya, params))
        .returning();
    return data[0];
};
exports.updatePengguna = updatePengguna;
const deletePengguna = async (params) => {
    const data = await db_1.default
        .delete(pengguna_1.pengguna)
        .where((0, drizzle_orm_1.eq)(pengguna_1.pengguna.usernamenya, params))
        .returning();
    return data[0];
};
exports.deletePengguna = deletePengguna;
