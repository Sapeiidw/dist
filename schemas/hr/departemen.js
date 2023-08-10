"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertDepartemenSchema = exports.departemen = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_zod_1 = require("drizzle-zod");
const hr = (0, pg_core_1.pgSchema)("hr");
exports.departemen = hr.table("departemen", {
    id_departemen: (0, pg_core_1.serial)("id_departemen").primaryKey().notNull(),
    departemen: (0, pg_core_1.varchar)("departemen", { length: 255 }).notNull(),
    kode: (0, pg_core_1.varchar)("kode", { length: 255 }).notNull(),
});
exports.insertDepartemenSchema = (0, drizzle_zod_1.createInsertSchema)(exports.departemen);
