"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptionJabtanAtasan = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../libs/db"));
const jabatan_1 = require("../schemas/hr/jabatan");
const getOptionJabtanAtasan = async () => {
    const data = await db_1.default
        .select()
        .from(jabatan_1.jabatan)
        .where((0, drizzle_orm_1.eq)(jabatan_1.jabatan.isHeadDepartemen, true))
        .orderBy(jabatan_1.jabatan.jabatan);
    return data;
};
exports.getOptionJabtanAtasan = getOptionJabtanAtasan;
