"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSatuan = exports.updateSatuan = exports.createSatuan = exports.getSatuanById = exports.getSatuan = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const satuan_1 = require("../schemas/public/satuan");
const db_1 = __importDefault(require("../libs/db"));
const getSatuan = async () => {
    const data = await db_1.default.select().from(satuan_1.satuan);
    return data;
};
exports.getSatuan = getSatuan;
const getSatuanById = async (params) => {
    const data = await db_1.default.select().from(satuan_1.satuan).where((0, drizzle_orm_1.eq)(satuan_1.satuan.id, params));
    return data[0];
};
exports.getSatuanById = getSatuanById;
const createSatuan = async (params) => {
    const data = await db_1.default.insert(satuan_1.satuan).values(params).returning();
    return data[0];
};
exports.createSatuan = createSatuan;
const updateSatuan = async (params, form) => {
    const data = await db_1.default
        .update(satuan_1.satuan)
        .set(form)
        .where((0, drizzle_orm_1.eq)(satuan_1.satuan.id, params))
        .returning();
    return data[0];
};
exports.updateSatuan = updateSatuan;
const deleteSatuan = async (id) => {
    const data = await db_1.default.delete(satuan_1.satuan).where((0, drizzle_orm_1.eq)(satuan_1.satuan.id, id)).returning();
    return data[0];
};
exports.deleteSatuan = deleteSatuan;
