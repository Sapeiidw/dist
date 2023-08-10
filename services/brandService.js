"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBrand = exports.updateBrand = exports.createBrand = exports.getBrandById = exports.getBrand = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const brand_1 = require("../schemas/public/brand");
const db_1 = __importDefault(require("../libs/db"));
const getBrand = async () => {
    const data = await db_1.default.select().from(brand_1.brand);
    return data;
};
exports.getBrand = getBrand;
const getBrandById = async (params) => {
    const data = await db_1.default
        .select()
        .from(brand_1.brand)
        .where((0, drizzle_orm_1.eq)(brand_1.brand.id, params));
    return data[0];
};
exports.getBrandById = getBrandById;
const createBrand = async (params) => {
    const data = await db_1.default.insert(brand_1.brand).values(params).returning();
    return data[0];
};
exports.createBrand = createBrand;
const updateBrand = async (params) => {
    const data = await db_1.default
        .update(brand_1.brand)
        .set(params)
        .where((0, drizzle_orm_1.eq)(brand_1.brand.id, params.id))
        .returning();
    return data[0];
};
exports.updateBrand = updateBrand;
const deleteBrand = async (id) => {
    const data = await db_1.default
        .delete(brand_1.brand)
        .where((0, drizzle_orm_1.eq)(brand_1.brand.id, id))
        .returning();
    return data[0];
};
exports.deleteBrand = deleteBrand;
