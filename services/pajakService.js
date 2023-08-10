"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePajak = exports.updatePajak = exports.createPajak = exports.getPajakByUsernamenya = exports.getPajak = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const pajak_1 = require("../schemas/public/pajak");
const db_1 = __importDefault(require("../libs/db"));
const getPajak = async () => {
    const data = await db_1.default.select().from(pajak_1.pajak);
    return data;
};
exports.getPajak = getPajak;
const getPajakByUsernamenya = async (params) => {
    const data = await db_1.default
        .select()
        .from(pajak_1.pajak)
        .where((0, drizzle_orm_1.eq)(pajak_1.pajak.id, params));
    return data[0];
};
exports.getPajakByUsernamenya = getPajakByUsernamenya;
const createPajak = async (params) => {
    const data = await db_1.default.insert(pajak_1.pajak).values(params).returning();
    return data[0];
};
exports.createPajak = createPajak;
const updatePajak = async (params) => {
    const data = await db_1.default
        .update(pajak_1.pajak)
        .set(params)
        .where((0, drizzle_orm_1.eq)(pajak_1.pajak.id, params.id))
        .returning();
    return data[0];
};
exports.updatePajak = updatePajak;
const deletePajak = async (id) => {
    const data = await db_1.default
        .delete(pajak_1.pajak)
        .where((0, drizzle_orm_1.eq)(pajak_1.pajak.id, id))
        .returning();
    return data[0];
};
exports.deletePajak = deletePajak;
