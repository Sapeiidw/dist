"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteKontak = exports.updateKontak = exports.createKontak = exports.getKontakById = exports.getKontak = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const kontak_1 = require("../schemas/public/kontak");
const db_1 = __importDefault(require("../libs/db"));
const getKontak = async () => {
    const data = await db_1.default.select().from(kontak_1.kontak);
    return data;
};
exports.getKontak = getKontak;
const getKontakById = async (params) => {
    const data = await db_1.default
        .select()
        .from(kontak_1.kontak)
        .where((0, drizzle_orm_1.eq)(kontak_1.kontak.id, params));
    return data[0];
};
exports.getKontakById = getKontakById;
const createKontak = async (params) => {
    const data = await db_1.default.insert(kontak_1.kontak).values(params).returning();
    return data[0];
};
exports.createKontak = createKontak;
const updateKontak = async (params, form) => {
    const data = await db_1.default
        .update(kontak_1.kontak)
        .set(form)
        .where((0, drizzle_orm_1.eq)(kontak_1.kontak.id, params))
        .returning();
    return data[0];
};
exports.updateKontak = updateKontak;
const deleteKontak = async (params) => {
    const data = await db_1.default
        .delete(kontak_1.kontak)
        .where((0, drizzle_orm_1.eq)(kontak_1.kontak.id, params))
        .returning();
    return data[0];
};
exports.deleteKontak = deleteKontak;
