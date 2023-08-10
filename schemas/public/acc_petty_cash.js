"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accPettyCash = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.accPettyCash = (0, pg_core_1.pgTable)("acc_petty_cash", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.serial)("id").primaryKey().notNull(),
    saldoAwal: (0, pg_core_1.numeric)("saldo_awal"),
    tanggal: (0, pg_core_1.date)("tanggal").notNull(),
    saldoAkhir: (0, pg_core_1.numeric)("saldo_akhir"),
    idKas: (0, pg_core_1.integer)("id_kas").notNull(),
    createdBy: (0, pg_core_1.integer)("created_by").notNull(),
    createdDate: (0, pg_core_1.timestamp)("created_date", { mode: "string" }).notNull(),
    modifiedBy: (0, pg_core_1.integer)("modified_by"),
    modifiedDate: (0, pg_core_1.timestamp)("modified_date", { mode: "string" }),
    status: (0, pg_core_1.varchar)("status", { length: 1 }).notNull(),
});
