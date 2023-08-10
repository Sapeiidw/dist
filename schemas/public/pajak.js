"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertPajakSchema = exports.akun_penjualanRelations = exports.akun_pembelianRelations = exports.pajak = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
const drizzle_zod_1 = require("drizzle-zod");
const account_1 = require("./account");
exports.pajak = (0, pg_core_1.pgTable)("pajak", {
    id: (0, pg_core_1.serial)("id").primaryKey().notNull(),
    nama: (0, pg_core_1.varchar)("nama", { length: 30 }).notNull(),
    nilai: (0, pg_core_1.numeric)("nilai").notNull(),
    ispotong: (0, pg_core_1.boolean)("ispotong").default(false).notNull(),
    akunPembelian: (0, pg_core_1.integer)("akun_pembelian").notNull().references(() => account_1.account.idAccount),
    akunPenjualan: (0, pg_core_1.integer)("akun_penjualan").notNull().references(() => account_1.account.idAccount),
    jenis: (0, pg_core_1.varchar)("jenis"),
});
exports.akun_pembelianRelations = (0, drizzle_orm_1.relations)(exports.pajak, ({ one }) => ({
    account: one(account_1.account, {
        fields: [exports.pajak.akunPembelian],
        references: [account_1.account.idAccount],
    }),
}));
exports.akun_penjualanRelations = (0, drizzle_orm_1.relations)(exports.pajak, ({ one }) => ({
    account: one(account_1.account, {
        fields: [exports.pajak.akunPenjualan],
        references: [account_1.account.idAccount],
    }),
}));
exports.insertPajakSchema = (0, drizzle_zod_1.createInsertSchema)(exports.pajak);
