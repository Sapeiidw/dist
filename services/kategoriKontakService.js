"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteKategoriKontak = exports.updateKategoriKontak = exports.createKategoriKontak = exports.getKategoriKontakById = exports.getKategoriKontak = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const kategori_kontak_1 = require("../schemas/public/kategori_kontak");
const db_1 = __importDefault(require("../libs/db"));
const getKategoriKontak = async () => {
    const data = await db_1.default.select().from(kategori_kontak_1.kategoriKontak);
    return data;
};
exports.getKategoriKontak = getKategoriKontak;
const getKategoriKontakById = async (params) => {
    const data = await db_1.default
        .select()
        .from(kategori_kontak_1.kategoriKontak)
        .where((0, drizzle_orm_1.eq)(kategori_kontak_1.kategoriKontak.id, params));
    return data[0];
};
exports.getKategoriKontakById = getKategoriKontakById;
const createKategoriKontak = async (params) => {
    const data = await db_1.default.insert(kategori_kontak_1.kategoriKontak).values(params).returning();
    return data[0];
};
exports.createKategoriKontak = createKategoriKontak;
const updateKategoriKontak = async (params, form) => {
    const data = await db_1.default
        .update(kategori_kontak_1.kategoriKontak)
        .set(form)
        .where((0, drizzle_orm_1.eq)(kategori_kontak_1.kategoriKontak.id, params))
        .returning();
    return data[0];
};
exports.updateKategoriKontak = updateKategoriKontak;
const deleteKategoriKontak = async (id) => {
    const data = await db_1.default
        .delete(kategori_kontak_1.kategoriKontak)
        .where((0, drizzle_orm_1.eq)(kategori_kontak_1.kategoriKontak.id, id))
        .returning();
    return data[0];
};
exports.deleteKategoriKontak = deleteKategoriKontak;
