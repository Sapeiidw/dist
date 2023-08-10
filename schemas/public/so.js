"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.so = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const kontak_1 = require("./kontak");
const gudang_1 = require("./gudang");
const quotation_1 = require("./quotation");
exports.so = (0, pg_core_1.pgTable)("so", {
    id: (0, pg_core_1.serial)("id").primaryKey().notNull(),
    nomor: (0, pg_core_1.varchar)("nomor", { length: 30 }).notNull(),
    tanggal: (0, pg_core_1.date)("tanggal"),
    idCustomer: (0, pg_core_1.integer)("id_customer")
        .notNull()
        .references(() => kontak_1.kontak.id),
    kepada: (0, pg_core_1.varchar)("kepada", { length: 100 }),
    keterangan: (0, pg_core_1.varchar)("keterangan", { length: 100 }),
    total: (0, pg_core_1.numeric)("total"),
    diskonBaris: (0, pg_core_1.numeric)("diskon_baris"),
    totalDiscount: (0, pg_core_1.numeric)("total_discount"),
    idSalesman: (0, pg_core_1.integer)("id_salesman"),
    kodeMataUang: (0, pg_core_1.varchar)("kode_mata_uang", { length: 10 }),
    alamat: (0, pg_core_1.varchar)("alamat", { length: 100 }),
    idGudang: (0, pg_core_1.integer)("id_gudang").references(() => gudang_1.gudang.idGudang),
    dpp: (0, pg_core_1.numeric)("dpp"),
    grandtotal: (0, pg_core_1.numeric)("grandtotal"),
    telpon: (0, pg_core_1.varchar)("telpon", { length: 50 }),
    hp: (0, pg_core_1.varchar)("hp", { length: 2050 }),
    email: (0, pg_core_1.varchar)("email", { length: 100 }),
    persendiskon: (0, pg_core_1.numeric)("persendiskon"),
    deliverypoint: (0, pg_core_1.text)("deliverypoint"),
    syarat: (0, pg_core_1.text)("syarat"),
    top: (0, pg_core_1.integer)("top").default(0),
    idPenawaran: (0, pg_core_1.integer)("id_quotation"),
    referensi: (0, pg_core_1.varchar)("referensi", { length: 100 }),
    tglRef: (0, pg_core_1.date)("tgl_ref"),
    status: (0, pg_core_1.char)("status", { length: 1 }),
    jenis: (0, pg_core_1.char)("jenis", { length: 1 }),
    revisiPenawaran: (0, pg_core_1.integer)("revisi_quotation"),
    createdBy: (0, pg_core_1.integer)("created_by").notNull(),
    createdDate: (0, pg_core_1.timestamp)("created_date", { mode: "string" }).notNull(),
    modifiedBy: (0, pg_core_1.integer)("modified_by"),
    modifiedDate: (0, pg_core_1.timestamp)("modified_date", { mode: "string" }),
    isPph: (0, pg_core_1.boolean)("is_pph").default(false).notNull(),
    totalPph: (0, pg_core_1.numeric)("total_pph").default("0").notNull(),
}, (table) => {
    return {
        soIdPenawaranFkey: (0, pg_core_1.foreignKey)({
            columns: [table.idPenawaran, table.revisiPenawaran],
            foreignColumns: [quotation_1.quotation.id, quotation_1.quotation.revisi],
        }),
    };
});
