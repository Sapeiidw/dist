"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAccountSchema = exports.account = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_zod_1 = require("drizzle-zod");
exports.account = (0, pg_core_1.pgTable)("account", {
    idAccount: (0, pg_core_1.serial)("id_account").primaryKey().notNull(),
    tipeAccount: (0, pg_core_1.boolean)("tipe_account"),
    pembayaran: (0, pg_core_1.boolean)("pembayaran"),
    account: (0, pg_core_1.varchar)("account", { length: 255 }).notNull(),
    parent: (0, pg_core_1.integer)("parent"),
    kantor: (0, pg_core_1.varchar)("kantor"),
    aktif: (0, pg_core_1.boolean)("aktif"),
    level: (0, pg_core_1.integer)("level"),
});
exports.insertAccountSchema = (0, drizzle_zod_1.createInsertSchema)(exports.account);
