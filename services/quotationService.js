"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuotation = exports.updateQuotation = exports.createQuotation = exports.getQuotationByUsernamenya = exports.getQuotation = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const quotation_1 = require("../schemas/public/quotation");
const db_1 = __importDefault(require("../libs/db"));
const getQuotation = async () => {
    const data = await db_1.default.select().from(quotation_1.quotation);
    return data;
};
exports.getQuotation = getQuotation;
const getQuotationByUsernamenya = async (params) => {
    const data = await db_1.default
        .select()
        .from(quotation_1.quotation)
        .where((0, drizzle_orm_1.eq)(quotation_1.quotation.createdBy, params));
    return data[0];
};
exports.getQuotationByUsernamenya = getQuotationByUsernamenya;
const createQuotation = async (params) => {
    const data = await db_1.default.insert(quotation_1.quotation).values(params).returning();
    return data[0];
};
exports.createQuotation = createQuotation;
const updateQuotation = async (params) => {
    const data = await db_1.default
        .update(quotation_1.quotation)
        .set(params)
        .where((0, drizzle_orm_1.eq)(quotation_1.quotation.createdBy, params.createdBy))
        .returning();
    return data[0];
};
exports.updateQuotation = updateQuotation;
const deleteQuotation = async (id, revisi) => {
    const data = await db_1.default
        .delete(quotation_1.quotation)
        .where((0, drizzle_orm_1.eq)(quotation_1.quotation.createdBy, id))
        .returning();
    return data[0];
};
exports.deleteQuotation = deleteQuotation;
