"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGudang = exports.updateGudang = exports.createGudang = exports.getGudangByUsernamenya = exports.getGudang = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const gudang_1 = require("../schemas/public/gudang");
const db_1 = __importDefault(require("../libs/db"));
const getGudang = async () => {
    const data = await db_1.default.select().from(gudang_1.gudang);
    return data;
};
exports.getGudang = getGudang;
const getGudangByUsernamenya = async (params) => {
    const data = await db_1.default
        .select()
        .from(gudang_1.gudang)
        .where((0, drizzle_orm_1.eq)(gudang_1.gudang.idGudang, params));
    return data[0];
};
exports.getGudangByUsernamenya = getGudangByUsernamenya;
const createGudang = async (params) => {
    const data = await db_1.default.insert(gudang_1.gudang).values(params).returning();
    return data[0];
};
exports.createGudang = createGudang;
const updateGudang = async (params) => {
    const data = await db_1.default
        .update(gudang_1.gudang)
        .set(params)
        .where((0, drizzle_orm_1.eq)(gudang_1.gudang.idGudang, params.idGudang))
        .returning();
    return data[0];
};
exports.updateGudang = updateGudang;
const deleteGudang = async (idGudang) => {
    const data = await db_1.default
        .delete(gudang_1.gudang)
        .where((0, drizzle_orm_1.eq)(gudang_1.gudang.idGudang, idGudang))
        .returning();
    return data[0];
};
exports.deleteGudang = deleteGudang;
