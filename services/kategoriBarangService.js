"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteKategoriBarang = exports.updateKategoriBarang = exports.createKategoriBarang = exports.getKategoriBarangById = exports.getKategoriBarang = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const kategori_barang_1 = require("../schemas/public/kategori_barang");
const db_1 = __importDefault(require("../libs/db"));
const getKategoriBarang = async () => {
    const data = await db_1.default.select().from(kategori_barang_1.kategoriBarang);
    return data;
};
exports.getKategoriBarang = getKategoriBarang;
const getKategoriBarangById = async (params) => {
    const data = await db_1.default
        .select()
        .from(kategori_barang_1.kategoriBarang)
        .where((0, drizzle_orm_1.eq)(kategori_barang_1.kategoriBarang.id, params));
    return data[0];
};
exports.getKategoriBarangById = getKategoriBarangById;
const createKategoriBarang = async (params) => {
    const data = await db_1.default.insert(kategori_barang_1.kategoriBarang).values(params).returning();
    return data[0];
};
exports.createKategoriBarang = createKategoriBarang;
const updateKategoriBarang = async (params) => {
    const data = await db_1.default
        .update(kategori_barang_1.kategoriBarang)
        .set(params)
        .where((0, drizzle_orm_1.eq)(kategori_barang_1.kategoriBarang.id, params.id))
        .returning();
    return data[0];
};
exports.updateKategoriBarang = updateKategoriBarang;
const deleteKategoriBarang = async (id) => {
    const data = await db_1.default
        .delete(kategori_barang_1.kategoriBarang)
        .where((0, drizzle_orm_1.eq)(kategori_barang_1.kategoriBarang.id, id))
        .returning();
    return data[0];
};
exports.deleteKategoriBarang = deleteKategoriBarang;
