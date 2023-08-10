"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountByCategory = exports.deleteAccount = exports.updateAccount = exports.createAccount = exports.getAccountById = exports.getAccount = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const account_1 = require("../schemas/public/account");
const db_1 = __importDefault(require("../libs/db"));
const getAccount = async () => {
    const data = await db_1.default.select().from(account_1.account);
    return data;
};
exports.getAccount = getAccount;
const getAccountById = async (params) => {
    const data = await db_1.default
        .select()
        .from(account_1.account)
        .where((0, drizzle_orm_1.eq)(account_1.account.idAccount, params));
    return data[0];
};
exports.getAccountById = getAccountById;
const createAccount = async (params) => {
    const data = await db_1.default.insert(account_1.account).values(params).returning();
    return data[0];
};
exports.createAccount = createAccount;
const updateAccount = async (params) => {
    const data = await db_1.default
        .update(account_1.account)
        .set(params)
        .where((0, drizzle_orm_1.eq)(account_1.account.idAccount, params.idAccount))
        .returning();
    return data[0];
};
exports.updateAccount = updateAccount;
const deleteAccount = async (params) => {
    const data = await db_1.default
        .delete(account_1.account)
        .where((0, drizzle_orm_1.eq)(account_1.account.idAccount, params))
        .returning();
    return data[0];
};
exports.deleteAccount = deleteAccount;
const getAccountByCategory = async (batas_bawah, batas_atas) => {
    const data = await db_1.default
        .select()
        .from(account_1.account)
        .where((0, drizzle_orm_1.and)((0, drizzle_orm_1.gt)(account_1.account.idAccount, batas_bawah), (0, drizzle_orm_1.lt)(account_1.account.idAccount, batas_atas)));
    return data;
};
exports.getAccountByCategory = getAccountByCategory;
