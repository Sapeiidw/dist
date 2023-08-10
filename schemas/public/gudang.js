"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertGudangSchema = exports.gudang = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const account_1 = require("./account");
const drizzle_zod_1 = require("drizzle-zod");
exports.gudang = (0, pg_core_1.pgTable)("gudang", {
    idGudang: (0, pg_core_1.serial)("id_gudang").primaryKey().notNull(),
    gudang: (0, pg_core_1.varchar)("gudang", { length: 100 }).notNull(),
    telpon: (0, pg_core_1.varchar)("telpon", { length: 20 }),
    alamat: (0, pg_core_1.text)("alamat"),
    inisial: (0, pg_core_1.varchar)("inisial", { length: 15 }),
    accountHpp: (0, pg_core_1.integer)("account_hpp"),
    accountPersediaan: (0, pg_core_1.integer)("account_persediaan").references(() => account_1.account.idAccount),
    blind: (0, pg_core_1.boolean)("blind").default(true).notNull(),
    stokopname: (0, pg_core_1.boolean)("stokopname").default(false).notNull(),
    idKantor: (0, pg_core_1.integer)("id_kantor"),
});
exports.insertGudangSchema = (0, drizzle_zod_1.createInsertSchema)(exports.gudang);
