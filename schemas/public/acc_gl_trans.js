"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accGlTrans = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.accGlTrans = (0, pg_core_1.pgTable)("acc_gl_trans", {
    journalCode: (0, pg_core_1.varchar)("journal_code", { length: 3 }),
    glNumber: (0, pg_core_1.varchar)("gl_number", { length: 10 }).primaryKey().notNull(),
    glDate: (0, pg_core_1.date)("gl_date").notNull(),
    note: (0, pg_core_1.text)("note"),
    tag: (0, pg_core_1.varchar)("tag", { length: 5 }),
    posting: (0, pg_core_1.boolean)("posting").default(false),
    idPerusahaan: (0, pg_core_1.varchar)("id_perusahaan", { length: 3 }),
    reference: (0, pg_core_1.varchar)("reference", { length: 50 }),
    jumlah: (0, pg_core_1.numeric)("jumlah"),
});
