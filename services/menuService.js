"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenu = exports.updateMenu = exports.createMenu = exports.getMenuById = exports.getMenu = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const menu_1 = require("../schemas/public/menu");
const db_1 = __importDefault(require("../libs/db"));
const getMenu = async () => {
    const data = await db_1.default.select().from(menu_1.menu);
    return data;
};
exports.getMenu = getMenu;
const getMenuById = async (params) => {
    const data = await db_1.default.select().from(menu_1.menu).where((0, drizzle_orm_1.eq)(menu_1.menu.id, params));
    return data[0];
};
exports.getMenuById = getMenuById;
const createMenu = async (params) => {
    const data = await db_1.default.insert(menu_1.menu).values(params).returning();
    return data[0];
};
exports.createMenu = createMenu;
const updateMenu = async (params) => {
    const data = await db_1.default
        .update(menu_1.menu)
        .set(params)
        .where((0, drizzle_orm_1.eq)(menu_1.menu.id, params.id))
        .returning();
    return data[0];
};
exports.updateMenu = updateMenu;
const deleteMenu = async (id) => {
    const data = await db_1.default.delete(menu_1.menu).where((0, drizzle_orm_1.eq)(menu_1.menu.id, id)).returning();
    return data[0];
};
exports.deleteMenu = deleteMenu;
