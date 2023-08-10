"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accValue = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.accValue = (0, pg_core_1.pgTable)("acc_value", {
    years: (0, pg_core_1.varchar)("years", { length: 4 }).notNull(),
    account: (0, pg_core_1.integer)("account").notNull(),
    idPerusahaan: (0, pg_core_1.varchar)("id_perusahaan", { length: 3 }).default("01"),
    db0: (0, pg_core_1.numeric)("db0").default("0").notNull(),
    db1: (0, pg_core_1.numeric)("db1").default("0").notNull(),
    db2: (0, pg_core_1.numeric)("db2").default("0").notNull(),
    db3: (0, pg_core_1.numeric)("db3").default("0").notNull(),
    db4: (0, pg_core_1.numeric)("db4").default("0").notNull(),
    db5: (0, pg_core_1.numeric)("db5").default("0").notNull(),
    db6: (0, pg_core_1.numeric)("db6").default("0").notNull(),
    db7: (0, pg_core_1.numeric)("db7").default("0").notNull(),
    db8: (0, pg_core_1.numeric)("db8").default("0").notNull(),
    db9: (0, pg_core_1.numeric)("db9").default("0").notNull(),
    db10: (0, pg_core_1.numeric)("db10").default("0").notNull(),
    db11: (0, pg_core_1.numeric)("db11").default("0").notNull(),
    db12: (0, pg_core_1.numeric)("db12").default("0").notNull(),
    db13: (0, pg_core_1.numeric)("db13").default("0").notNull(),
    cr0: (0, pg_core_1.numeric)("cr0").default("0").notNull(),
    cr1: (0, pg_core_1.numeric)("cr1").default("0").notNull(),
    cr2: (0, pg_core_1.numeric)("cr2").default("0").notNull(),
    cr3: (0, pg_core_1.numeric)("cr3").default("0").notNull(),
    cr4: (0, pg_core_1.numeric)("cr4").default("0").notNull(),
    cr5: (0, pg_core_1.numeric)("cr5").default("0").notNull(),
    cr6: (0, pg_core_1.numeric)("cr6").default("0").notNull(),
    cr7: (0, pg_core_1.numeric)("cr7").default("0").notNull(),
    cr8: (0, pg_core_1.numeric)("cr8").default("0").notNull(),
    cr9: (0, pg_core_1.numeric)("cr9").default("0").notNull(),
    cr10: (0, pg_core_1.numeric)("cr10").default("0").notNull(),
    cr11: (0, pg_core_1.numeric)("cr11").default("0").notNull(),
    cr12: (0, pg_core_1.numeric)("cr12").default("0").notNull(),
    cr13: (0, pg_core_1.numeric)("cr13").default("0").notNull(),
}, (table) => {
    return {
        accValuePkey: (0, pg_core_1.primaryKey)(table.years, table.account),
    };
});
