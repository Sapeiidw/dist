"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertBrandSchema = exports.brand = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_zod_1 = require("drizzle-zod");
exports.brand = (0, pg_core_1.pgTable)("brand", {
    id: (0, pg_core_1.serial)("id").primaryKey().notNull(),
    brand: (0, pg_core_1.varchar)("brand", { length: 50 }).notNull(),
});
exports.insertBrandSchema = (0, drizzle_zod_1.createInsertSchema)(exports.brand);
