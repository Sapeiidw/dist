"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertQuotationSchema = exports.quotation = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const kontak_1 = require("./kontak");
const gudang_1 = require("./gudang");
const drizzle_zod_1 = require("drizzle-zod");
exports.quotation = (0, pg_core_1.pgTable)("quotation", {
    id: (0, pg_core_1.serial)("id").notNull(),
    nomor: (0, pg_core_1.varchar)("nomor", { length: 50 }).notNull(),
    tanggal: (0, pg_core_1.date)("tanggal").notNull(),
    idCustomer: (0, pg_core_1.integer)("id_customer")
        .notNull()
        .references(() => kontak_1.kontak.id),
    kepada: (0, pg_core_1.varchar)("kepada", { length: 100 }),
    keterangan: (0, pg_core_1.varchar)("keterangan", { length: 100 }),
    total: (0, pg_core_1.numeric)("total"),
    discountBaris: (0, pg_core_1.numeric)("discount_baris"),
    totalDiscount: (0, pg_core_1.numeric)("total_discount"),
    idSalesman: (0, pg_core_1.integer)("id_salesman").notNull(),
    kodeMataUang: (0, pg_core_1.varchar)("kode_mata_uang", { length: 10 }),
    alamat: (0, pg_core_1.varchar)("alamat", { length: 100 }),
    idGudang: (0, pg_core_1.integer)("id_gudang").references(() => gudang_1.gudang.idGudang),
    dpp: (0, pg_core_1.numeric)("dpp"),
    grandtotal: (0, pg_core_1.numeric)("grandtotal"),
    telpon: (0, pg_core_1.varchar)("telpon", { length: 50 }),
    hp: (0, pg_core_1.varchar)("hp", { length: 20 }),
    email: (0, pg_core_1.varchar)("email", { length: 100 }),
    persendiskon: (0, pg_core_1.numeric)("persendiskon"),
    syarat: (0, pg_core_1.text)("syarat"),
    top: (0, pg_core_1.integer)("top"),
    revisi: (0, pg_core_1.integer)("revisi").notNull(),
    idKantor: (0, pg_core_1.integer)("id_kantor"),
    status: (0, pg_core_1.char)("status", { length: 1 }),
    createdBy: (0, pg_core_1.integer)("created_by").notNull(),
    createdDate: (0, pg_core_1.timestamp)("created_date", { mode: "string" }).notNull(),
    modifiedBy: (0, pg_core_1.integer)("modified_by"),
    modifiedDate: (0, pg_core_1.timestamp)("modified_date", { mode: "string" }),
    valid: (0, pg_core_1.integer)("valid"),
    alasan: (0, pg_core_1.text)("alasan"),
}, (table) => {
    return {
        penawaranPkey: (0, pg_core_1.primaryKey)(table.id, table.revisi),
    };
});
// export const quotationDetailRelations = relations(quotation, ({ many }) => ({
// 	posts: many(quotationDetail),
// }));
exports.insertQuotationSchema = (0, drizzle_zod_1.createInsertSchema)(exports.quotation);
