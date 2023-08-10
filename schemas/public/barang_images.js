"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.barangImages = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const barang_1 = require("./barang");
exports.barangImages = (0, pg_core_1.pgTable)("barang_images", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.bigint)("id", { mode: "number" })
        .notNull()
        .references(() => barang_1.barang.id),
    namaGambar: (0, pg_core_1.varchar)("nama_gambar", { length: 30 }).notNull(),
    deskripsi: (0, pg_core_1.varchar)("deskripsi", { length: 255 }),
    isutama: (0, pg_core_1.boolean)("isutama").default(false).notNull(),
    urut: (0, pg_core_1.integer)("urut").notNull(),
}, (table) => {
    return {
        barangImagesPkey: (0, pg_core_1.primaryKey)(table.id, table.urut),
    };
});
