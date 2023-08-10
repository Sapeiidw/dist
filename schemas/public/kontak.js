"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertKontakSchema = exports.kontak = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const account_1 = require("./account");
const kategori_kontak_1 = require("./kategori_kontak");
const drizzle_zod_1 = require("drizzle-zod");
exports.kontak = (0, pg_core_1.pgTable)("kontak", {
    id: (0, pg_core_1.serial)("id").primaryKey().notNull(),
    inisial: (0, pg_core_1.varchar)("inisial", { length: 10 }).notNull(),
    kontak: (0, pg_core_1.varchar)("kontak", { length: 100 }).notNull(),
    npwp: (0, pg_core_1.varchar)("npwp", { length: 30 }),
    alamatNpwp: (0, pg_core_1.varchar)("alamat_npwp", { length: 200 }),
    telepon: (0, pg_core_1.varchar)("telepon", { length: 50 }),
    email: (0, pg_core_1.varchar)("email", { length: 50 }),
    alamatPenagihan: (0, pg_core_1.text)("alamat_penagihan"),
    idKategori: (0, pg_core_1.integer)("id_kategori").references(() => kategori_kontak_1.kategoriKontak.id),
    namaBank: (0, pg_core_1.text)("nama_bank"),
    noRekening: (0, pg_core_1.varchar)("no_rekening", { length: 25 }),
    pemegangRekening: (0, pg_core_1.varchar)("pemegang_rekening", { length: 50 }),
    isaktif: (0, pg_core_1.boolean)("isaktif").default(true).notNull(),
    batasKredit: (0, pg_core_1.numeric)("batas_kredit"),
    website: (0, pg_core_1.varchar)("website", { length: 50 }),
    top: (0, pg_core_1.integer)("top"),
    alamatKirim: (0, pg_core_1.varchar)("alamat_kirim", { length: 300 }),
    kode: (0, pg_core_1.varchar)("kode", { length: 10 }),
    hp: (0, pg_core_1.varchar)("hp", { length: 50 }),
    akunHutang: (0, pg_core_1.integer)("akun_hutang").references(() => account_1.account.idAccount),
    akunPiutang: (0, pg_core_1.integer)("akun_piutang").references(() => account_1.account.idAccount),
    iscustomer: (0, pg_core_1.boolean)("iscustomer").default(true).notNull(),
    issupplier: (0, pg_core_1.boolean)("issupplier").default(true).notNull(),
});
exports.insertKontakSchema = (0, drizzle_zod_1.createInsertSchema)(exports.kontak);
