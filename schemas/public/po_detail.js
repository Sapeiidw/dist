"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poDetail = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.poDetail = (0, pg_core_1.pgTable)("po_detail", {
    urut: (0, pg_core_1.integer)("urut").notNull(),
    idBarang: (0, pg_core_1.integer)("id_barang").notNull(),
    qty: (0, pg_core_1.numeric)("qty").notNull(),
    harga: (0, pg_core_1.numeric)("harga"),
    total: (0, pg_core_1.numeric)("total"),
    diskon: (0, pg_core_1.numeric)("diskon"),
    idSatuanKecil: (0, pg_core_1.varchar)("id_satuan_kecil"),
    diambil: (0, pg_core_1.numeric)("diambil"),
    sisa: (0, pg_core_1.numeric)("sisa"),
    diskonpersen: (0, pg_core_1.numeric)("diskonpersen"),
    diskonrp: (0, pg_core_1.numeric)("diskonrp"),
    invoice: (0, pg_core_1.numeric)("invoice").default("0"),
    id: (0, pg_core_1.integer)("id").notNull(),
}, (table) => {
    return {
        poDetailPkey: (0, pg_core_1.primaryKey)(table.idBarang, table.id),
    };
});
