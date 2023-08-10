"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.soDetail = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const satuan_1 = require("./satuan");
const barang_1 = require("./barang");
const so_1 = require("./so");
exports.soDetail = (0, pg_core_1.pgTable)("so_detail", {
    id: (0, pg_core_1.integer)("id")
        .notNull()
        .references(() => so_1.so.id),
    urut: (0, pg_core_1.integer)("urut").notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idBarang: (0, pg_core_1.bigint)("id_barang", { mode: "number" })
        .notNull()
        .references(() => barang_1.barang.id),
    remark: (0, pg_core_1.varchar)("remark", { length: 255 }),
    qty: (0, pg_core_1.numeric)("qty"),
    idSatuan: (0, pg_core_1.integer)("id_satuan").references(() => satuan_1.satuan.id),
    harga: (0, pg_core_1.numeric)("harga"),
    total: (0, pg_core_1.numeric)("total"),
    diskon: (0, pg_core_1.numeric)("diskon"),
    diskonpersen: (0, pg_core_1.numeric)("diskonpersen"),
    diambil: (0, pg_core_1.numeric)("diambil"),
    sisa: (0, pg_core_1.numeric)("sisa"),
    idPajak: (0, pg_core_1.varchar)("id_pajak", { length: 100 }),
    persenPajak: (0, pg_core_1.varchar)("persen_pajak", { length: 100 }),
}, (table) => {
    return {
        soDetailPkey: (0, pg_core_1.primaryKey)(table.id, table.idBarang),
    };
});
