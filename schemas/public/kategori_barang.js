"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertKategoriBarangSchema = exports.kategoriBarang = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_zod_1 = require("drizzle-zod");
exports.kategoriBarang = (0, pg_core_1.pgTable)("kategori_barang", {
    id: (0, pg_core_1.serial)("id").primaryKey().notNull(),
    kategoriBarang: (0, pg_core_1.varchar)("kategori_barang", { length: 50 }).notNull(),
});
exports.insertKategoriBarangSchema = (0, drizzle_zod_1.createInsertSchema)(exports.kategoriBarang);
