"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertSatuanSchema = exports.satuan = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_zod_1 = require("drizzle-zod");
exports.satuan = (0, pg_core_1.pgTable)("satuan", {
    id: (0, pg_core_1.serial)("id").primaryKey().notNull(),
    satuan: (0, pg_core_1.varchar)("satuan", { length: 20 }).notNull(),
});
exports.insertSatuanSchema = (0, drizzle_zod_1.createInsertSchema)(exports.satuan);
