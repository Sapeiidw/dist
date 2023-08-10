"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertJabatanSchema = exports.jabatan = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_zod_1 = require("drizzle-zod");
const hr = (0, pg_core_1.pgSchema)("hr");
exports.jabatan = hr.table("jabatan", {
    id: (0, pg_core_1.serial)("id").primaryKey().notNull(),
    jabatan: (0, pg_core_1.varchar)("name", { length: 255 }).notNull(),
    isHeadDepartemen: (0, pg_core_1.boolean)("is_head_departemen").default(false),
    atasan: (0, pg_core_1.integer)("atasan"),
});
exports.insertJabatanSchema = (0, drizzle_zod_1.createInsertSchema)(exports.jabatan);
