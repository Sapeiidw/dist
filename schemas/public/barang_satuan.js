"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertBarangSatuanSchema = exports.barangToSatuanRelations = exports.barangSatuan = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const barang_1 = require("./barang");
const satuan_1 = require("./satuan");
const drizzle_orm_1 = require("drizzle-orm");
const drizzle_zod_1 = require("drizzle-zod");
exports.barangSatuan = (0, pg_core_1.pgTable)("barang_satuan", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idBarang: (0, pg_core_1.bigint)("id_barang", { mode: "number" })
        .notNull()
        .references(() => barang_1.barang.id),
    idSatuan: (0, pg_core_1.integer)("id_satuan")
        .notNull()
        .references(() => satuan_1.satuan.id),
    konversi: (0, pg_core_1.doublePrecision)("konversi").notNull(),
}, (table) => {
    return {
        barangSatuanPkey: (0, pg_core_1.primaryKey)(table.idBarang, table.idSatuan),
    };
});
// export const barangRelations = relations(barangSatuan, ({ one }) => ({
//   barang: one(barang, {
//     fields: [barangSatuan.idBarang],
//     references: [barang.id],
//   }),
// }));
// export const satuanRelations = relations(barangSatuan, ({ one }) => ({
//   satuan: one(satuan, {
//     fields: [barangSatuan.idSatuan],
//     references: [satuan.id],
//   }),
// }));
exports.barangToSatuanRelations = (0, drizzle_orm_1.relations)(exports.barangSatuan, ({ one }) => ({
    barang: one(barang_1.barang, {
        fields: [exports.barangSatuan.idBarang],
        references: [barang_1.barang.id],
    }),
    satuan: one(satuan_1.satuan, {
        fields: [exports.barangSatuan.idSatuan],
        references: [satuan_1.satuan.id],
    }),
}));
exports.insertBarangSatuanSchema = (0, drizzle_zod_1.createInsertSchema)(exports.barangSatuan);
