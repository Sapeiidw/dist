"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDepartemen = exports.updateDepartemen = exports.createDepartemen = exports.getDepartemenById = exports.getDepartemen = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const departemen_1 = require("../schemas/hr/departemen");
const db_1 = __importDefault(require("../libs/db"));
const getDepartemen = async () => {
    const data = await db_1.default.select().from(departemen_1.departemen);
    return data;
};
exports.getDepartemen = getDepartemen;
const getDepartemenById = async (params) => {
    const data = await db_1.default
        .select()
        .from(departemen_1.departemen)
        .where((0, drizzle_orm_1.eq)(departemen_1.departemen.id_departemen, params));
    return data[0];
};
exports.getDepartemenById = getDepartemenById;
const createDepartemen = async (params) => {
    const data = await db_1.default.insert(departemen_1.departemen).values(params).returning();
    return data[0];
};
exports.createDepartemen = createDepartemen;
const updateDepartemen = async (params) => {
    const data = await db_1.default
        .update(departemen_1.departemen)
        .set(params)
        .where((0, drizzle_orm_1.eq)(departemen_1.departemen.id_departemen, params.id_departemen))
        .returning();
    return data[0];
};
exports.updateDepartemen = updateDepartemen;
const deleteDepartemen = async (params) => {
    const data = await db_1.default
        .delete(departemen_1.departemen)
        .where((0, drizzle_orm_1.eq)(departemen_1.departemen.id_departemen, params))
        .returning();
    return data[0];
};
exports.deleteDepartemen = deleteDepartemen;
