"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quotationDetail = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const barang_1 = require("./barang");
const satuan_1 = require("./satuan");
exports.quotationDetail = (0, pg_core_1.pgTable)("quotation_detail", {
    id: (0, pg_core_1.integer)("id").notNull(),
    revisi: (0, pg_core_1.integer)("revisi").notNull(),
    urut: (0, pg_core_1.integer)("urut").notNull(),
    idBarang: (0, pg_core_1.integer)("id_barang").notNull().references(() => barang_1.barang.id),
    qty: (0, pg_core_1.numeric)("qty").notNull(),
    idSatuan: (0, pg_core_1.integer)("id_satuan").references(() => satuan_1.satuan.id),
    harga: (0, pg_core_1.numeric)("harga").notNull(),
    diskon: (0, pg_core_1.numeric)("diskon"),
    diskonpersen: (0, pg_core_1.numeric)("diskonpersen"),
    total: (0, pg_core_1.numeric)("total").notNull(),
    note: (0, pg_core_1.varchar)("note", { length: 255 }),
    idPajak: (0, pg_core_1.varchar)("id_pajak", { length: 255 }),
    persenPajak: (0, pg_core_1.varchar)("persen_pajak", { length: 255 }),
}, (table) => {
    return {
        penawaranDetailPkey: (0, pg_core_1.primaryKey)(table.id, table.revisi, table.urut)
    };
});
