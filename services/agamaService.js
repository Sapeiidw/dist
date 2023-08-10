"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAgama = exports.updateAgama = exports.createAgama = exports.getAgamaById = exports.getAgama = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const agama_1 = require("../schemas/public/agama");
const db_1 = __importDefault(require("../libs/db"));
const getAgama = async () => {
    const data = await db_1.default.select().from(agama_1.agama);
    return data;
};
exports.getAgama = getAgama;
const getAgamaById = async (params) => {
    const data = await db_1.default.select().from(agama_1.agama).where((0, drizzle_orm_1.eq)(agama_1.agama.id, params));
    return data[0];
};
exports.getAgamaById = getAgamaById;
const createAgama = async (params) => {
    const data = await db_1.default.insert(agama_1.agama).values(params).returning();
    return data[0];
};
exports.createAgama = createAgama;
const updateAgama = async (params, form) => {
    const data = await db_1.default
        .update(agama_1.agama)
        .set(form)
        .where((0, drizzle_orm_1.eq)(agama_1.agama.id, params))
        .returning();
    return data[0];
};
exports.updateAgama = updateAgama;
const deleteAgama = async (id) => {
    const data = await db_1.default.delete(agama_1.agama).where((0, drizzle_orm_1.eq)(agama_1.agama.id, id)).returning();
    return data[0];
};
exports.deleteAgama = deleteAgama;
