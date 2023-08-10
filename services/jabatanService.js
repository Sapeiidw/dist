"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJabatan = exports.updateJabatan = exports.createJabatan = exports.getJabatanById = exports.getJabatan = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const jabatan_1 = require("../schemas/hr/jabatan");
const db_1 = __importDefault(require("../libs/db"));
const getJabatan = async () => {
    const data = await db_1.default.select().from(jabatan_1.jabatan);
    return data;
};
exports.getJabatan = getJabatan;
const getJabatanById = async (params) => {
    const data = await db_1.default.select().from(jabatan_1.jabatan).where((0, drizzle_orm_1.eq)(jabatan_1.jabatan.id, params));
    return data[0];
};
exports.getJabatanById = getJabatanById;
const createJabatan = async (params) => {
    const data = await db_1.default.insert(jabatan_1.jabatan).values(params).returning();
    return data[0];
};
exports.createJabatan = createJabatan;
const updateJabatan = async (params) => {
    const data = await db_1.default
        .update(jabatan_1.jabatan)
        .set(params)
        .where((0, drizzle_orm_1.eq)(jabatan_1.jabatan.id, params.id))
        .returning();
    return data[0];
};
exports.updateJabatan = updateJabatan;
const deleteJabatan = async (id) => {
    const data = await db_1.default.delete(jabatan_1.jabatan).where((0, drizzle_orm_1.eq)(jabatan_1.jabatan.id, id)).returning();
    return data[0];
};
exports.deleteJabatan = deleteJabatan;
