"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accKas = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.accKas = (0, pg_core_1.pgTable)("acc_kas", {
    nomor: (0, pg_core_1.varchar)("nomor", { length: 30 }).notNull(),
    tanggal: (0, pg_core_1.date)("tanggal").notNull(),
    idJenisTransaksi: (0, pg_core_1.varchar)("id_jenis_transaksi", { length: 1 }),
    uraian: (0, pg_core_1.varchar)("uraian", { length: 255 }),
    total: (0, pg_core_1.numeric)("total").default("0").notNull(),
    idAccount: (0, pg_core_1.integer)("id_account").notNull(),
    status: (0, pg_core_1.varchar)("status", { length: 1 }).notNull(),
    id: (0, pg_core_1.serial)("id").primaryKey().notNull(),
    kepada: (0, pg_core_1.varchar)("kepada", { length: 100 }),
    idKantor: (0, pg_core_1.integer)("id_kantor").notNull(),
    idPegawai: (0, pg_core_1.integer)("id_pegawai").notNull(),
    jenisKas: (0, pg_core_1.varchar)("jenis_kas", { length: 1 }),
});
