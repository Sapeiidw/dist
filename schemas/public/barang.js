"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertBarangExtendedSchema = exports.insertBarangSchema = exports.usersRelations = exports.barang = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const satuan_1 = require("./satuan");
const kategori_barang_1 = require("./kategori_barang");
const drizzle_orm_1 = require("drizzle-orm");
const zod_1 = require("zod");
const drizzle_zod_1 = require("drizzle-zod");
const barang_satuan_1 = require("./barang_satuan");
exports.barang = (0, pg_core_1.pgTable)("barang", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.serial)("id").primaryKey().notNull(),
    kodeBarang: (0, pg_core_1.varchar)("kode_barang", { length: 30 }).notNull(),
    namaBarang: (0, pg_core_1.varchar)("nama_barang", { length: 255 }).notNull(),
    // TODO: failed to parse database type 'bytea'
    images: (0, pg_core_1.text)("images"),
    status: (0, pg_core_1.boolean)("status"),
    keterangan: (0, pg_core_1.varchar)("keterangan", { length: 250 }),
    idBrand: (0, pg_core_1.integer)("id_brand"),
    idKategori: (0, pg_core_1.integer)("id_kategori").references(() => kategori_barang_1.kategoriBarang.id),
    idSatuan: (0, pg_core_1.integer)("id_satuan").references(() => satuan_1.satuan.id),
    hargaJual: (0, pg_core_1.numeric)("harga_jual"),
    hargaBeli: (0, pg_core_1.numeric)("harga_beli"),
    isStok: (0, pg_core_1.boolean)("is_stok"),
    optional: (0, pg_core_1.json)("optional"),
}
// (table) => {
//   return {
//     id: foreignKey({
//       columns: [table.idKategori, table.id, table.idBrand],
//       foreignColumns: [supplier.idSupplier],
//     }),
//   };
// }
);
exports.usersRelations = (0, drizzle_orm_1.relations)(exports.barang, ({ many }) => ({
    satuans: many(barang_satuan_1.barangSatuan),
}));
exports.insertBarangSchema = (0, drizzle_zod_1.createInsertSchema)(exports.barang);
exports.insertBarangExtendedSchema = exports.insertBarangSchema.extend({
    satuan_data: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.number().optional(),
        id_satuan_kanan: zod_1.z.number(),
        id_satuan_kiri: zod_1.z.number(),
        konversi: zod_1.z.number(),
    })),
});
// export type NewBarangExtended = NewBarang & {
//   satuan_data: {
//     id: number;
//     id_satuan_kanan: number;
//     id_satuan_kiri: number;
//     konversi: number;
//   }[];
// };
