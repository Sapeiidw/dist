"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertKategoriKontakSchema = exports.kategoriKontak = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_zod_1 = require("drizzle-zod");
exports.kategoriKontak = (0, pg_core_1.pgTable)("kategori_kontak", {
    id: (0, pg_core_1.serial)("id").primaryKey().notNull(),
    kategori: (0, pg_core_1.varchar)("kategori", { length: 50 }).notNull(),
});
exports.insertKategoriKontakSchema = (0, drizzle_zod_1.createInsertSchema)(exports.kategoriKontak);
