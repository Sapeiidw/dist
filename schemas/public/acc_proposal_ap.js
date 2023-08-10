"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accProposalAp = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.accProposalAp = (0, pg_core_1.pgTable)("acc_proposal_ap", {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: (0, pg_core_1.serial)("id").primaryKey().notNull(),
    noProposal: (0, pg_core_1.varchar)("no_proposal", { length: 30 }).notNull(),
    tanggal: (0, pg_core_1.date)("tanggal").notNull(),
    idPerusahaan: (0, pg_core_1.varchar)("id_perusahaan", { length: 3 }),
    keterangan: (0, pg_core_1.text)("keterangan"),
    status: (0, pg_core_1.varchar)("status", { length: 1 }).notNull(),
    prepared: (0, pg_core_1.varchar)("prepared", { length: 10 }),
});
